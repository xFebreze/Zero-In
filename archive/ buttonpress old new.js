var button = document.querySelector('button');
var box = document.getElementById('square');



button.onclick = function productivityBtn(){

  console.log(1);
  return new Promise(function(resolve,reject){
  chrome.storage.local.get("productivity", ({ data }) => {

    let productivity = data.productivity;

    console.log("worked");


  });



}


    if (productivity == true){
      productivity = false;
      box.style.background = 'red';
    }
    else{
      productivity = true;
      box.style.background = 'blue';
    }


        //var tab = tabs[0].url;
    //var url = tab.url;