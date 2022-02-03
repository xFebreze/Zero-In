popUp = `<html>
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;700&family=Roboto+Mono:wght@300;700&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous">
        <style>

            body{
              text-align: center;
              font-family: 'Open Sans', sans-serif;
              color: white;
            }

            h1{
              font-family: 'Roboto Mono', monospace;
              font-size: 60px;
            }

            .center{
                length: 500;
                width: 500;
                display: block;
                margin-left: auto;
                margin-right: auto;
            }

        </style>
        <body style="background-image: linear-gradient(to bottom right, #B9EFA3, #008693)">
          <h1>Nonono...</h1>
            <img src="https://cdn.discordapp.com/attachments/929849977423929407/937767116759789568/nocat4.png" al></img>
          <p>get back to work!</p>
            <marquee behavior="slide"scrollamount="40"><img src="https://cdn.discordapp.com/attachments/929849977423929407/937161808316366868/no-cat.gif"class="center"></img></marquee>
        </body>
    </head>
</html>
`

unblockHTML = `<span class="button__text">Unblock Website</span>
<span class="button__icon">
  <i class="fas fa-unlock"></i>
</span>`

blockHTML = `<span class="button__text">Block Website</span>
<span class="button__icon">
  <i class="fas fa-lock"></i>
</span>`

startHTML = `<span class="button__text">Start Timer</span>
<span class="button__icon">
  <i class="fas fa-clock"></i>
</span>`

stopHTML = `<span class="button__text">Stop Timer</span>
<span class="button__icon">
  <i class="fas fa-clock"></i>
</span>`

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
        BW_button.innerHTML = unblockHTML;
        chrome.tabs.reload(tabs[0].id);
      }
      else{
        newList.splice(index, 1);
        console.log("Zero-In: " + url + " removed from the blacklist!");
        BW_button.innerHTML = blockHTML;
        chrome.storage.sync.get('productivityOn',(value)=>{
          if (value.productivityOn == true){
            chrome.tabs.reload(tabs[0].id);
          }
        })
      }

      chrome.storage.sync.set({'blacklist': newList},()=>{

      })
     })
  })
}

function updateBlock(){
  chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
    var url = tabs[0].url
    url = format(url);

    chrome.storage.sync.get('blacklist',(value)=>{
      var index = value.blacklist.indexOf(url);
      if (index > -1) {
        BW_button.innerHTML = unblockHTML;
      }

    })
  })
}

updateBlock();


var clear = false;
function updateTimer(){
  chrome.storage.sync.get('alarm',(value)=>{
    console.log(value.alarm);
      if (value.alarm !== "none"){
        chrome.alarms.get(value.alarm, function(activeAlarm) {
          var endTime = activeAlarm.scheduledTime;
          var count = setInterval(function(){
            var nowTime = new Date().getTime();
            var remainingTime = endTime - nowTime;
            var minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
            if ((remainingTime < 0)||(clear==true)){
              clear = false;
              clearInterval(count);
              setTimeout(function(){
                updateTimer();
              }, 200);
            }
            else{
              if ((minutes < 10) && (seconds < 10)){
                document.getElementById("timer").innerHTML = "0" + minutes + ":0" + seconds;
              }
              else if (minutes < 10){
                document.getElementById("timer").innerHTML = "0" + minutes + ":" + seconds;
              }
              else if (seconds < 10){
                  document.getElementById("timer").innerHTML = minutes + ":0" + seconds;
              }
              else{
                  document.getElementById("timer").innerHTML = minutes + ":" + seconds;
              }
            }
          }, 300)
        })
      }
  })
}



var timer_button = document.getElementById('timer_button');
timer_button.onclick = () => {
  chrome.storage.sync.get('alarm',(value)=>{
    activeAlarm = chrome.alarms.get(value.alarm);
    if (value.alarm == "none"){
      chrome.alarms.create("workAlarm",{delayInMinutes : 25});
      chrome.storage.sync.set({'alarm': "workAlarm"},()=>{})
      timer_button.innerHTML = stopHTML;
    }
    else{
      clear = true;
      document.getElementById("timer").innerHTML = '';
      chrome.alarms.clearAll();
      chrome.storage.sync.set({'alarm': "none"},()=>{})
      timer_button.innerHTML = startHTML;
    }
    updateTimer();
  })
}
updateTimer();
