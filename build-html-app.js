const ejs = require("ejs")
var fs = require('fs');

const renderFilePromise = new Promise((resolve, reject) => {
  ejs.renderFile("index.html.ejs", {name: "Miguel"}, {}, function(err, str){
    if(err) {
      console.error(err)
      reject(err)
    }
    console.log(str)

    fs.writeFile("index.html", str, function(err) {
      if(err) { return console.error(err) }
    });
    resolve(str)
  });
})
