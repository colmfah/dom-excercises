// Given the below html and css, check that:
//
// the field inside the element with an id of name has a length greater than 2 characters.

//If not, show the message At least 3 characters in the element with a class of error corresponding to this field.


// the field inside the element with an id of password has a length greater than 8 characters.

//If not, show the message At least 9 characters in the element with a class of error corresponding to this field.


const recordValue = (element) => {
// console.log(element.value.length <= 2)
if (element.value.length <= 2){
	document.getElementById('texterror').innerHTML = 'At least 3 characters'
	document.getElementById('texterror').classList.add('error')
} else {
	document.getElementById('texterror').innerHTML = ''
	document.getElementById('texterror').classList.remove('error')
}

}

const passwordCheck = (element) => {
	if (element.value.length <= 8){
		document.getElementById('pwerror').innerHTML = 'At least 9 characters'
		document.getElementById('pwerror').classList.add('error')
	} else {
		document.getElementById('pwerror').innerHTML = ''
		document.getElementById('pwerror').classList.remove('error')
	}

}


// console.log(document.getElementById('name'));
