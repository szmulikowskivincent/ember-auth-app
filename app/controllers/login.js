import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class LoginController extends Controller {
  @service router;
  email = '';
  password = '';
  isLoggedIn = false;

  constructor() {
    super(...arguments);
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      this.isLoggedIn = true;
    }
  }

  @action
  updateEmail(event) {
    this.email = event.target.value;
  }

  @action
  updatePassword(event) {
    this.password = event.target.value;
  }

  @action
  submitForm(event) {
    event.preventDefault();

    if (!this.email || !this.password) {
      alert('Both email and password are required!');
      return;
    }

    const storedUser = localStorage.getItem('user');
    if (!storedUser) {
      alert('No user found! Please register first.');
      return;
    }

    const parsedUser = JSON.parse(storedUser);

    if (
      parsedUser.email !== this.email ||
      parsedUser.password !== this.password
    ) {
      alert('Invalid email or password!');
      return;
    }

    alert('Login successful!');

    this.setProperties({
      email: '',
      password: '',
    });

    this.isLoggedIn = true;

    this.router.transitionTo('/my-profile');
  }

  @action
  goToProfile() {
    this.router.transitionTo('/my-profile');
  }
}
