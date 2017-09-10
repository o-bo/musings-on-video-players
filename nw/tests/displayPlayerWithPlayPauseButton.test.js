module.exports = {
  'Display player': (browser) => {
    browser
      .init()
      .waitForElementVisible('body')
      .assert
      .elementPresent('.play-pause-btn', 'Play/Pause button is not present in the controls.')
      .end();
  },
  after: (browser) => {
    browser.end();
  },
};
