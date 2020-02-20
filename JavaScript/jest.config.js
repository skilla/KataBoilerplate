module.exports = {
    moduleFileExtensions: [
        "js",
        "json",
        "jsx",
        "ts",
        "tsx",
        "json"
    ],
    transform: {
        '^.+\\.(js|jsx)?$': 'babel-jest'
    },
    testEnvironment: 'node',
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/$1'
    },
    testMatch: [
        '<rootDir>/tests/**/*.(test|spec).(js|jsx|ts|tsx)'
    ],
    transformIgnorePatterns: ['<rootDir>/node_modules/']
};
