// let x = 10;
// let y = 20;

const nums = [10,20,["Ali","Sana"]];

console.log(nums);
console.log(nums[0]);
console.log(nums[1]);
console.log(nums[2]);
console.log(nums[2][0]);
console.log(nums[2][1]);

nums.forEach(function(e){
    console.log(e);
});

let myObj = {name:"Hiba Farhan",age:17};

console.log(myObj);
console.log(myObj.name);
console.log(myObj.age);

const data = [
    {name:"Hiba Farhan",age:17},
    {name:"Mujtaba Khanani",age:21},
    {name:"Junaid Kamran",age:17},
    {name:"Muhammad Ali",age:18},
    {name:"Khizar Mansoor",age:18}
];
console.log(data);
console.log(data[0]);
console.log(data[0].name);
console.log(data[0].age);

console.log(nums.length);
console.log(data.length);

for(let i=0;i<data.length;i++){
    // console.log(data[i].name);
    // console.log(data[i].age);
    console.log(`Dear ${data[i].name}, you are ${data[i].age} years old.`);
}

data.forEach(function(e,i){
    console.log(e.name,e.age);
    console.log(`${i+1}. Dear ${e.name}, you are ${e.age} years old.`);
});

for(index in data){
    console.log(index);
    console.log(data[index].name);
    console.log(data[index].age);
}
for(element of data){
    console.log(element.name);
    console.log(element.age);
}