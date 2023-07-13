const d1 = document.getElementById('d1');
// let number = Number(prompt("Enter any Number"));

// if(number % 2 == 0){
//     d1.innerHTML =`${number} is Even.`;
// }else{
//     d1.innerHTML =`${number} is Odd.`;
// }

// let username = prompt("Enter Username");
// let password = prompt("Enter Password");

// if(username == 'admin' && password == '123'){
//     d1.innerHTML = `Welcome ${username}`;
// }else{
//     d1.innerHTML = `Invalid username or password!`;
// }

let num1 = Number(prompt("Enter First Number"));
let num2 = Number(prompt("Enter Second Number"));
let op = prompt("Enter Choice (+, -, *, /, ** or %)");

// if(op == '+'){
//     d1.innerHTML = `${num1} + ${num2} = ${num1+num2}`;
// }else if(op == '-'){
//     d1.innerHTML = `${num1} - ${num2} = ${num1-num2}`;
// }else if(op == '*'){
//     d1.innerHTML = `${num1} x ${num2} = ${num1*num2}`;
// }else if(op == '/'){
//     d1.innerHTML = `${num1} / ${num2} = ${num1/num2}`;
// }else if(op == '%'){
//     d1.innerHTML = `${num1} % ${num2} = ${num1%num2}`;
// }else if(op == '**'){
//     d1.innerHTML = `${num1} ^ ${num2} = ${num1**num2}`;
// }else {
//     d1.innerHTML = `Invalid Input!`;
// }

switch(op){
    case '+':
        d1.innerHTML = `${num1} + ${num2} = ${num1+num2}`;
    break;
    case '-':
        d1.innerHTML = `${num1} - ${num2} = ${num1-num2}`;
    break;
    case '*':
        d1.innerHTML = `${num1} x ${num2} = ${num1*num2}`;
    break;
    case '/':
        d1.innerHTML = `${num1} / ${num2} = ${num1/num2}`;
    break;
    case '**':
        d1.innerHTML = `${num1} ^ ${num2} = ${num1**num2}`;
    break;
    case '%':
        d1.innerHTML = `${num1} % ${num2} = ${num1%num2}`;
    break;
    default:
        d1.innerHTML = `Invalid Input!`;
    break;
}