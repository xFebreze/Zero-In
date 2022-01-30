(function(){


    //change the background to light
    document.querySelector("html").style.filter = "invert(0) hue-rotate(0deg)";
    console.log("app off working");
    
    //we want only the background to change, not the media
    let media = document.querySelectorAll("img, picture, video");
    
    media.forEach((mediaItem)=>{
    mediaItem.style.filter = "invert(0) hue-rotate(0deg)";
    })
    
    }) 
    //call the function
    ();