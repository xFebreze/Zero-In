window.onload = function() {
  chrome.storage.sync.get('productivityOn',(value)=>{

    if (value.productivityOn == false){
      var button = document.getElementById('PM_button');
      button.style.backgroundColor = '#b0741a';
    }

  })
}
