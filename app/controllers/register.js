import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { next } from '@ember/runloop';

export default class RegisterController extends Controller {
  @service router;

  name = '';
  email = '';
  password = '';
  isRegistered = false;

  @action
  updateName(event) {
    this.name = event.target.value;
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

    const user = {
      name: this.name,
      email: this.email,
      password: this.password,
    };

    localStorage.setItem('user', JSON.stringify(user));

    alert('User registered successfully!');

    this.set('isRegistered', true);

    this.setProperties({
      name: '',
      email: '',
      password: '',
    });

    next(() => {
      this.router.transitionTo('/login');
    });
  }

  @action
  goToLogin() {
    this.router.transitionTo('/login');
  }
}
