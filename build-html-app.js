const ejs = require("ejs")
// const escapeXML = require("ejs/lib/utils").escapeXML
var fs = require('fs')

const resultJSONPath = "./data/result.json"
const appJsFilePath = "./dist/App.umd.min.js"
const appCssFilePath = "./dist/App.css"
const fileTemplatePath = "index.html.ejs"
const outputFileTemplatePath = "rspec_report/index.html"

const noEscape = (string) => string

new Promise((resolve, reject) => {
  var RESULT_JSON = fs.readFileSync(resultJSONPath, 'utf8')
  var APP_JS = fs.readFileSync(appJsFilePath, 'utf8')
  var APP_CSS = fs.readFileSync(appCssFilePath, 'utf8')
  ejs.renderFile(fileTemplatePath, {APP_JS, APP_CSS, RESULT_JSON}, {escape: noEscape}, function(err, str){
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
