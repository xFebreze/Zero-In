function format(uncutUrl){
  
  var posMid = (uncutUrl.indexOf('.'));
  var posEnd = (uncutUrl.slice(posMid)).indexOf('/') + posMid
  uncutUrl = uncutUrl.slice(0,posEnd) + "/*";
  
  return uncutUrl;
  
}

var button = document.getElementById('PM_button');
button.onclick = () => {
  chrome.storage.sync.get('productivityOn',(value)=>{

      var swap = ! value.productivityOn;

      if (swap == true){
        button.style.backgroundColor = '#e09320';
      }
      else{
        button.style.backgroundColor = '#b0741a';
      }
      

      chrome.storage.sync.set({'productivityOn': swap},()=>{
        
      })
  })
}

var button2 = document.getElementById('BW_button');
button2.onclick = () => {
  chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
    var url = tabs[0].url
    url = format(url);

    chrome.storage.sync.get('blacklist',(value)=>{
      newList = value.blacklist;

      var index = newList.indexOf(url);
      if (index == -1) {
        newList.push(url);
      }

      chrome.storage.sync.set({'blacklist': newList},()=>{

      })
     })
  })
}

var button3 = document.getElementById('UB_button');
button3.onclick = () => {
  chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
    var url = tabs[0].url
    url = format(url);

    chrome.storage.sync.get('blacklist',(value)=>{
      newList = value.blacklist;

      var index = newList.indexOf(url);
      if (index > -1) {
        newList.splice(index, 1);
      }

      chrome.storage.sync.set({'blacklist': newList},()=>{
  
      })
    })
  })
}