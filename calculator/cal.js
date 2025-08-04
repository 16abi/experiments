document.addEventListener("DOMContentLoaded", () => {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll("button");
    let displayValue = '';
    let currentNum = '';
    let prevNum = '';
    let operator = null;

    buttons.forEach(button => {
      button.addEventListener("click", () => {
        const value = button.textContent;

        if (value == 'C') {
          displayValue = '';
          currentNum = '';
          prevNum = '';
          operator = null;
          display.textContent = '0';
        }

        else if (value == '=') {
          if (prevNum && currentNum && operator) {
            const result = operate(parseFloat(prevNum), parseFloat(currentNum), operator);
            displayValue = result.toString();
            display.textContent = displayValue;
            currentNum = result.toString();
            prevNum = '';
            operator = null;
          }
        }

        else if (value == '+' || value == '-' || value == '×' || value == '÷') {  
            if(currentNum == '')
                return;
            prevNum = currentNum;
            currentNum = '';
            if (value == '×') {
                operator = '*';
            } else if (value == '÷') {
                operator = '/';
            } else {
               operator = value;
            }
              displayValue += value;
              display.textContent = displayValue;
        }
           
               

        else {
          currentNum += value;
          displayValue += value;
          display.textContent = displayValue;
        }
      });
    });

    function operate(a, b, op) {
      switch (op) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return b != 0 ? a / b : 'Error';
      }
    }
});
