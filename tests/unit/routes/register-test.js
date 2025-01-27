import { module, test } from 'qunit';
import { visit, currentURL, fillIn, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | register', function (hooks) {
  setupApplicationTest(hooks);

  test('Visiting /register and submitting the form', async function (assert) {
    await visit('/register');

    assert.strictEqual(
      currentURL(),
      '/register',
      'The user is on the register page',
    );

    await fillIn('input[placeholder="Username"]', 'testuser');
    await fillIn('input[placeholder="Password"]', 'password123');
    await click('button[type="submit"]');

    assert
      .dom('body')
      .includesText(
        'Registration successful!',
        'The user sees a success message after registration',
      );
  });
});
