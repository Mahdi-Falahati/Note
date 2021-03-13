// event listenrs
function eventListners() {
    // event get note from textArea
    const btn = document.querySelector("#btn");
    btn.addEventListener("click", getNote);
    // event for removing note
    const btnRemove = document.querySelector('#note');
    btnRemove.addEventListener("click", removeNoteFromNoteList)

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

}

// remove a note from note list
function removeNoteFromNoteList(event) {

    // if in tag event in class list  contains 'delete' get that elemnt
    if (event.target.classList.contains("delete")) {

        //remove item on Notelist
        // get a tag and acsess to father a <li> finaly remove li tag 
        event.target.parentElement.remove();

    }

}