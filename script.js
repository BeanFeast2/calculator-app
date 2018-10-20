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

function clearCalc(){
  runningNum = '';
  runningTotal = '';
  operator = '';
  firstNum = '';
}


let buttons = document.querySelectorAll('button');
let display = document.getElementById('nums');
let firstNum = '';
let runningNum = '';
let operator = '';
let equalPushed = false;

function operateChecker(operatorInput, num){
  display.innerHTML = operatorInput;
  if(equalPushed){
    display.innerHTML = operate(operator, firstNum, num);
    equalPushed = false;
  }else if(firstNum === ''){
    operator = operatorInput;
    firstNum = num;
  }else{
    operator = operatorInput;
    runningNum = (operate(operator, firstNum, num))
    console.log(runningNum);
  }
}

buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    let input = event.target.innerHTML;
    let inputId = event.target.id;
    //if clear button pushed
    if(inputId === 'clearButton'){
      display.innerHTML = '';
      clearCalc();
    //if back button pushed
    }else if(inputId === 'backArrow' || inputId === 'backButton'){
      display.innerHTML = display.innerHTML.substring(0, display.innerHTML.length - 1)
      runningNum = runningNum.substring(0, runningNum.length -1)
    //if devide, multiply, add, or subtract buttons pushed
  }else if(inputId === 'devideButton' || inputId === 'timesButton' || inputId === 'minusButton' || inputId === 'plusButton' || inputId === 'equalButton'){
      if(inputId != 'equalButton'){
        operator = input;
      }else{
        equalPushed = true;
      }
      //insert function here that takes operator and runningNum
      operateChecker(operator, runningNum);

    //if numbers or decimal pushed
    }else{
      if(display.innerHTML === '/'){
        display.innerHTML = '';
        runningNum = '';
      }
      display.innerHTML += input;
      runningNum += input;
    }
  })
})

//done with basic features, need to add running calculator feature
