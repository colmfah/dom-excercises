// #050301
// Given the below html, access the element with an id of main and log only its content in the console

// let answer = document.getElementById('main').innerHTML

// console.log(answer);

// #050302
// Given the below html, access the element with an id of content and change its content to Main Content

// document.getElementById('content').innerHTML = 'Main Content'

// #050303
// Given the below html, access the element with an id of products and change its content to <div>1</div><div>2</div>

// let q3 = document.getElementById('products')
//
// q3 = `<div>1</div><div>2</div>`
//
//
// console.log(q3);


// #050304
// Given the below html, access all elements with a class of product and move them inside the element with an id of products

// <div class="product">Apple</div>
// <div class="product">Banana</div>
// <div class="product">Cherry</div>
// <div id="products"></div>

let productsListDOM = document.getElementsByClassName('product')
let target = document.getElementById('products')

target = productsListDOM

console.log(target);
