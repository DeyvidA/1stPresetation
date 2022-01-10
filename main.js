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
    this.tareas.splice(value, 1);
  }
  deleteAll(){
    this.tareas = [];
    this.tareasCompletadas = [];
  }
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
  const list = tareaDelHogar.tareas.map((tareaDelHogar, index) => {
    return `<li id="item_${index}"><span class='algo' onclick="taskCompleted(item_${index})"></span>${tareaDelHogar}</li>`;
  });
  elementList.innerHTML = list.join('');
}

function showDataComplete(){
  const elementList = document.getElementById('taskCompleted-ul');
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
// var list = document.querySelector('ul');
// list.addEventListener('click', function(ev) {
//   if (ev.target.tagName === 'LI') {
//     let item = ev.target.classList.toggle('checked');
//     let value = ev.target.innerHTML;
    
//     if(item){

//       tareaDelHogar.deleteTask(value); 
//       console.log(value);
//     }
//   }
  
// });

// function taskCompleted(indexItem){
//   let algo = document.getElementById('indexItem').value;
//   console.log(indexItem)
//   let dropItem = tareaDelHogar.deleteTask(indexItem);

//   showData();
//   showDataComplete();

// }

function taskCompleted(indexItem){

  let droop = indexItem.innerText; 
  console.log(droop)
  let dropItem = tareaDelHogar.deleteTask(droop);
  showData();
  showDataComplete();

}

{/* <span class='algo' onclick="taskCompleted(item_${index})">✔</span>$ */}

showData();
showDataComplete();

