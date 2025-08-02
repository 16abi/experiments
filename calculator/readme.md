#Possible scenarios:
1. A number is clicked, e.g. 5
1. a. If a number is already present (e.g., 4) , make it '45'
1. b. If no number is present, take 5
2. Clear button 'C' is clicked
2. a. Reset everything: current number, previous number, operation
3. Equal button '=' is clicked
3. a. use stored number and operation to calculate result with current number
3. b. Display result
3. c. Reset current operation but allow continued calculation(e.g., press + again)
4. An operator (+, -, *, /) is clicked  
4. a. If it's the first operator, store the number and the operation  
4. b. If another operator is clicked after some input,compute result and then apply new operation

#How to handle each case:
1. a. update currentNum ```currentNum = currentNum * 10 + newDigit``` ,e.g.,``` currentNum = 4, newDigit = 5 ( 4 * 10 + 5 = 45) ```
1. b. store number in a variable called currentNum
2. a. Reset all variables:
    ``` currentNum = 0, prevNum = null, operation = null, display = '' ```
3. a. result = performOperation(prevNum, currentNum, operation)
3. b. display the result
3. c. ``` currentNum = result, continues next operation```
4. a. preNum ,operator, currentNum 
4. b. previous operation result( preNum = result) then,
     operation = operator clicked and then,
     currentNum

        

