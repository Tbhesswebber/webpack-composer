const vscode = require('vscode');

const commands = require('./commands');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  //! Can't figure out a smooth E2E testing pattern for executing commands, so all commands are being imported
  let disposableBasic = vscode.commands.registerCommand(
    'extension.createBasicWebpackConfiguration',
    commands.createBasicWebpackConfiguration
  );

  context.subscriptions.push(disposableBasic);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
