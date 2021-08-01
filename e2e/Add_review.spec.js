/* eslint-disable max-len */
/* eslint-disable new-cap */
const assert = require('assert');

Feature('Add new restaurant review');

Before(async ({I}) => {
  // Diawali dengan mengakses homepage
  I.amOnPage('/');

  // Mencari katalog restoran
  I.seeElement('.catalog__header a');

  // Mengakses detail restoran pada indeks pertama
  const sampleTest = locate('.catalog__header a').first();
  I.click(sampleTest);

  // Mencari judul restoran
  I.seeElement('.restaurant-details__header-left h1');
  const restaurantTitle = await I.grabTextFrom('.restaurant-details__header-left h1');

  // Menekan tombol add review
  I.click('#addReviewBtn');

  // Memastikan kalau modal sudah muncul setelah tombol add review di klik
  I.seeElement('.open-modal .modal');
});

Scenario('Add new review with all text fields filled', async ({I}) => {
  // Mengisi seluruh text field kemudian menekan tombol submit
  I.fillField('#name', 'E2E test');
  I.fillField('#reviewInput', 'siuuu!');
  I.click('#submitBtn');

  // Memastikan pesan sukses submit review telah muncul
  I.seeElement('#successToast');
  I.see('Your review has been added!', '#successToast');
});

Scenario('Add new review with name field not filled', async ({I}) => {
  // Mengisi hanya kolom review kemudian menekan tombol submit
  I.fillField('#reviewInput', 'siuuu!');
  I.click('#submitBtn');

  // Memastikan pesan error muncul setelah menekan tombol submit
  I.seeElement('#errorToast');
  I.see(`Reviewer's name and review is required!`, '#errorToast');
});

Scenario('Add new review with review field not filled', async ({I}) => {
  // Mengisi hanya kolom nama pengguna kemudian menekan tombol submit
  I.fillField('#name', 'E2E test');
  I.click('#submitBtn');

  // Memastikan pesan error muncul setelah menekan tombol submit
  I.seeElement('#errorToast');
  I.see(`Reviewer's name and review is required!`, '#errorToast');
});
