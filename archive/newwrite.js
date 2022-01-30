
var fs = require('fs')
  
fs.readFile('manifest.json', 'utf8', (err, text) => {
    if (err){
      console.err
      return;
    };
});

var blockedWebsites = ["\"https://*.nytimes.com/*\"","\"https://*.tiktok.com/*\""];

text.split(/[rn]+/g)[22];
text.split(/[rn]+/g)[23];
text[1] = "\"matches\": [" + blockedWebsites + "],";

fs.writeFile('manifest.json', text, (err) => {
    if (err){
      console.err
      return;
    };
});