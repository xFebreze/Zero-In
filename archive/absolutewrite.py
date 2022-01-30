with open('manifest.json', 'r') as file:
    manifest = file.readlines()

blockedURLs = "https://*.nytimes.com/*", "https://*.tiktok.com/*"

manifest[22] = "     \"matches\": [\"" + "\",\"".join(blockedURLs) + "\"],"
  
with open('manifest.json', 'w') as file:
    file.writelines(manifest)