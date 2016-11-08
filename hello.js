console.log("Okay to put messages here for debug sake");


function updateStatus(message) {
	var myStatus = document.getElementById("myStatus");
	myStatus.innerHTML = message;
}

function loadSuccessStatus() {
	updateStatus("Successfully Loaded... @" + new Date());
}

function processForm() {
	var allForms = document.getElementsByTagName("form");
	var myForm = allForms[0];
	console.log(myForm.firstName); // expect whole field
	var firstName = document.getElementById("firstName");
	console.log(firstName.value);
	updateStatus("Registered " + firstName.value);
}

// ("load" is defined by browser as HTML DOM tree load*)
window.addEventListener("load", loadSuccessStatus);

// Add another unload handler for the button.
window.addEventListener("load", function() {
	// Register callback for the click event of the button
	document.getElementById("btnSubmit").onclick = processForm;
});




