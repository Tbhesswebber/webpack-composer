// const fs = require('fs');
const vscode = require('vscode');

module.exports = function getConfig() {
  const config = vscode.workspace.getConfiguration('webpackcomposer', null);

  return config;
};
