module.exports = {
  roots: [
    '<rootDir>/test',
  ],
  testMatch: [
    '**/?(*.)+(spec|test).+(ts|js)',
  ],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  coveragePathIgnorePatterns: [
    '/node_modules/',
  ],
}
