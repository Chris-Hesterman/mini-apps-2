module.exports = {
  name: 'client',
  displayName: 'Client Tests',
  // roodDir: '../../',
  // collectCoverage: true,
  // collectCoverageFrom: [
  //   'client/**/*.{js, jsx}',
  //   '!**/node_modules/**',
  //   '!**/vendor/**'
  // ],

  // A list of paths to directories that
  // Jest should use to search for files in
  roots: ['../../test_client'],

  // ...and your other env options,
  // such as test environment, coverage, etc
  testEnvironment: 'jsdom'
};
