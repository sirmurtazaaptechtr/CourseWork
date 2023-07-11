// let num1 = Number(prompt("Enter First Number"));
// let num2 = Number(prompt("Enter Second Number"));
// let num1 = parseFloat(prompt("Enter First Number"));
// let num2 = parseFloat(prompt("Enter Second Number"));
// let num1 = parseInt(prompt("Enter First Number"));
// let num2 = parseInt(prompt("Enter Second Number"));
// let num1 = BigInt(prompt("Enter First Number"));
// let num2 = BigInt(prompt("Enter Second Number"));

// let res = num1 + num2;

// console.log(res);

// let bool = true;
// console.log(Number(bool));

// bool = false;
// console.log(Number(bool));

// let num = 15;
// console.log(Boolean(num));

// num = 0;
// console.log(Boolean(num));

// num = null;
// console.log(Boolean(num));

// num = '';
// console.log(Boolean(num));

//JavaScript Functions
const fullName = document.getElementById('fullName');
const showMsgBtn = document.getElementById('showMsgBtn');
const d1 = document.getElementById('d1');
const num = document.getElementById('num');
const showSqr = document.getElementById('showSqr');

// let fullName = "Ali";
// d1.innerHTML = `Hi ${fullName}, How are you?`;
// fullName = "Raza";
// d1.innerHTML = `Hi ${fullName}, How are you?`;
// fullName = "Hussain";
// d1.innerHTML = `Hi ${fullName}, How are you?`;

function greet(name){
    d1.innerHTML += `<p>Hi ${name}, How are you?</p>`;
}

function sqrer(number){
    return number * number;
}

// let res = sqrer(15);
// console.log(res);

// console.log(sqrer(7));


// let fullName = "Ali";
// greet(fullName);
// fullName = "Raza";
// greet(fullName);
// fullName = "Hussain";
// greet(fullName);

showMsgBtn.addEventListener("click",function(){
    let theName = fullName.value;
    greet(theName);
});

num.addEventListener("blur  ",function(){
    let theNum = num.value;
    showSqr.innerHTML = `${sqrer(theNum)}`;
});