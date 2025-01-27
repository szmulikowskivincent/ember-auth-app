import Route from '@ember/routing/route';

export default class HomeRoute extends Route {
  model() {
    return {
      welcomeMessage: 'Welcome to EmberAuthApp!',
    };
  }
}
