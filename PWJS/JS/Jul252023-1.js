const nameBox = document.getElementById('nameBox');
const ageBox = document.getElementById('ageBox');
const saveBtn = document.getElementById('saveBtn');
const showContainer = document.getElementById('showContainer');
function displayStudents() {
    const previousData = localStorage.getItem("students");
    if (previousData == null) {
        students = [];
    } else {
        students = JSON.parse(localStorage.getItem("students"));
        showContainer.innerHTML = '';
        students.forEach(function (e, i) {
            showContainer.innerHTML += `<p>${i + 1}. Dear ${e.name} you are ${e.age} years old. <input type="button" id="${i}" value="Delete" onclick="deleteNote(this.id)"></p>`;
        });
    }
}
displayStudents();
saveBtn.addEventListener("click", function () {
    const previousData = localStorage.getItem("students");
    if (previousData == null) {
        students = [];
    } else {
        students = JSON.parse(localStorage.getItem("students"));
        students.push({ name: nameBox.value, age: ageBox.value });     
        localStorage.setItem("students", JSON.stringify(students));
        displayStudents();
    }
});
function deleteNote(index){    
    const previousData = localStorage.getItem("students");
    if (previousData == null) {
        students = [];
    } else {
        students = JSON.parse(localStorage.getItem("students"));
        students.splice(index,1);
        localStorage.setItem("students", JSON.stringify(students));
        displayStudents();
    }

}
