function loadCustomers() {
  $.getJSON("http://nextgened.com/weasley/customers.json", function(data) {
    customers = data;
  });
}

$(document).ready(function() {
  loadCustomers();
});
