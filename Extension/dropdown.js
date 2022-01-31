window.onload = function() {
  console.log("onload" + Date())
  chrome.storage.sync.get('productivityOn',(value)=>{

    var button = document.getElementById('PM_button');

    if (value.productivityOn == true){

      button.style.backgroundColor = '#e09320';
      console.log("Zero-In: Productivity Mode turned on!");

    }

    else{

      button.style.backgroundColor = '#b0741a';
      console.log("Zero-In: Productivity Mode turned off!");

    }

  })
}
