$(document).ready(function(){
  $.ajax({
    dataType: "json",
    url: "../data.json",
    success: function( data ) {
      $('#json-renderer').jsonViewer(data);
    },
  });
});
