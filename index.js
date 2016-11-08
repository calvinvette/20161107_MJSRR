var customers = [ ];

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

  $("#btnSubmit").click((evt) => {
    var customer = {
        firstName : $("#txtFirstName").val(),
        lastName : $("#txtLastName").val(),
        phoneNumber : $("#txtPhoneNumber").val()
    };
    customers.push(customer);
    updateStatus("Registered " + customer.firstName + " " + customer.lastName + " @" + new Date());
  });

  updateStatus("Successfully Loaded... @" + new Date());
});
