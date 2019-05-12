const expect = require('chai').expect;
const helpers = require('../helpers/index');

const { readUserSettings } = require('../../src/config');

describe('readUserSettings', () => {
  it('should be a function', () => {
    expect(readUserSettings).to.be.instanceOf(Function);
    expect(helpers.changeWorkspace).to.be.instanceOf(Function);
  });

  it('should return any set user settings', () => {
    // arrange
    const settings = { 'webpackcomposer.rootDirectory': './cow', 'webpackcomposer.targetDirectory': './say/moo' };
    helpers.overwriteSettings(settings);

    // act
    const userSettings = readUserSettings();

    // assert
    expect(userSettings.rootDirectory).to.be.string(settings['webpackcomposer.rootDirectory']);
    expect(userSettings.targetDirectory).to.be.string(settings['webpackcomposer.targetDirectory']);
  });

  it('should return the default user settings', done => {
    // arrange
    helpers.overwriteSettings({});

    setTimeout(() => {
      // act
      const defaultSettings = readUserSettings();

      // assert
      expect(defaultSettings.rootDirectory).to.be.string('.');
      expect(defaultSettings.targetDirectory).to.be.string('./utils/build-utils');

      // after
      done();
    }, 1000);
  });
});
