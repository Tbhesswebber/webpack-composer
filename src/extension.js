const vscode = require('vscode');
// const fs = require('fs');

// const commands = require('./commands');
const getConfig = require('./config');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  //! Can't figure out a smooth E2E testing pattern for executing commands, so all commands are being imported

  let disposableBasic = vscode.commands.registerCommand('extension.createBasicWebpackConfiguration', () => {
    try {
      const config = getConfig();
    } catch (e) {
      vscode.window.showErrorMessage(e);
    }
  });

  context.subscriptions.push(disposableBasic);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
