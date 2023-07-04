a = 10;
b = 5;
c = a + b;
console.log(a);
console.log(b);
console.log(c);
console.log("First Number = " + a);
console.log(`First Number = ${a}`);
console.log('Second Number = ' + b);
console.log(`Second Number = ${b}`);
console.log('Result = ' + c);
console.log(`Result = ${c}`);
console.log(a + ' + ' + b + ' = ' + c);
console.log(`${a} + ${b} = ${c}`);

var x;//declaration of variable
let y;//declaration of variable

//let x;// allowed
//let y;//not allowed

x = 12;//initialization of variable
y = 2;//initialization of variable

console.log(x-y);
//we can't re-decleare a block-scope variable but we can re-initilize it.
x = 16;
y = 4;

console.log(x-y);

const pi = 3.14;
//pi = 22.7; //not allowed

/*
Data Types in javascript
1. undefined
2. null
3. boolean
4. number
5. bigint
6. string
7. object
8. symbol
*/

let data;
console.log(`${data} is ${typeof(data)}`);
data = null;
console.log(`${data} is ${typeof(data)}`);
data = true;
console.log(`${data} is ${typeof(data)}`);
data = 5;
console.log(`${data} is ${typeof(data)}`);
data = 5.6;
console.log(`${data} is ${typeof(data)}`);
data = 2.4e6;
console.log(`${data} is ${typeof(data)}`);
data = 123456789123456789123;
console.log(`${data} is ${typeof(data)}`);
data = 123456789123456789123n;
console.log(`${data} is ${typeof(data)}`);
data = "my name is Hussain";
console.log(`${data} is ${typeof(data)}`);
data = 'my name is Hussain';
console.log(`${data} is ${typeof(data)}`);
data = `my name is Hussain`;
console.log(`${data} is ${typeof(data)}`);
data = [null,"Ali","Raza",29,true];
console.log(`${data} is ${typeof(data)}`);
console.log(`${data[0]} is ${typeof(data[0])}`);
console.log(`${data[1]} is ${typeof(data[1])}`);
console.log(`${data[2]} is ${typeof(data[2])}`);
console.log(`${data[3]} is ${typeof(data[3])}`);
console.log(`${data[4]} is ${typeof(data[4])}`);
data = {location:null,firstName:"Ali",lastName:"Raza",age:29,isHuman:true};
console.log(`${data} is ${typeof(data)}`);
console.log(`${data.firstName} is ${typeof(data.firstName)}`);
console.log(`${data.age} is ${typeof(data.age)}`);
console.log(`${data.isHuman} is ${typeof(data.isHuman)}`);
console.log(`${data.location} is ${typeof(data.location)}`);