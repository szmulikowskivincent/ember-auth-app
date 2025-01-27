// app/controllers/application.js
import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ApplicationController extends Controller {
  @service router;

  isAuthenticated = false;
  avatarPreview = '';

  constructor() {
    super(...arguments);
    this.loadProfile();
  }

  loadProfile() {
    const profileData = JSON.parse(localStorage.getItem('profile'));
    if (profileData) {
      this.isAuthenticated = true;
      this.avatarPreview = profileData.avatarPreview || '';
    }
  }

  @action
  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('profile');
    this.isAuthenticated = false;
    this.avatarPreview = ''; // Reset the avatar

    this.router.transitionTo('home');
  }
}
