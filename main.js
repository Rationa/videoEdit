const { app, BrowserWindow } = require('electron/main')
const path = require('node:path')
// 创建一个窗口
const creatWindow = () => {
  const win = new BrowserWindow({
    width: 800, // 应用页面宽
    height: 800, // 应用页面高
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }

    // autoHideMenuBar: true, // 是否隐藏默认菜单栏
    // x: 0, // 初始化水平位置
    // y: 0, // 初始化垂直位置
    // alwaysOnTop: true // 是否一直保持最上面
  })
  // 加载页面 哔哩哔哩页面
  // win.loadURL('https://www.bilibili.com/')
  // 加载本地文件
  win.loadFile('pages/index.html')
}

app.on('ready', () => {
  // 执行创建窗口函数
  creatWindow();
  console.log('--')
  app.on('activate', () => {
    // 苹果macos 系统没有窗口创建一个窗口
    if (BrowserWindow.getAllWindows().length === 0) {
      creatWindow();
    }
  })
})

app.on('window-all-closed', () => {
  // 判断是不是苹果系统 如果不是 退出应用
  if (process.platform != 'darwin') app.quit();
})