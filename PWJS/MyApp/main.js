const saveBtn = document.getElementById('saveBtn');
const noteTitle = document.getElementById('noteTitle');
const noteDescription = document.getElementById('noteDescription');
const showNotesArea = document.getElementById('showNotesArea');
showNotes();
saveBtn.addEventListener("click",function () {
    const previousNotes = localStorage.getItem("notes");
    let theTitle = noteTitle.value;
    let theDescription = noteDescription.value;
    if(previousNotes == null){
        myArr = [];
    }else{
        myArr = JSON.parse(previousNotes);
    }
    myArr.push({title:theTitle,description:theDescription});
    localStorage.setItem("notes",JSON.stringify(myArr));
    showNotes();
});
function showNotes () {
    const previousNotes = localStorage.getItem("notes");
    if(previousNotes == null){
        myArr = [];
    }else{
        myArr = JSON.parse(previousNotes);
    }
    showNotesArea.innerHTML = '';//to clear the notesArea before displaying Notes
    myArr.forEach(function(e,i){
        showNotesArea.innerHTML += `
        <div class="col-sm border rounded m-1 p-1">
            <b>Note # ${i+1}</b><br>
            <b>Title : </b>${e.title}<br>
            <b>Description : </b>${e.description}<br>
            <button type="button" id="${i}" class="btn btn-sm btn-outline-danger" onclick="deleteNote(this.id)">Delete</button>
        </div>`;
    });
}
function deleteNote(index) {
    console.log(index);
    const previousNotes = localStorage.getItem("notes");
    if(previousNotes == null){
        myArr = [];
    }else{
        myArr = JSON.parse(previousNotes);
    }
    myArr.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(myArr));
    showNotes();        
}