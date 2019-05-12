const helpers = require('./workspace.js');

/**
 * @param {object} settings - The desired settings to be written to 'settings.json'
 * @return {undefined}
 */
function overwriteSettings(settings) {
  helpers.changeWorkspace('./.vscode/settings.json', JSON.stringify(settings));
}

module.exports = { overwriteSettings };
