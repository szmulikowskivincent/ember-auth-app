import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class ApplicationController extends Controller {
  @service router;
  @service auth;

  @action
  logout() {
    this.auth.logout();
    this.router.transitionTo('home');
  }
}
