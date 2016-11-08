"use strict";
// if customers is "falsey", instantiate as an empty array
// if "truthy", then use it as-is.

function loadCustomers() {
  $.getJSON("http://nextgened.com/weasley/customers.json", function(data) {
    // debugger;
    window.customers = data;
    $(document).trigger("CustomersLoadedEvent");
  });
}

function displayCustomers() {
  // Reset the Customer Table to only the first row
  $("#tblCustomers").html($("#tblCustomers tr")[0]);
  for (var cust of window.customers) {
      // Find the table by id
      $("#tblCustomers").append("<tr>"
        + "<td>" + cust.customerId + "</td>"
        + "<td>" + cust.firstName + "</td>"
        + "<td>" + cust.lastName + "</td>"
        + "<td>" + cust.phoneNumber + "</td>"
        + "</tr>");
  }
}

$(document).ready(function() {
  if (!window.customers || (window.customers.length == 0)) {
    loadCustomers();
  } else {
    displayCustomers();
  }
  $(document).on("CustomersLoadedEvent", function(evt) {
    displayCustomers();
  });
  $(document).on("CustomerAddedEvent", function(evt, data) {
    // debugger;
    displayCustomers();
  });
});
