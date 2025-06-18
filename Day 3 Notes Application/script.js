const btnEl = document.getElementById("btn");
const appEl = document.getElementById("App");

getNotes().forEach((note) => {
    const noteE1 = notebox(note.id, note.content);
    appEl.insertBefore(noteE1, btnEl);
});

function notebox(id, content) {
    const element = document.createElement("textarea");
    element.classList.add = "note";
    element.placeholder = "Empty Note";
    element.value = content;

    element.addEventListener("dblclick", () => {
        const warning = confirm("Do you want to delete this note?");
        if (warning) {
            dlt(id, element);
        }
    });

    element.addEventListener("input", () => {
        updateNote(id, element.value);
    });

    return element;
}

function dlt(id, element) {
    let notearr = getNotes();
    notearr = notearr.filter((note) => note.id != id);
    appEl.removeChild(element);
    saveNote(notearr);
}

function updateNote(id, content) {
    let notearr = getNotes();
    const target = notearr.find((note) => note.id == id);
    target.content = content;
    saveNote(notearr);
}

function creatbox() {
    let notearr = getNotes();
    const note = {
        id: Date.now(),
        content: "",
    };
    let noteE1 = notebox(note.id, note.content);
    appEl.insertBefore(noteE1, btnEl);

    notearr.push(note);
    saveNote(notearr);
}

function saveNote(notes) {
    localStorage.setItem("note-app", JSON.stringify(notes));
}

function getNotes() {
    return JSON.parse(localStorage.getItem("note-app") || "[]");
}

btnEl.addEventListener("click", creatbox);
