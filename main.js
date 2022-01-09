// Se crea lista de Tareas
class taskList {
  constructor({
    // lista, //Nombre de la lista
    tareas = [], // Tareas pendientes
    tareasCompletadas = [], //Tereas Completadas
  }) {
    // this.lista = lista;
    this.tareas = tareas;
    this.tareasCompletadas = tareasCompletadas;
  }
  agregarTarea(newTarea){
    this.tareas.push(newTarea);
  }
  deleteTask(element){
    this.tareasCompletadas.push(element);
    let value = this.tareas.indexOf(element);
    this.tareas.splice(value);
  }
  deleteAll(){
    this.tareas = [];
    this.tareasCompletadas = [];
  }
}


// read two numbers
function readNumber(){
  
}

const tareaDelHogar = new taskList({
  // lista: "Tareas del Hogar",
  tareas: [
    "Clean bathroom",
    "wash restroom",
    "wash clothes",
    "clean the house",
    "destroid the universe"
  ],
});

// Show task in html
function showData(){
  const elementList = document.getElementById('taskList-ul');
  const list = tareaDelHogar.tareas.map(tareaDelHogar => {
    return `<li>${tareaDelHogar}</li>`;
  });
  elementList.innerHTML = list.join('');
}


function showDataCompleted(){
  const elementList = document.getElementById('taskCompleted');
  const list = tareaDelHogar.tareasCompletadas.map(tareaDelHogar => {
    return `<li>${tareaDelHogar}</li>`;
  });
  elementList.innerHTML = list.join('');
}


// add new task.
function newElement(){
  const newTask = document.getElementById('labelTask').value;
  if(newTask === ''){
    alert('You need write Something');
  } else {
    tareaDelHogar.agregarTarea(newTask);
    document.getElementById('labelTask').value = '';
    showData()
  }
}

// Select list element
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);



// no funciona
// var list = document.querySelector('ul');
// list.addEventListener('click', function(ev) {
//     this.parentElement = tareaDelHogar.deleteTask(this);
//     console.log(tareaDelHogar.tareasCompletadas)
//     showData();
//     showDataCompleted();
// });

// mark task completed.

showData();

