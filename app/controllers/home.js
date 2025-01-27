import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class ApplicationController extends Controller {
  @service router;
  @service auth;

  userName = '';
  userSurname = '';

  constructor() {
    super(...arguments);

    const userData = JSON.parse(localStorage.getItem('user'));
    if (userData) {
      this.userName = userData.name || '';
      this.userSurname = userData.surname || '';
    }
  }

  @action
  logout() {
    this.auth.logout();
    localStorage.removeItem('user');
    this.router.transitionTo('home');
    window.location.reload();
  }
}
