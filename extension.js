const vscode = require('vscode');
const Encourager = require('./src/index');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  let encourager = new Encourager(context);
  let showEncourage = vscode.commands.registerCommand('encourager.showEncourage', () => {
    encourager.show();
  });

  // 参数变动时重载组件
  vscode.workspace.onDidChangeConfiguration(() => {
    encourager = new Encourager(context);
  });

  context.subscriptions.push(showEncourage);
}

exports.activate = activate;

function deactivate() {}

module.exports = {
	activate,
	deactivate
}
