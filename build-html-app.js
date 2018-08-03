const ejs = require("ejs")
var fs = require('fs');

const appJsFilePath = "./dist/App.umd.min.js"
const appCssFilePath = "./dist/App.css"
const fileTemplatePath = "index.html.ejs"
const outputFileTemplatePath = "index.html"

const noEscape = (string) => string

new Promise((resolve, reject) => {
  var APP_JS = fs.readFileSync(appJsFilePath, 'utf8')
  var APP_CSS = fs.readFileSync(appCssFilePath, 'utf8')
  ejs.renderFile(fileTemplatePath, {APP_JS, APP_CSS}, {escape: noEscape}, function(err, str){
    if(err) {
      console.error(err)
      reject(err)
    }
    // console.log(str)
    fs.writeFile(outputFileTemplatePath, str, function(err) {
      if(err) { return console.error(err) }
    })
    resolve(str)
  });
})
