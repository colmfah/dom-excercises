

// Given the below html and css, check that the field with an id of email has an @ sign when the form is submitted.
//
// If so, show the message Thank you for signing up in the element with an id of message and add the success class to it (thus turning its content green)
// If not, show the message Sorry, please provide a valid email address in the element with an id of message and add the error class to it (thus turning its content red)



const checkemailaddress = (element, event) => {
	event.preventDefault()

if(document.getElementById('email').value.includes('@')){
	document.getElementById('message').innerHTML = 'Thank you for signing up'
	document.getElementById('message').classList.add('success')
} else {
	document.getElementById('message').innerHTML = 'Sorry, please provide a valid email address'
	document.getElementById('message').classList.add('error')
}



// console.log(document.getElementById('email').value.contains('hc'));

	// if(document.getElementById('email').value.contains('@')){
	// 	console.log('we have an at');
	// }



}
