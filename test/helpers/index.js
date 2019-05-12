const workspace = require('./workspace');
const { changeWorkspace } = workspace;
const settings = require('./settings');
const { overwriteSettings } = settings;

module.exports = {
  changeWorkspace,
  overwriteSettings,
};
