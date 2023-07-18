const tabNum = document.getElementById('tabNum');
const tabBtn = document.getElementById('tabBtn');
const d1 = document.getElementById('d1');
// d1.innerHTML = `<h1>Table of 2</h1>`;
// d1.innerHTML += `<p>2 X 1 = 2</p>`;
// d1.innerHTML += `<p>2 X 2 = 4</p>`;
// d1.innerHTML += `<p>2 X 3 = 6</p>`;

tabBtn.addEventListener("click",function(){
    let tab = tabNum.value;
    d1.innerHTML = `<h1>Table of ${tab}</h1>`;
    for(let c=1;c<=10;c++){
        d1.innerHTML += `<p>${tab} X ${c} = ${tab * c}</p>`;
    }
});
