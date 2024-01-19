const addBtn = document.querySelector('#addBtn');
// console.log(addBtn);
const main = document.querySelector('#main');
// console.log(main);

const saveNotes = () => {
    const notes = document.querySelectorAll(".note textarea");
    console.log(notes);
    const data = [];
    notes.forEach(
        (note) => {
            data.push(note.value)
        })
    // console.log(data);
    localStorage.setItem("notes", JSON.stringify(data))
}

addBtn.addEventListener("click", () => {
    console.log("button is working");
    addNote()
})

// < div class="note" >
//         <div class="tool">
//             <i class="fas fa-save"></i>
//             <i class="fas fa-trash"></i>
//         </div>
//         <textarea></textarea>
//     </div >

const addNote = () => {
    const note = document.createElement("div");
    note.classList.add("note");
    note.innerHTML = `
             <div class="tool">
                     <i class="save fas fa-save"></i>
                     <i class="delet fas fa-trash"></i>                 
                 </div>
                 <textarea></textarea>
             </div>
    `;
    note.querySelector('.delet').addEventListener("click", () => {
        note.remove()
        saveNotes()
    })
    note.querySelector('.save').addEventListener("click", function () {
        saveNotes()
    })
    main.append(note);
    saveNotes()

}
(function () {
    const lsNotes = JSON.parse(localStorage.getItem("notes"));
    lsNotes.forEach((lsNotes) => {  
            addNote()
    })
})()