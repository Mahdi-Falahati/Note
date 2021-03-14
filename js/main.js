// event listenrs
function eventListners() {
    // event get note from textArea
    const btn = document.querySelector("#btn");
    btn.addEventListener("click", getNote);

    // event for removing note
    const btnRemove = document.querySelector('#note');
    btnRemove.addEventListener("click", removeNoteFromNoteList)

    // loead note from local storage
    document.addEventListener("DOMContentLoaded", loadeNOrteFromLocalStorage)

}
eventListners();


//functions

// get note from TextArea and create tag li and insert li to page
function getNote(event) {

    event.preventDefault();

    // get data from TextArea
    const note = document.querySelector("#inputnote").value;

    // create li 
    const li = document.createElement("li");
    let content = document.createTextNode(note);
    li.appendChild(content);


    // get ul for inserting li created to page
    const ul = document.querySelector("#note");
    ul.appendChild(li);

    // create btn for remove note
    const btnRemove = document.createElement("a");
    btnRemove.setAttribute("class", "delete");
    btnRemove.appendChild(document.createTextNode("X"));
    li.appendChild(btnRemove);

    //delete alarm li
    document.querySelector("#alarm").innerHTML = " ";

    // reset textArea
    document.querySelector("#inputnote").value = " ";

    addNoteToLoacalStorage(note);

}

// remove a note from note list
function removeNoteFromNoteList(event) {

    // if in tag event in class list  contains 'delete' get that elemnt
    if (event.target.classList.contains("delete")) {

        //remove item on Notelist
        // get a tag and acsess to father a <li> finaly remove li tag 
        event.target.parentElement.remove();

    }

    // remove note from localstorage
    removeNoteFromLocalStorage(event.target.parentElement.textContent)

}

// cheek content on local storage
function cheekNotesExistOnLocalStorage() {
    let notes;

    //get from local storage
    let gfls = localStorage.getItem("notes");

    // if key notes on locla storage is epmpty return empty array
    if (gfls == null) {

        notes = [];

    } else {

        //if key notes on locla storage is not epmpty return value notes with array
        notes = JSON.parse(gfls);

    }

    return notes;
}

// add textArea data to local storage 
function addNoteToLoacalStorage(note) {

    // cheeking local storage content 
    const notes = cheekNotesExistOnLocalStorage();

    // add new note to array
    notes.push(note);

    // change notes array to notes string for adding to lacal storage
    // add new notes to local storage
    localStorage.setItem("notes", JSON.stringify(notes));

}

// loading note from locla storage
function loadeNOrteFromLocalStorage() {

    // cheeking local storage content
    const notes = cheekNotesExistOnLocalStorage();

    //get data to local storage and loop on this content
    notes.forEach(function(note) {

        // create li 
        const li = document.createElement("li");
        let content = document.createTextNode(note);
        li.appendChild(content);


        // get ul for inserting li created to page
        const ul = document.querySelector("#note");
        ul.appendChild(li);

        // create btn for remove note
        const btnRemove = document.createElement("a");
        btnRemove.setAttribute("class", "delete");
        btnRemove.appendChild(document.createTextNode("X"));
        li.appendChild(btnRemove);

        //delete alarm li
        document.querySelector("#alarm").innerHTML = " ";

    });

}

//remove note from local storage
function removeNoteFromLocalStorage(noteContent) {

    // cut X from end of note
    const deleteNote = noteContent.substring(0, noteContent.length - 1);

    //get notes from local storage 
    const notesFls = cheekNotesExistOnLocalStorage();

    // cheek note delete on arraies note
    notesFls.forEach(function(element, index) {

        //find note for delete and deleting on array
        if (deleteNote == element) {

            // have new array and deleted select item 
            notesFls.splice(index, 1);

        }

    });

    //set new array to local storage
    localStorage.setItem("notes", JSON.stringify(notesFls))

}
