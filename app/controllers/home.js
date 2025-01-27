import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class HomeController extends Controller {
  @service router;
  @service auth;

  userName = '';
  userSurname = '';
  selectedOffer = null;

  offerDetails = {
    offer1: {
      name: 'Basic Sponsorship',
      price: 500,
      services: [
        'Logo on website',
        'Social media shoutout',
        'Newsletter mention',
      ],
    },
    offer2: {
      name: 'Premium Sponsorship',
      price: 1000,
      services: [
        'Logo on website',
        'Social media shoutout',
        'Newsletter mention',
        'Event sponsorship',
      ],
    },
    offer3: {
      name: 'Exclusive Sponsorship',
      price: 2000,
      services: [
        'Logo on website',
        'Social media shoutout',
        'Newsletter mention',
        'Event sponsorship',
        'Dedicated blog post',
      ],
    },
  };

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

  @action
  selectOffer(event) {
    const offerKey = event.target.value;
    this.set('selectedOffer', this.offerDetails[offerKey]);
  }

  @action
  toggleValidation(event) {
    this.isDisabled = !event.target.checked;
  }

  @action
  validateAndRedirect() {
    alert('Redirecting to payment...');
    this.router.transitionTo('/payment');
  }
}
