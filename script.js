function add(a,b){
  return a + b;
}

function subtract(a,b){
  return a - b;
}

function multiply(a,b){
  return a * b;
}

function devide(a,b){
  return a / b;
}

function operate(operator, a, b){
  switch(operator){
    case '+':
      return add(a, b);
      break;
    case '-':
      return subtract(a, b);
      break;
    case '*':
      return multiply(a, b);
      break;
    case '/':
      return devide(a, b);
      break;
  }
}


let buttons = document.querySelectorAll('button');
let displayNum = document.getElementById('nums');
let runningTotal = '';
let firstNum = 0;
buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    let buttonContent = event.target.innerHTML;
    let operator = '';
    //if user clicks clear
    if(buttonContent === 'Clear'){
      displayNum.innerHTML = '';
      runningTotal = '';
      //if operator is clicked
    }else if(buttonContent === '/' || buttonContent === 'x' || buttonContent === '-' || buttonContent === '+' || buttonContent === '=' ) {
      if(firstNum === 0) {
        firstNum = runningTotal;
        runningTotal = '';
      }
      switch(buttonContent) {
        case '/':
          operator = '/';
          displayNum.innerHTML = '';
          break;
        case 'x':
          operator = '*';
          displayNum.innerHTML = '';
          break;
        case '-':
          operator = '-';
          displayNum.innerHTML = '';
          break;
        case '+':
          operator = '+';
          displayNum.innerHTML = '';
          break;
        case '=':
          displayNum.innerHTML = '';

          break;
      }
    }else{
      displayNum.innerHTML += buttonContent;
      runningTotal += buttonContent;
      console.log(runningTotal)
    }
  })
})
