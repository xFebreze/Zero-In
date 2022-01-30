chrome.runtime.getURL(
  path: string,
)

function getURL(stringUrl){
  var stringUrl = window.location;
  var pathname = window.location.pathname
  var url = window.location.href


}



// FORMATS URL FOR MATCH SEARCHING
function format(uncutUrl){
  
  var posMid = (uncutUrl.indexOf('.'));
  var posEnd = (uncutUrl.slice(posMid)).indexOf('/') + posMid
  uncutUrl = uncutUrl.slice(0,posEnd) + "/*";
  return uncutUrl;
  
}