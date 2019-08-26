// #050501


// let changeColor = (element) => {
//
// 	if (element.classList.contains('on')){
// 		element.classList.remove('on')
// 		element.classList.add('off')
// 	} else {
// 		element.classList.remove('off')
// 		element.classList.add('on')
// 	}
// }


// #050502
// Given the below html, change the content of the element with an id of total to the sum of the values typed inside the 2 input fields. Make sure the total is displayed in real-time as the values are typed in.


let total = 0;

const recordValue1 = (element) => {


total = Number(document.getElementById('input1').value) + Number(document.getElementById('input2').value)


	document.getElementById('total').innerHTML = `${total}`
}
