/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '\\.(css|less|sass|scss)$': '<rootDir>/jest/stylesTransform.js',
    },
    //setupFilesAfterEnv: ['<rootDir>/setup-tests.js'],
}
