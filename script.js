
// ===============================
// Lógica de la tabla de tareas
// ===============================

// Lista de tareas de ejemplo
const tasks = [
  { name: 'Corte tela blanca', state: 'En Proceso', order: '0957746KJLY', date: '24.12.2020', time: '11:16 AM' },
  { name: 'Confeccion Tela azul', state: 'Pendiente', order: '0957746KJLY', date: '24.12.2020', time: '11:16 AM' },
  { name: 'Estampado enfermera', state: 'Sin Iniciar', order: '0957746KJLY', date: '24.12.2020', time: '11:16 AM' },
  { name: 'Despacho de producto', state: 'En Proceso', order: '0957746KJLY', date: '24.12.2020', time: '11:16 AM' },
  { name: 'Corte tela azul', state: 'Pendiente', order: '0957746KJLY', date: '24.12.2020', time: '11:16 AM' },
  { name: 'Confeccion tela morada', state: 'En Proceso', order: '0957746KJLY', date: '24.12.2020', time: '11:16 AM' },
  { name: 'Corte tela verde', state: 'En Proceso', order: '0957746KJLY', date: '24.12.2020', time: '11:16 AM' },
];

// Relación entre el estado y la clase CSS del badge
const stateClass = {
  'En Proceso': 'badge-proceso',
  'Pendiente': 'badge-pendiente',
  'Sin Iniciar': 'badge-iniciar',
};

// Número de filas por página
const rowsPerPage = 5;
let currentPage = 1;

// Función para renderizar la tabla de tareas según la página actual
function renderTable() {
  const tbody = document.getElementById('tasks-body');
  tbody.innerHTML = '';
  const start = (currentPage - 1) * rowsPerPage;
  const end = start + rowsPerPage;
  const pageTasks = tasks.slice(start, end);
  pageTasks.forEach(task => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><input type="checkbox"></td>
      <td>${task.name}</td>
      <td><span class="badge ${stateClass[task.state]}">${task.state}</span></td>
      <td>${task.order}</td>
      <td>${task.date}<br><span style="font-size:0.9em;color:#bbb;">${task.time}</span></td>
      <td>...</td>
    `;
    tbody.appendChild(tr);
  });
  // Actualiza la paginación
  document.getElementById('page-num').textContent = currentPage;
  document.getElementById('page-total').textContent = Math.ceil(tasks.length / rowsPerPage);
}

// Evento para ir a la página anterior
document.getElementById('prev-page').onclick = function() {
  if (currentPage > 1) {
    currentPage--;
    renderTable();
  }
};

// Evento para ir a la página siguiente
document.getElementById('next-page').onclick = function() {
  if (currentPage < Math.ceil(tasks.length / rowsPerPage)) {
    currentPage++;
    renderTable();
  }
};

// Evento para cambiar de tab (filtro por estado)
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', function() {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    this.classList.add('active');
    // Aquí puedes filtrar las tareas según el tab seleccionado
    // Por ahora solo cambia el tab activo visualmente
  });
});

// Renderiza la tabla al cargar la página
renderTable();
