# 程序员鼓励师（Encourager）

> 最累的时候，也有鼓励师温情的陪伴与鼓励。

<p align="center">
  <img width="160" src="https://wingmeng.github.io/vscode-extension-encourager/images/logo.png" alt="encourager logo">
</p>

## Requirements

- [VS Code 1.32.0+](https://code.visualstudio.com/)
- [Node.js 8+](https://nodejs.org)

## Quick Start

安装插件后，按 `F1` 输入 `call:❤ 召唤鼓励师` 或者在页面点击鼠标右键，选择 `❤ 召唤鼓励师`。

![quick start](https://wingmeng.github.io/vscode-extension-encourager/images/quick-start.gif)

## Features

1. 内含一大波治愈系萌妹子，缓解因写代码而产生的焦躁、埋怨、内分泌失调等不良反应；

  > 图片尺度适当，充分考虑了办公室场景，不会引起尴尬。<br/>
  > 声明：图片来自 `https://unsplash.com/` 和 `https://pixabay.com/` 的免费可商用图片。

2. 内置 3 种鼓励师性格类型可供选择：软萌型、友善型、领导型；
3. 如果内置的鼓励师不能满足需要，还可以自己 DIY，打造属于自己的贴心鼓励师；
4. 没有定时弹窗功能，不会主动打扰程序员；
5. 随叫随到，立即见效，见好就收，6 秒走掉。

## Settings

| 配置项名称 | 描述 | 默认值 |
|----|----|----|
| `encourager.yourName` | 鼓励师对你的称呼 | `小哥哥` |
| `encourager.character` | 鼓励师性格类型的 id，默认内置：1.软萌型, 2.友善型, 3.领导型 | `1` |
| `encourager.newCharacters` | 自定义新的鼓励师（见下文），Array 类型，可定义多个 | `[]` |
| `encourager.useWsl` | Specify whether to use WSL or not | `false` |
| `encourager.encouragePageDelay` | 鼓励页面的停留时间（秒），超时后会自动关闭；若设置为 <=0 的数则不自动关闭 | `6` |

## 如何自定义鼓励师？

> `./scr/encouragers.js` 文件为内置鼓励师的配置文件，可直接在上面修改、拓展，或者使用下面的方法：

1. 进入 vscode 的本插件插件目录，windows 用户一般为 `C:/Users/[USER NAME]/.vscode/extensions/wingmeng.encourager-x.x.x`；
2. 在 `images` 文件夹下新建图片文件夹，放入自己爱豆的照片（如使用网络图片则略过此步）；
3. 打开 vscode 设置项（`ctrl + ,`），切换到 json 编辑视图；
4. 在其中按如下格式新增鼓励师配置：

```json
"encourager.newCharacters": [
  {
    "id": 5,
    "data": [
      {
        "say": "{name}，晚上加完班饿了吧？我下面给你吃",
        "img": "xx/xx.jpg"
      }, {
        "say": "其他鼓励的话……",
        "img": "xx/xx.jpg"
      }
    ]
  }
]
```

> 上面的 `id` 为鼓励师性格类型 id，对应 `encourager.character` 配置；<br>
> `data` 为鼓励师页面的展示信息，包含文字和图片，图片路径支持 http(s) 开头的网络路径；<br>
> `data[i].say` 中的 `{name}` 对应 `encourager.yourName` 配置。

**Enjoy!**
