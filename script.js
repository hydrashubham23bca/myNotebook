let notes = [];
let currentNoteIndex;

const notesList = document.getElementById("notes-list");
const noteModal = document.getElementById("note-modal");
const noteText = document.getElementById("note-text");

const addNote = () => {
    currentNoteIndex = undefined;
    noteText.value = "";
    openModal();
};

const saveNote = () => {
    const noteContent = noteText.value.trim();

    if (noteContent === "") {
        alert("Note content cannot be empty!");
        return;
    }

    if (currentNoteIndex !== undefined) {
        // Editing existing note
        notes[currentNoteIndex] = noteContent;
    } else {
        // Adding new note
        notes.push(noteContent);
    }

    renderNotes();
    closeModal();
};

const editNote = (index) => {
    currentNoteIndex = index;
    noteText.value = notes[index];
    openModal();
};

const deleteNote = (index) => {
    notes.splice(index, 1);
    renderNotes();
};

const renderNotes = () => {
    notesList.innerHTML = "";
    notes.forEach((note, index) => {
        const noteElement = document.createElement("div");
        noteElement.className = "note";
        noteElement.innerHTML = `<p>${note}</p>
                                <button onclick="editNote(${index})">Edit</button>
                                <button onclick="deleteNote(${index})">Delete</button>`;
        notesList.appendChild(noteElement);
    });
};

const openModal = () => {
    noteModal.style.display = "block";
};

const closeModal = () => {
    noteModal.style.display = "none";
};

window.onclick = (event) => {
    if (event.target === noteModal) {
        closeModal();
    }
};

window.onload = renderNotes;
