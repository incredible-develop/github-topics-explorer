module.exports = {
  roots: ['<rootDir>/src'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testMatch: ['**/*.test.js'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^.+\\.(s?css|less|jpg|png|svg)$': 'identity-obj-proxy'
  }
  // setupFilesAfterEnv: ["<rootDir>/jest-setup.js"]
  // ... other options ...
};
