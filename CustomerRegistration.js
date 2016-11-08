"use strict";

$(document).ready(function() {

  $("#btnSubmit").click(function() {
    var customer = {
        firstName : $("#txtFirstName").val(),
        lastName : $("#txtLastName").val(),
        phoneNumber : $("#txtPhoneNumber").val()
    };
    window.customers.push(customer);
    $(document).trigger("CustomerAddedEvent", customer);
    updateStatus("Registered " + customer.firstName + " " + customer.lastName + " @" + new Date());
  });
});
