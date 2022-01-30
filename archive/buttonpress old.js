let productivity = false;
var button = document.querySelector('button');
var box = document.getElementById('square');



button.onclick = function productivityBtn(){

  if (box.style.background == 'blue'){
    productivity = false;
    box.style.background = 'red';
  }
  else{
    productivity = true;
    box.style.background = 'blue';
  }


}

