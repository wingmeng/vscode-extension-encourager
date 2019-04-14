const vscode = require('vscode');
const config = require('./config');
const path = require('path');

class Encourager {
  constructor(context) {
    this.panel = null;
    this.context = context;
    this.configs = config.getConfigs();
  }

  show() {
    if (this.panel) {
      this.panel.dispose();
    }

    this.panel = vscode.window.createWebviewPanel(
      'webView', // viewType
      "程序员鼓励师",  // 视图标题
      vscode.ViewColumn.Two,  // 显示在编辑器的部位
      {
        enableScripts: false,
        retainContextWhenHidden: true,  // webview 被隐藏时保持状态，避免被重置
        localResourceRoots: [vscode.Uri.file(this.context.extensionPath)]
      }
    );

    this.panel.webview.html = this.render(this.getEncourager());
    this.autoHide(this.panel, this.configs.encouragePageDelay);
  }

  autoHide(panel, delay) {
    if (delay > 0) {
      setTimeout(() => {
        panel.dispose();
      }, delay * 1e3);
    }
  }

  render (data) {
    let { say, img } = data;
    let imgPath = this.getImgPath(img);
    let text = say ? say.replace(/\{name\}/g, `<strong>${this.configs.yourName}</strong>`) : '';

    return (
`<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {margin: 10px;}
    .encourager {
      display: inline-block;
      padding: 10px 15px;
      color: #fff; background: rgba(0,0,0,.3);
      border-radius: 5px; box-shadow: 0 0 5px rgba(0,0,0,.3);}
    .vscode-light .encourager {color: #333; background: #fff;}
    .encourager > h2 {margin: 0; line-height: 1.6; font-size: 18px; font-weight: 400;}
    .encourager > img {display: block; max-width: 100%; max-height: calc(90vh - 18px * 1.6);}
    .encourager > h2 + img {margin-top: 10px;}
  </style>
</head>
<body>
  <div class="encourager">
    ${text ? `<h2>${text}</h2>` : ''}
    ${imgPath ? `<img src="${imgPath}" alt="" />` : ''}
  </div>
<body>
</html>`);
  }

  getEncourager() {
    let arr = this.configs.encouragers.filter(item => item.id == this.configs.character);
    let encouragers = arr[0].data;

    return encouragers[Math.floor(Math.random() * encouragers.length)];
  }

  getImgPath(url) {
    if (!url) {
      return null;
    }

    if (/https?/.test(url)) {
      return url;
    }

    return vscode.Uri.file(
        path.join(this.context.extensionPath, 'images', url)
      ).with({ scheme: 'vscode-resource' });
  }
}

module.exports = Encourager;
