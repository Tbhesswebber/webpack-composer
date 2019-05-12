// const fs = require('fs');
const vscode = require('vscode');

/**
 * @description Wrapper function that gets the settings for the extension.
 * @return {object} - The webpack-composer settings.
 */
module.exports = function getConfig() {
  const config = vscode.workspace.getConfiguration('webpackcomposer', null);

  return config;
};
