export const mathOps = (num1,num2,mathOperation) => {
    let result;
    if(mathOperation === "addition") { result = (num1 + num2)}
        else if(mathOperation === "multiplication") { result = (num1 * num2)}
        else if(mathOperation === "subtraction") { result = (num1 - num2)}
        else if(mathOperation === "division") { result = (num1 % num2)}
        else{ result = "Mathematical Operation Not Recognized, Try Again Please"};

    return result
}