import json

manifest = [
  "name" : "Zero-In",
]

'''manifest = [
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
  "content_scripts": [
  {
     "matches": ["https://*.nytimes.com/*","https://*.tiktok.com/","https://*.facebook.com/","https://*.instagram.com/"],
     "exclude_globs": ["*://*/*education*"],
     "css": ["pinkbox.css"],
     "js": ["content-script.js"]
  }
 ],
 "options_page": "options.html"

]'''

json_object = json.dumps(manifest)

with open("newtest.json","w") as outfile:
  outfile.write(json_object)