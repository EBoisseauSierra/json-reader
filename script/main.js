$(document).ready(function(){
  $('input[name=hide-stock]').change(function(){
    if($(this).is(':checked')) {
        $('a:contains("stock")').parent().addClass('hidden');
        $("li").filter(function(){return $(this).text() === "stock: []"}).addClass('hidden');
    } else {
      $('a:contains("stock")').parent().removeClass('hidden');
      $("li").filter(function(){return $(this).text() === "stock: []"}).removeClass('hidden');
    }
  });
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
