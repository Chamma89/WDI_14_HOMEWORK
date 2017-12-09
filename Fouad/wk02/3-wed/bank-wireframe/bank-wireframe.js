
var boxes = document.querySelector('.savings');
var boxes2 = document.querySelector('.checking');

// savings variables
var depositButton = document.querySelector('.deposit1');
var withdrawButton = document.querySelector('.withdraw1');
var amountEntered = document.querySelector('.amount1');
var balance = document.querySelector('.money1');

//checking variables

var depositButton2 = document.querySelector('.deposit2');
var withdrawButton2 = document.querySelector('.withdraw2');
var amountEntered2 = document.querySelector('.amount2');
var balance2 = document.querySelector('.money2');

// savings add and remove functions

function addForSavings (){
	var result = Number(amountEntered.value) + Number(balance.textContent);
	balance.textContent = result;
	boxes.classList.remove('zeroBalance')
	
}

depositButton.addEventListener('click', addForSavings);


function removeForSavings (){
	var result = Number(balance.textContent)-Number(amountEntered.value);
	if (result < 0){
		alert("You dont have enough funds");

		} else if(result === 0){
			boxes.classList.add('zeroBalance')
			balance.textContent = result;
		} else {

		balance.textContent = result;
		
		}
	
		return result;
}


withdrawButton.addEventListener('click', removeForSavings);

// checking add and remove functions

function addForChecking (){
	var result = Number(amountEntered2.value) + Number(balance2.textContent)
	balance2.textContent = result;
	boxes2.classList.remove('zeroBalance')
}

depositButton2.addEventListener('click', addForChecking);

function removeForChecking (){
	var result = Number(balance2.textContent) - Number(amountEntered2.value)
		if(result < 0){
			alert("You dont have any funds!")
		} else if (result === 0) {
			boxes2.classList.add('zeroBalance');
			balance2.textContent = result;
		} else {
			balance2.textContent = result;
		}

	
}


withdrawButton2.addEventListener('click', removeForChecking);















