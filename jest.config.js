module.exports = {
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  collectCoverageFrom: ['!**/__tests/**', '**/*.{ts,tsx}'],
  testPathIgnorePatterns: ['/node_modules/', '/.storybook/', '/stories/', '/__tests__/helpers'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
      babelConfig: true,
    },
  },
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '@components/(.*)$': '<rootDir>/src/components/$1',
    '@hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '@theme/(.*)$': '<rootDir>/src/theme/$1',
    '@src/(.*)$': '<rootDir>/src/$1',
    '@root/(.*)$': '<rootDir>/$1',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  moduleDirectories: ['node_modules', 'src'],
  testMatch: ['<rootDir>/__tests__/**/*.(tsx|ts|js)'],
};
