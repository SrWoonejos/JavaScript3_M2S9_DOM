// assets/js/script.js

// Referencias a los elementos HTML
const agregaTareaButton = document.getElementById('agregaTareaButton');
const taskForm = document.getElementById('taskForm');
const nuevaTarea = document.getElementById('nuevaTarea');
const taskTableBody = document.getElementById('cuerpo-tabla');

let tareas = [
    { tarea: "Pintar la fachada de la casa" },
    { tarea: "Comprar comida para el perro" },
    { tarea: "Pagar la tarjeta de crédito" }
];

// Función para mostrar/ocultar el formulario
agregaTareaButton.addEventListener('click', () => {
    taskForm.style.display = taskForm.style.display === 'none' ? 'block' : 'none';
});

// Función para agregar una tarea a la tabla
taskForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevenir que el formulario se envíe

    const newTask = nuevaTarea.value.trim(); // Obtener el valor ingresado

    if (newTask !== '') {
        tareas.push({ tarea: newTask }); // Agregar la tarea al arreglo
        renderTasks(); // Actualizar la tabla
        nuevaTarea.value = ''; // Limpiar el formulario
        taskForm.style.display = 'none'; // Ocultar el formulario
    }

    const agregaTareaButton = document.getElementById('agregaTareaButton'); // Referencia al botón
    const taskForm = document.getElementById('taskForm'); // Referencia al formulario

    agregaTareaButton.addEventListener('click', () => {
    taskForm.style.display = taskForm.style.display === 'none' ? 'block' : 'none';

    taskForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevenir que el formulario se envíe por defecto
    
        const newTask = nuevaTarea.value.trim(); // Obtener el valor de la nueva tarea
    
        if (newTask !== '') {
            tareas.push({ tarea: newTask }); // Agregar la nueva tarea al arreglo
            renderTasks(); // Actualizar la tabla con las tareas
            taskInput.value = ''; // Limpiar el campo de entrada del formulario
            taskForm.style.display = 'none'; // Ocultar el formulario nuevamente
        }
    });
    
});

});

// Función para eliminar una tarea de la tabla
function deleteTask(index) {
    tareas.splice(index, 1); // Eliminar la tarea del arreglo
    renderTasks(); // Actualizar la tabla
}

// Función para renderizar las tareas en la tabla
function renderTasks() {
    taskTableBody.innerHTML = ''; // Limpiar la tabla

    tareas.forEach((task, index) => {
        const row = document.createElement('tr');

        const taskCell = document.createElement('td');
        taskCell.textContent = task.tarea;
        row.appendChild(taskCell);

        const actionsCell = document.createElement('td');
        const deleteButton = document.createElement('button');
        deleteButton.className = 'btn btn-danger';
        deleteButton.textContent = 'Finalizar';
        deleteButton.addEventListener('click', () => deleteTask(index));
        actionsCell.appendChild(deleteButton);
        row.appendChild(actionsCell);

        taskTableBody.appendChild(row);
    });
}

// Renderizar las tareas iniciales
renderTasks();

