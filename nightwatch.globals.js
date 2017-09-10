module.exports = {
  default: { // Settings for default environement
    searchTerm: 'nightwatch',
    movieName: 'Night Watch',
  },
  french: { // Settings for french environement
    searchTerm: 'la classe américaine',
    movieName: 'la classe américaine',
  },

  // Stop as soon as a test fails
  abortOnAssertionFailure: true,

  // Interval between 2 checks
  waitForConditionPollInterval: 300,

  // Default interval
  waitForConditionTimeout: 1000,

  // Fail if a selection returns multiple elements instead of one
  throwOnMultipleElementsReturned: false,

  // Before and after all
  before: next => next(),
  after: next => next(),

  // Before and after each
  beforeEach: (browser, next) => next(),
  afterEach: (browser, next) => next(),

  // Settings for reporter
  reporter: (results, next) => next(),
};
