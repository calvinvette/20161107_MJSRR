var customers = [ ];

function updateStatus(message) {
  $("#myStatus").html(message);
}


$(document).ready(function() {

  $("#btnSubmit").click(function() {
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
