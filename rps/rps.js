const play = (option) => {

	let computerOptions = ['rock', 'paper', 'scissors']
	let randomNo = Math.floor(Math.random() * 3)
	let computerPick = computerOptions[randomNo]

	const hideAll = () =>{
		document.getElementById('paper').classList.add('hidden')
		document.getElementById('scissors').classList.add('hidden')
		document.getElementById('rock').classList.add('hidden')
	}

	const showPaper = () => {
	document.getElementById('paper').classList.remove('hidden')
	document.getElementById('scissors').classList.add('hidden')
	document.getElementById('rock').classList.add('hidden')
}

	const showScissors = () => {
		document.getElementById('scissors').classList.remove('hidden')
		document.getElementById('paper').classList.add('hidden')
		document.getElementById('rock').classList.add('hidden')
	}

	const showRock = () => {
		document.getElementById('rock').classList.remove('hidden')
		document.getElementById('scissors').classList.add('hidden')
		document.getElementById('paper').classList.add('hidden')
	}

	const win = () => {
		document.getElementById('outcome').innerHTML = 'YOU WIN'
	}

	const lose = () => {
		document.getElementById('outcome').innerHTML = 'YOU LOSE'
	}

	const draw = () => {
		document.getElementById('outcome').innerHTML = 'DRAW'
	}


let resultCalculator = [{
							player: 'paper',
							paper:'draw',
							rock: 'win',
							scissors: 'lose'
						},
						{
							player: 'rock',
							paper:'lose',
							rock: 'draw',
							scissors: 'win'
						},
						{
							player: 'scissors',
							paper:'win',
							rock: 'lose',
							scissors: 'draw'
						}
]

if (option == 'paper'){
	let placeholder = computerPick.split('').join('')
	console.log('computer', computerPick)
	console.log('placeholder', placeholder);
	console.log(resultCalculator[0].computerPick.placeholder);
}





	// if (option == 'paper' && computerPick == 'paper'){
	// 		showPaper()
	// 		draw()
	// } else if (option == 'paper' && computerPick == 'rock'){
	// 	showRock()
	// 	win()
	//
	// } else if (option == 'paper' && computerPick == 'scissors'){
	// 	showScissors()
	// 	lose()
	// }




}





// document.getElementById('paper').classList.remove('option hidden')
// console.log(document.getElementById('paper'));
