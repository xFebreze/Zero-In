(function(){

  //change the background to dark 
  document.querySelector("html").style.filter = "invert(1) hue-rotate(180deg)";
  console.log("app off working");


//we want only the background to change, not the media
  let media = document.querySelectorAll("img, picture, video");

  media.forEach((mediaItem)=>{  
  mediaItem.style.filter = "invert(1) hue-rotate(180deg)";
  })

  })  

/*call the function*/
 ();