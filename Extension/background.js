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
        "https://www.youtube.com/*",
        "https://www.disneyplus.com/*",
        "https://www.netflix.com/*",
        "https://www.hulu.com/*",
        "https://www.hbomax.com/*",
        "https://www.paramountplus.com/*"];

      chrome.storage.sync.set({'blacklist': init_list},()=>{
        console.log("Zero-In: Blacklist initialized!");
      })

      chrome.storage.sync.set({'productivityOn': true},()=>{
        console.log("Zero-In: Productivy Mode setting initialized!");
      })

      chrome.storage.sync.set({'alarm': "none"},()=>{
        console.log("Zero-In: Alarm status initialized!");
      })

});

chrome.alarms.onAlarm.addListener(function(alarm){
  if (alarm.name == "workAlarm"){
    chrome.notifications.create({
      title: 'Zero-In',
      message: 'Time is up! Take a break, wash your face, grab some water and a snack!',
      iconUrl: 'content/zero-in128.png',
      type: "basic"
    });
    chrome.storage.sync.set({'alarm': "breakAlarm"},()=>{})
    chrome.alarms.create("breakAlarm",{delayInMinutes : 5})

  }
  else if(alarm.name == "breakAlarm"){
    chrome.notifications.create({
      title: 'Zero-In',
      message: 'Time is up! Let\'s focus hard and be productive!',
      iconUrl: 'content/zero-in128.png',
      type: "basic"
    });
    chrome.storage.sync.set({'alarm': "workAlarm"},()=>{})
    chrome.alarms.create("workAlarm",{delayInMinutes : 25})

  }
});
