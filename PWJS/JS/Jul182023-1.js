const d1 = document.getElementById('d1');
// d1.innerHTML += `<p>1. My name is Syed Murtaza Hussain</p>`;
// d1.innerHTML += `<p>2. My name is Syed Murtaza Hussain</p>`;
d1.innerHTML += `<h2>For Loop</h2>`;
d1.innerHTML += `<h3>For Loop inc</h3>`;
for(let c=1;c<=5;c++){
    d1.innerHTML += `<p>${c}. My name is Syed Murtaza Hussain</p>`;
}
d1.innerHTML += `<h3>For Loop dec</h3>`;
for(let c=5;c>=1;c--){
    d1.innerHTML += `<p>${c}. My name is Syed Murtaza Hussain</p>`;
}
d1.innerHTML += `<h2>While Loop</h2>`;
d1.innerHTML += `<h3>While Loop unexpected termination</h3>`;
let x = 1;
while(confirm("Do you want to continue")){
    d1.innerHTML += `<p>${x}. I am Human</p>`;
    x++;
}
d1.innerHTML += `<h3>While Fixed Intervel</h3>`;
let y = 1;
while(y <= 5){
    d1.innerHTML += `<p>${y}. I am Human</p>`;
    y++;
}
d1.innerHTML += `<h2>do while Loop</h2>`;
let z = 1;
do{
    d1.innerHTML += `<p>${z}. I am Human</p>`;
    z++;
}while(confirm("Do you want to continue"));