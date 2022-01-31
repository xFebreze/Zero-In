function format(uncutUrl){

  var posMid = (uncutUrl.indexOf('.'));
  var posEnd = (uncutUrl.slice(posMid)).indexOf('/') + posMid
  uncutUrl = uncutUrl.slice(0,posEnd) + "/*";

  return uncutUrl;

}

var PM_button = document.getElementById('PM_button');
var crosshair = document.getElementById('crosshair');

window.onload = function() {
  chrome.storage.sync.get('productivityOn',(value)=>{

    if (value.productivityOn == false){
      PM_button.style.backgroundColor = '#b0741a';
        crosshair.style.opacity = '0.5';
    }

  })
}

PM_button.onclick = () => {
  chrome.storage.sync.get('productivityOn',(value)=>{

      var swap = ! value.productivityOn;

      if (swap == true){
        PM_button.style.backgroundColor = '#e09320';
        crosshair.style.opacity = '1.0';
        console.log("Zero-In: Productivity Mode turned on!");
      }
      else{
        PM_button.style.backgroundColor = '#b0741a';
        crosshair.style.opacity = '0.5';
        console.log("Zero-In: Productivity Mode turned off!");
      }


      chrome.storage.sync.set({'productivityOn': swap},()=>{

      })
  })
}

var BW_button = document.getElementById('BW_button');
BW_button.onclick = () => {
  chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
    var url = tabs[0].url
    url = format(url);

    chrome.storage.sync.get('blacklist',(value)=>{
      newList = value.blacklist;

      var index = newList.indexOf(url);
      if (index == -1) {
        newList.push(url);
        console.log("Zero-In: " + url + " added to blacklist!")
      }
      else{
        console.log("Zero-In [ERROR]: " + url + " is already on the blacklist! It cannot be added again.");
      }

      chrome.storage.sync.set({'blacklist': newList},()=>{

      })
     })
  })
}

var UB_button = document.getElementById('UB_button');
UB_button.onclick = () => {
  chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
    var url = tabs[0].url
    url = format(url);

    chrome.storage.sync.get('blacklist',(value)=>{
      newList = value.blacklist;

      var index = newList.indexOf(url);
      if (index > -1) {
        newList.splice(index, 1);
        console.log("Zero-In: " + url + " removed from the blacklist!");
      }
      else{
        console.log("Zero-In [ERROR]: " + url + " is not on the blacklist! It cannot be removed.");
      }

      chrome.storage.sync.set({'blacklist': newList},()=>{
      })
    })
  })
}

var check = new Date();
check.setTime(check.getTime());
check = 5000 + check.getTime()
//console.log("3");
workInterval = true;

var countWork = setInterval(function(){
  var now = new Date().getTime();
  //console.log("4");
  var timeRemaining = check - now;
  //console.log(timeRemaining);
  var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
  console.log(minutes + ":" + seconds);

  if (timeRemaining < 0){
    clearInterval(countWork);
    if (workInterval == true){
      workInterval = false;
      alert("Time is up! Take a break, wash your face, grab some water and a snack!");
    }
    else{
      workInterval = true;
      alert("Time is up! Let's focus hard and be productive!");
    }
    cycles++;
    counting = false;
  }
  document.getElementById("timer").innerHTML = minutes + ":" + seconds;
}, 1000)
