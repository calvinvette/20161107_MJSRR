"use strict";

window.customers = [ ];

function updateStatus(message) {
  $("#myStatus").html(message);
}

function jump(link) {
  var href = $(link).attr("href");
  //console.log(href);
  // #/CustomerTable
  var afterFirstSlash = href.indexOf("/") + 1;
  var baseName = href.substring(afterFirstSlash); // From afterFirstSlash to end of array
  $.get(baseName + ".html", function(theFile) {
    $("#content").html(theFile);
  });
}

$(document).ready(function() {
  updateStatus("Successfully Loaded... @" + new Date());
});
