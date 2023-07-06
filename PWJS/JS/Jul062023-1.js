let a = 15;
let b = 5;

console.log(`${a} + ${b} = ${a + b}`);
console.log(`${a} - ${b} = ${a - b}`);
console.log(`${a} x ${b} = ${a * b}`);
console.log(`${a} / ${b} = ${a / b}`);
console.log(`${a} ^ ${b} = ${a ** b}`);
console.log(`${a} % ${b} = ${a % b}`);

console.log(`a = ${a} and b = ${b}`);

a++; //post increment a = a + 1;
console.log(`a = ${a} and b = ${b}`);

++a; //pre increment a = a + 1;
console.log(`a = ${a} and b = ${b}`);

b--; //post decrement b = b - 1;
console.log(`a = ${a} and b = ${b}`);

--b; //pre decrement b = b - 1;
console.log(`a = ${a} and b = ${b}`);

// let c = ++a * b;
let c = a++ * b;
console.log(c);
console.log(`a = ${a} and b = ${b}`);

let x = 7;
console.log(`x = ${x}`);

x += 5; // x = x + 5;
console.log(`x += 5; ---> x = ${x}`);

x -= 5; // x = x - 5;
console.log(`x -= 5; ---> x = ${x}`);

x *= 5; // x = x * 5;
console.log(`x *= 5; ---> x = ${x}`);

x /= 5; // x = x / 5;
console.log(`x /= 5; ---> x = ${x}`);

x %= 5; // x = x % 5;
console.log(`x %= 5; ---> x = ${x}`);

x **= 5; // x = x ** 5;
console.log(`x **= 5; ---> x = ${x}`);