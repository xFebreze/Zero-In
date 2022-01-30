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
            <img src="https://cdn.discordapp.com/attachments/929849977423929407/937161808530260019/nocat.png" al></img>
          <p>get back to work!</p>
            <marquee behavior="slide"scrollamount="40"><img src="https://cdn.discordapp.com/attachments/929849977423929407/937161808316366868/no-cat.gif"class="center"></img></marquee>
        </body>
    </head>
</html>
`


function format(uncutUrl){
  
  var posMid = (uncutUrl.indexOf('.'));
  var posEnd = (uncutUrl.slice(posMid)).indexOf('/') + posMid
  uncutUrl = uncutUrl.slice(0,posEnd) + "/*";
  return uncutUrl;
  
}

let siteList = []; 
chrome.storage.sync.get("blacklist", function(val) {

    siteList = val["blacklist"];
    
});

var url = document.URL
url = format(url);

chrome.storage.sync.get('productivityOn',(value)=>{

  var index = siteList.indexOf(url);

    if ( (value.productivityOn == true) && (index > -1)) {

      document.open()
      document.write(popUp)
      document.close()
      
    }
})

