function loadCustomers() {
  $.getJSON("http://nextgened.com/weasley/customers.json", function(data) {
    customers = data;
    displayCustomers();
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
});
