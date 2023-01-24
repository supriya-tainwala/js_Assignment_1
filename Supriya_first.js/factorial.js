
function factorial(number){

if (number < 0) {
    console.log("does not exist");
}

else if (number === 0) {
    console.log("factorial of number is 1");
}

else {
    var fact = 1;
    for (var i = 1; i <= number; i++)
     {
        fact *= i;
     }
    console.log(`The factorial of ${number} is ${fact}.`);
    }
}

const number = prompt('Enter a positive integer: ');
factorial(number);