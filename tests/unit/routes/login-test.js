import { module, test } from 'qunit';
import { visit, currentURL, fillIn, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | login', function (hooks) {
  setupApplicationTest(hooks);

  test('Visiting /login and submitting the form', async function (assert) {
    await visit('/login');

    assert.strictEqual(currentURL(), '/login', 'The user is on the login page');

    await fillIn('input[placeholder="Username"]', 'testuser');
    await fillIn('input[placeholder="Password"]', 'password123');
    await click('button[type="submit"]');

    assert
      .dom('body')
      .includesText(
        'Login successful!',
        'The user sees a success message after login',
      );
  });
});
