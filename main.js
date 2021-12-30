// Se crea lista de Tareas
class taskList {
  constructor({
    lista, //Nombre de la lista
    tareas = [], // Tareas pendientes
    tareasCompletadas = [], //Tereas Completadas
  }) {
    this.lista = lista;
    this.tareas = tareas;
    this.tareasCompletadas = tareasCompletadas;
  }
  agregarTarea(newTarea){
    this.tareas.push(newTarea);
  }
  eliminarTarea(elemento){
    this.tareasCompletadas.push(elemento);
    let valor = this.tareas.indexOf(elemento);
    this.tareas.splice(valor);
  }
  eliminarTodo(){
    this.tareas = [];
    this.tareasCompletadas = [];
  }
}

const tareaDelHogar = new taskList({
  lista: "Tareas del Hogar",
  tareas: [
    "Limpiar el cuarto",
    "Lavar el bannio",
    "Lavar Ropa",
  ],
});

