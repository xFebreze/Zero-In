chrome.storage.local.get(['productivity'])

if (productivity == true){
  productivity = false;
}
else{
  productivity = true;
}

chrome.storage.local.set({productivity});