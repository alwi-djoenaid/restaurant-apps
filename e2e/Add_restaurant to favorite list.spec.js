/* eslint-disable new-cap */
const assert = require('assert');

Feature('Add restaurant to favorite list');

Before(({I}) => {
  I.amOnPage('/#/favorite');
});

Scenario('No restaurant on favorite list', ({I}) => {
  I.see('You have no restaurant marked as favorite',
      '.restaurant__empty-placeholder');
});

Scenario('Add restaurant to favorite list', async ({I}) => {
  // Memastikan dahulu agar saat tes tidak ada restoran
  // Yang masuk kedalam favorite list
  I.see('You have no restaurant marked as favorite',
      '.restaurant__empty-placeholder');

  I.amOnPage('/');

  I.seeElement('.catalog__header a');

  const sampleTest = locate('.catalog__header a').first();
  const sampleTestTitle = await I.grabTextFrom(sampleTest);
  I.click(sampleTest);

  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.catalog');

  const restaurantName = await I.grabTextFrom('.catalog__header a');

  assert.strictEqual(sampleTestTitle, restaurantName);
});


/**
 * Urutan dari skenario ini adalah memasukkan restoran
 * pada favorite list terlebih dahulu kemudian
 * menghilangkan restoran tsb dari favorite list
 */
Scenario('Remove restaurant from favorite list', async ({I}) => {
  // Memastikan dahulu agar saat tes tidak ada restoran
  // Yang masuk kedalam favorite list
  I.see('You have no restaurant marked as favorite',
      '.restaurant__empty-placeholder');

  // Akses halaman home
  I.amOnPage('/');

  // Cari judul restoran untuk di klik
  I.seeElement('.catalog__header a');

  const sampleTest = locate('.catalog__header a').first();
  const sampleTestTitle = await I.grabTextFrom(sampleTest);
  I.click(sampleTest);

  // Klik tombol favorite pada halaman restaurant details
  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');

  // Mengakses halaman Favorites
  I.amOnPage('/#/favorite');
  I.seeElement('.catalog');

  // Memastikan data restoran yang muncul sama
  // dengan yang di favoritkan sebelumnya
  const restaurantName = await I.grabTextFrom('.catalog__header a');
  assert.strictEqual(sampleTestTitle, restaurantName);

  // Mencari judul restoran pada halaman Favorites untuk diakses
  I.seeElement('.catalog__header a');
  I.click(locate('.catalog__header a').first());

  // Menghilangkan restoran dari favorite list
  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');

  // Memastikan agar tidak ada restoran yang
  // Terdapat pada favorite list
  I.amOnPage('/#/favorite');
  I.see('You have no restaurant marked as favorite',
      '.restaurant__empty-placeholder');
});
