$(document).ready(function(){
  function Get(yourUrl){
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET",yourUrl,false);
    Httpreq.send(null);
    return Httpreq.responseText;
  }
  jsonObj = JSON.parse(Get("data.json"));
  // console.log(jsonObj);
  $('#json-renderer').jsonViewer(jsonObj);
});
