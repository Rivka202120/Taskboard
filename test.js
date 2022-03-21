const inpNameTask = document.getElementById("nameTask");
const inpDateTask = document.getElementById("dateTask");
const inpTimeTask = document.getElementById("timeTask");
const btnAddTask = document.getElementById("addTask");
const btnResetTask = document.getElementById("resetTask");
const listTasks = document.getElementById("tasks");

// arr & localStorage
let arrTasks = [];
if (!localStorage.getItem("arr")) {
    localStorage.setItem("arr", JSON.stringify(arrTasks));
}
else {
    arrTasks = JSON.parse(localStorage.getItem("arr"));
    for (const task of arrTasks) {
        addNote(task);
    };
}

// dom
function addNote(task) {
    const divNote = document.createElement("div");
    const nameT = document.createElement("p");
    const dateT = document.createElement("h6");
    const timeT = document.createElement("h6");
    const btnDel = document.createElement("button");
    const casing = document.createElement("div");
    const dateWrap = document.createElement("div");

    divNote.className = "note";
    divNote.classList.add("fade-in");
    divNote.style.backgroundImage = "url(images/imgNote.png)";
    nameT.className = "nameT";
    dateT.textContent = task.date;
    dateT.className = "dateT";
    timeT.className = "timeT";
    timeT.textContent = task.time;
    btnDel.className = "delete";
    casing.textContent = task.description;
    casing.className = "casing"
    dateWrap.className = "dateWrap";
    btnDel.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
  </svg>`;

  listTasks.appendChild(divNote);
  divNote.appendChild(btnDel);
  divNote.appendChild(nameT);
  divNote.appendChild(dateWrap);
  dateWrap.appendChild(dateT);
  dateWrap.appendChild(timeT);
  nameT.appendChild(casing);

  inpNameTask.value = "";
  inpDateTask.value = "";
  inpTimeTask.value = "";

  // delete
  btnDel.addEventListener("click", function (e) {
    arrTasks = JSON.parse(localStorage.getItem("arr"));
    arrTasks = arrTasks.filter(function (s) {
        return s.description != e.currentTarget.parentElement.querySelector('.casing').textContent;
    })
    localStorage.setItem("arr", JSON.stringify(arrTasks));
    e.currentTarget.parentElement.remove();
})
}

// onSubmit
function addNoteTask() {
    var task = { description: inpNameTask.value, date: inpDateTask.value, time: inpTimeTask.value };
    addNote(task);
    
    inpNameTask.value = "";
    inpDateTask.value = "";
    inpTimeTask.value = "";

    // arr & localStorage
    arrTasks.push(task);
    localStorage.setItem("arr", JSON.stringify(arrTasks));
}

// reset
btnResetTask.addEventListener("click", function () {
    inpNameTask.value = "";
    inpDateTask.value = "";
    inpTimeTask.value = "";
})

