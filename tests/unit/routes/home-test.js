import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | home', function (hooks) {
  setupApplicationTest(hooks);

  test('Visiting /home', async function (assert) {
    await visit('/home');

    assert.strictEqual(currentURL(), '/home', 'The user is on the home page');
    assert
      .dom('h1')
      .hasText('Welcome to EmberAuthApp!', 'The welcome message is displayed');
  });
});
