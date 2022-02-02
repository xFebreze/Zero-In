var website_list = document.getElementById('website_list');
chrome.storage.sync.get('blacklist',(value)=>{
  var listOut = '';
  for (var url in value.blacklist){
    listOut = listOut + value.blacklist[url].toString() + "<br>";
  }
  website_list.innerHTML = listOut;
})
