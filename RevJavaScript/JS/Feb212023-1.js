console.log("JS is working...");
x = 5;
console.log(x);

var y = 10;
console.log(y);

let z = 25;
console.log(z);

const p = 75;
console.log(p);

var x = 6;
z = 15;
// p = 15;
document.write(x+", "+y+", "+z+" & "+p);

let data;
console.log(data+" is "+typeof(data));

data = 15;
console.log(data+" is "+typeof(data));

data = "Ali";
console.log(data+" is "+typeof(data));

data = true;
console.log(data+" is "+typeof(data));

data = null;
console.log(data+" is "+typeof(data));

data = [1,2,3];
console.log(data+" is "+typeof(data));

data = ()=>{
    console.log("I am a function.");
};
console.log(data+" is "+typeof(data));

let num1 = 10;
let num2 = 2;

let res = num1+num2;
console.log(res);

console.log(num1+" + "+num2+" = "+res);
console.log(`${num1} + ${num2} = ${res}`);

res = num1-num2;
console.log(`${num1} - ${num2} = ${res}`);

res = num1*num2;
console.log(`${num1} X ${num2} = ${res}`);

res = num1/num2;
console.log(`${num1} / ${num2} = ${res}`);

res = num1%num2;
console.log(`${num1} / ${num2} = ${res}`);

num1++;
console.log(num1);

num2++;
console.log(num2);

num1+=6;
console.log(num1);

num2--;
console.log(num2);
