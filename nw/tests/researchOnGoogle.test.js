module.exports = {
  'Search on google': (browser) => {
    browser
      .init()
      .waitForElementVisible('body', 1000)
      .setValue('input[type=text]', browser.globals.searchTerm)
      .waitForElementVisible('input[name=btnK]', 1000)
      .click('input[name=btnK]')
      .pause(1000)
      .assert.containsText('#main', browser.globals.movieName)
      .end();
  },
  after: (browser) => {
    browser.end();
  },
};
