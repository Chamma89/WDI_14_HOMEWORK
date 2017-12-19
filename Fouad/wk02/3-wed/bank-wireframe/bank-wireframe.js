
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
	
	
	if (isNaN(result)){
 
		return		
	}

	balance.textContent = result;
	boxes.classList.remove('zeroBalance')
	
}

depositButton.addEventListener('click', addForSavings);


function removeForSavings (){


	if (Number(amountEntered.value) < Number(balance.textContent)){

		balance.textContent -=  Number(amountEntered.value);
 	} 	

 	else if ((Number(amountEntered.value) -  Number(balance.textContent)) === 0) {
			boxes.classList.add('zeroBalance');
			balance.textContent = 0;
				
			
 	}

	if (Number(amountEntered.value) >  Number(balance.textContent) && Number(amountEntered.value) <  Number(balance2.textContent)){

			part1 =  Number(balance.textContent) + Number(amountEntered.value)
			part2 = Number(balance2.textContent) - Number(amountEntered.value)
			balance.textContent = part1;
			balance2.textContent = part2;
	}

	else {
			console.log("not enough money in both accounts")
	}




}


withdrawButton.addEventListener('click', removeForSavings)






/*if (amountEntered.value < (Number(balance.textContent) + Number(balance2.textContent))){
			var part1 =  amountEntered.value - balance.textContent;
			var part2 = balance2.textContent - part1;
			balance2.textContent = Number(part2);
			balance.textContent = Number(balance.textContent) + Number(amountEntered);
			debugger
	}
		
		else if (amountEntered.value > (Number(balance.textContent) + Number(balance2.textContent))){
			alert("Not enough money in both accounts!");
*/


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










