module.exports = {
  'Search on google': (browser) => {
    browser
      .init(browser.globals.googleUrl)
      .page.google().fillInSearchInput()
      .page.google().submit()
      .assert.containsText('#main', browser.globals.movieName)
      .end();
  },
  after: (browser) => {
    browser.end();
  },
};
