var fs = require("fs")

const blockedWebsite = ["https://*.nytimes.com/","https://*.tiktok.com/","https://*.facebook.com/","https://*.instagram.com/"];
//const blockedWebsitejson = JSON.stringify(blockedWebsite);


const manifest =
{
  "name": "Zero-In",
  "description": "Zero-in is a chrome based extension that uses website data to track your effeciency and hone in on your work",
  "version": "1.0",
  "manifest_version": 3,
  "background": {
    "service_worker": "background.js"
  },
  "permissions": ["storage", "activeTab", "storage"],
  "action": {
    "default_popup": "dropdown.html"
  },
    "icons": {
    "16": "/content/zero-in16.png",
    "32": "/content/zero-in32.png",
    "48": "/content/zero-in48.png",
    "128": "/content/zero-in128.png"
  },
 /*"blockedWebsites": ["https://*.nytimes.com/*","https://*.arepubsubsonsale.com/*"],*/
  "content_scripts": [
  {
     "matches": blockedWebsite,
     "exclude_globs": ["*://*/*education*"],
     /*"css": ["bigwall.css"],*/
     /*"html": ["bigwall.html"],*/
     "js": ["content-script.js"]
  },
 ],
 "options_page": "options.html"
};

const manifest1 = JSON.stringify(manifest, null, 4);

fs.writeFile('manifest.json', manifest1, function(err) {
   if (err) {
      return console.error(err);
   }})
