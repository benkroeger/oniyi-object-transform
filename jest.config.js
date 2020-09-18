'use strict';

// node core

// 3rd party

// internal

module.exports = {
  testEnvironment: 'node',
  collectCoverage: true,
  collectCoverageFrom: ['lib/**/*.js', '!lib/**/__fixtures__/*'],
  coverageReporters: ['lcov', 'text', 'text-summary'],
  testPathIgnorePatterns: ['/node_modules/', '__fixtures__'],
};
