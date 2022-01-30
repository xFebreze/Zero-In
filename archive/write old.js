var fs = require('fs')
var data = '1';
fs.readFile('manifest.json', 'utf8', (err, data) => {
    if (err) throw err;

    var blockedWebsites = ["\"https://*.nytimes.com/*\"","\"https://*.tiktok.com/*\""];

    data.split(/(rn,r,n)/, 'n')[22];
    data.split(/(rn,r,n)/, 'n')[23];
    data[0] = "\"matches\": [" + blockedWebsites + "],";

    fs.writeFile('manifest.json', data, (err) => {
        if (err) throw err;
    });

});

//66