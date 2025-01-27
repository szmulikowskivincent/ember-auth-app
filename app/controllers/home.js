import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class HomeController extends Controller {
  @service router;
  @service auth;

  @tracked userName = '';
  @tracked userSurname = '';
  @tracked selectedOffer = null;
  @tracked isCheckboxChecked = false;

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

  get isDisabled() {
    return !(this.selectedOffer && this.isCheckboxChecked);
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
    this.selectedOffer = this.offerDetails[offerKey];
  }

  @action
  toggleValidation(event) {
    this.isCheckboxChecked = event.target.checked;
  }

  @action
  validateAndRedirect() {
    if (!this.selectedOffer || !this.isCheckboxChecked) {
      alert('Please select an offer and agree to the terms before proceeding.');
      return;
    }

    alert('Redirecting to payment...');
    this.router.transitionTo('/payment');
  }
}
