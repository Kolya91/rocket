const {app, BrowserWindow} = require('electron') 
const url = require('url') 
const path = require('path')  

let win  

function createWindow() { 
   win = new BrowserWindow({width: 800, height: 600}) 
   console.log(__dirname);
   win.loadURL(`file://${__dirname}/dist/index.html`);
//    win.loadURL(url.format ({ 
//       pathname: path.join(__dirname, 'dist/index.html'), 
//       protocol: 'file:', 
//       slashes: true 
//    })) 
}  

app.on('ready', createWindow) 