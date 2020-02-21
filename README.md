# KataTemplate

This is a set of templates to start a Kata in different languages



yarn add webpack
yarn add webpack-cli
yarn init -y
yarn add css-loader style-loader ts-loader --dev
yarn add jest --dev
yarn add babel-loader --dev
yarn add @babel/core --dev
yarn add @babel/preset-env --dev
yarn add @babel/preset-react --dev



Java
mvn archetype:generate -DarchetypeGroupId=org.apache.maven.archetypes -DarchetypeArtifactId=maven-archetype-quickstart -DarchetypeVersion=RELEASE -DgroupId=es.enalquiler.kata -DartifactId=KataTemplate








{
  "dependencies": {
    "css-loader": "^3.4.2",
    "style-loader": "^1.1.3",
    "ts-loader": "^6.2.1",
    "webpack": "^4.41.5"
  },
  "devDependencies": {
    "jest": "^25.1.0"
  },
  "name": "JavaScript",
  "version": "1.0.0",
  "main": "src/bundle.js",
  "license": "MIT",
  "scripts": {
    "build": "node_modules/.bin/webpack --mode=development --entry=./src/App.js --output=./dist/bundle.js",
    "test": "node_modules/.bin/jest"
  },
  "keywords": [],
  "author": "",
  "description": "",
  "private": true,
  "jest": {
    "moduleNameMapper": {
      "//.css$": "./test/cssMock.js"
    },
    "testRegex": "/tests/(.*/)?[a-zA-Z0-9_\\-]+\\.(test|spec)\\.[jt]sx?$"
  }
}
