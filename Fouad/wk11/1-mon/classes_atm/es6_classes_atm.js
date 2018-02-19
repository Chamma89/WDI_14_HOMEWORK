class ATM {
  constructor(type) {
     this.type = type
     this.total = 0;
     this.transactionHistory = []
  }

  showBalance(){
  	return 'there is currently $' + this.total + '  in your account' 
  }

  withdraw (amount){

  	this.transactionHistory.push(amount + ' debit')
  	return this.total -= amount
  }

  deposit (amount){
  	this.transactionHistory.push(amount + ' credit')
  	return this.total += amount
  }

  showHistory(){
  	return 'This is the transaction history: ' + this.transactionHistory
  }

}

const cash = new ATM('checking');

cash.deposit(2)

cash.withdraw(10)

cash.deposit(80)

console.log(cash.showBalance());

console.log(cash.showHistory())

