chrome.runtime.onInstalled.addListener(() => {

      const init_list =
        ["https://www.tiktok.com/*",
        "https://www.facebook.com/*",
        "https://www.instagram.com/*",
        "https://twitter.com/*",
        "https://www.reddit.com/*",
        "https://www.pinterest.com/*",
        "https://www.tumblr.com/*",
        "https://www.twitch.tv/*",
        "https://www.youtube.com/*"];

      chrome.storage.sync.set({'blacklist': init_list},()=>{
        console.log("Zero-In: Blacklist initialized!");
      })

      chrome.storage.sync.set({'productivityOn': true},()=>{
        console.log("Zero-In: Productivy Mode setting initialized!");
      })

});
