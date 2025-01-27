import Route from '@ember/routing/route';

export default class PaymentRoute extends Route {
  model() {
    return {
      selectedPaymentMethod: null,
    };
  }
}
