const tabNum = document.getElementById('tabNum');
const tabBtn = document.getElementById('tabBtn');
const num4Prime = document.getElementById('num4Prime');
const check4PrimeBtn = document.getElementById('check4PrimeBtn');
const st = document.getElementById('st');
const ed = document.getElementById('ed');
const primeBtn = document.getElementById('primeBtn');
const d1 = document.getElementById('d1');
// d1.innerHTML = `<h1>Table of 2</h1>`;
// d1.innerHTML += `<p>2 X 1 = 2</p>`;
// d1.innerHTML += `<p>2 X 2 = 4</p>`;
// d1.innerHTML += `<p>2 X 3 = 6</p>`;

tabBtn.addEventListener("click", function () {
    let tab = tabNum.value;
    d1.innerHTML = `<h1>Table of ${tab}</h1>`;
    for (let c = 1; c <= 10; c++) {
        d1.innerHTML += `<p>${tab} X ${c} = ${tab * c}</p>`;
    }
});

check4PrimeBtn.addEventListener("click", function () {
    let num = num4Prime.value;
    let isPrime = true;

    for (let d = 2; d < num; d++) {
        if (num % d == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        d1.innerHTML += `<p>${num} is PRIME</p>`;
    } else {
        d1.innerHTML += `<p>${num} is not PRIME</p>`;
    }
});

primeBtn.addEventListener("click", function () {
    let stVal = st.value;
    let edVal = ed.value;
    for (let num = stVal; num <= edVal; num++) {
        let isPrime = true;
        let dArr = [];
        for (let d = 2; d < num; d++) {
            if (num % d == 0) {
                isPrime = false;
                dArr.push(d);
            }
        }
        if (isPrime) {
            d1.innerHTML += `<p>${num} is PRIME</p>`;
        } else {
            d1.innerHTML += `<p>${num} is not PRIME because it is divisible by ${dArr}.</p>`;
        }
    }
});