"use strict";
// if customers is "falsey", instantiate as an empty array
// if "truthy", then use it as-is.

var customers = customers || [ ];

function loadCustomers() {
  $.getJSON("http://nextgened.com/weasley/customers.json", function(data) {
    customers = data;
    $(document).trigger("CustomersLoadedEvent");
  });
}

function displayCustomers() {
  for (var cust of customers) {
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
  loadCustomers();
  $(document).on("CustomersLoadedEvent", function(evt) {
    displayCustomers();
  });
});
