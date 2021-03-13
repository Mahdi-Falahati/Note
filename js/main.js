// event listenrs
function eventListners() {
 // event get note from textArea
    const btn = document.querySelector("#btn");
    btn.addEventListener("click", getNote);

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