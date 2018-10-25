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
  if(b === 0){
    alert("Everything is Infinite Boy")
    location.reload();
  }else{
    return a / b;
  }
}

function operate(operator, a, b){
  if(operator === 'x'){
    operator = '*'
  }
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

function clearCalc(){
  runningNum = '';
  runningTotal = '';
  operator = '';
  firstNum = '';
}

function operateChecker(operatorInput, num){
  display.innerHTML = operatorInput;
  if(equalPushed){
    if(operate(operatorInput, firstNum, num) % 1 === 0){
      display.innerHTML = operate(operatorInput, firstNum, num);
    }else{
      display.innerHTML = operate(operatorInput, firstNum, num).toFixed(8);
    }
  }else if(firstNum === ''){
    operator = operatorInput;
    firstNum = num;
  }else{
    firstNum = (operate(lastOperator, firstNum, num));
  }
}

let buttons = document.querySelectorAll('button');
let display = document.getElementById('nums');
let firstNum = '';
let runningNum = '';
let operator = '';
let lastOperator = '';
let equalPushed = false;

buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    let input = event.target.innerHTML;
    let inputId = event.target.id;
    //if user would like to continue using calc after pressing equal
    if(equalPushed){
      display.innerHTML = '';
      //clearCalc();
      equalPushed = false;
    }
    //if clear button pushed
    if(inputId === 'clearButton'){
      display.innerHTML = '';
      clearCalc();
    //if back button pushed
    }else if(inputId === 'backArrow' || inputId === 'backButton'){
      display.innerHTML = display.innerHTML.substring(0, display.innerHTML.length - 1)
      runningNum = runningNum.substring(0, runningNum.length -1)
    //if devide, multiply, add, or subtract, or equal buttons pushed
    }else if(inputId === 'devideButton' || inputId === 'timesButton' || inputId === 'minusButton' || inputId === 'plusButton' || inputId === 'equalButton'){
        if(inputId != 'equalButton'){
          lastOperator = operator;
          operator = input;
        }else{
          equalPushed = true;
        }
        operateChecker(operator, Number(runningNum));
    //if numbers or decimal pushed
    }else{
      if(display.innerHTML === '/' || display.innerHTML === '+' || display.innerHTML === '-' || display.innerHTML === 'x'){
        display.innerHTML = '';
        runningNum = '';
      }
      //doesn't allow more than two decimal points to be input
      if(!(runningNum.includes('.') && input === '.')){
        runningNum += input;
        display.innerHTML += input;
      }
    }
  })
})
