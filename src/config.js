const vscode = require('vscode');
const encouragers = require('./encouragers');

// 缺省配置
const configs = {
  yourName: '小哥哥',
  character: 1,
  newCharacters: [],
  encouragers,
  // inScheduled: false,
  // scheduleInterval: 60,
  encouragePageDelay: 6,
};

exports.getConfigs = () => {
  const options = vscode.workspace.getConfiguration('encourager');

  // configs.inScheduled = options.inScheduled;
  configs.encouragePageDelay = options.encouragePageDelay;

  if (options.yourName.trim()) {
    configs.yourName = options.yourName;
  }

  if (Array.isArray(options.newCharacters)) {
    configs.encouragers = configs.encouragers.concat(options.newCharacters);
  }

  if (options.character) {
    // 存在定义的 id
    if (configs.encouragers.some(encourager => encourager.id == options.character)) {
      configs.character = options.character;
    }
  }

  if (options.scheduleInterval > 0) {
    configs.scheduleInterval = options.scheduleInterval;
  }

  return configs;
}
