// #050401
// Given the below html, log in the console, all the class values of the element with an id of main

// <div class="main nav primary" id="main"></div>

// let answer = document.getElementById('main').classList
//
// console.log(answer);
//
//
// #050402
// Given the below html, add the class primary to all the elements with a class of selected
//
// <ul>
//   <li class="selected">1</li>
//   <li class="selected">2</li>
//   <li></li>
// </ul>


// let step1 = Array.from(document.getElementsByClassName('selected'))
//
// step1.forEach(e => e.classList.add('primary'))
//
// console.log(step1);


// #050403
// Given the below html, remove the class selected from all the elements that do not have a class of primary
//
// <ul>
//   <li class="selected primary">1</li>
//   <li class="selected">2</li>
//   <li class="selected">3</li>
// </ul>

let step1 = Array.from(document.getElementsByClassName('selected'))

// console.log(!step1[0].classList.value.includes('primary'));

step1.forEach(e => {if (!e.classList.value.includes('primary')){
	e.classList.remove('selected')
}})

console.log(Array.from(document.getElementsByClassName('selected')));

//loop thru.
//check the classList
//if does not have primary delete selected
