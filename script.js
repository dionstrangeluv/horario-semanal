// Datos del horario (Lunes a Viernes)
const weekdayData = [
  { hora: '7:00 - 8:00', tipo: 'rutina', label: 'Despertar / Desayuno' },
  { hora: '8:00 - 8:45', tipo: 'tesis', label: 'TESIS (Bloque 1)' },
  { hora: '8:45 - 9:00', tipo: 'descanso', label: 'Descanso' },
  { hora: '9:00 - 9:45', tipo: 'tesis', label: 'TESIS (Bloque 2)' },
  { hora: '9:45 - 10:00', tipo: 'descanso', label: 'Descanso' },
  { hora: '10:00 - 10:45', tipo: 'tesis', label: 'TESIS (Bloque 3)' },
  { hora: '10:45 - 11:00', tipo: 'descanso', label: 'Descanso' },
  { hora: '11:00 - 12:00', tipo: 'delegar', label: 'DELEGAR (Aseo/Compras)' },
  { hora: '12:00 - 13:30', tipo: 'libre', label: 'Almuerzo' },
  { hora: '13:30 - 14:15', tipo: 'aleman', label: 'ALEMÁN (45 min)' },
  { hora: '14:15 - 14:30', tipo: 'descanso', label: 'Descanso' },
  { hora: '14:30 - 15:15', tipo: 'tesis', label: 'TESIS (Bloque 4)' },
  { hora: '15:15 - 15:30', tipo: 'descanso', label: 'Descanso' },
  { hora: '15:30 - 16:15', tipo: 'tesis', label: 'TESIS (Bloque 5)' },
  { hora: '16:15 - 17:30', tipo: 'libre', label: 'Ejercicio / Aseo' },
  { hora: '17:30 - 18:30', tipo: 'rutina', label: 'Cena' },
  { hora: '18:30 - 20:00', tipo: 'libre', label: 'Tiempo libre' },
  { hora: '20:00 - 21:00', tipo: 'rutina', label: 'Repaso ligero' },
  { hora: '21:00', tipo: 'rutina', label: 'Cierre / Modo avión' }
];

// Datos del fin de semana
const weekendData = {
  sabado: [
    { hora: '7:00 - 8:00', tipo: 'rutina', label: 'Despertar / Desayuno' },
    { hora: '8:00 - 8:45', tipo: 'tesis', label: 'TESIS (Bloque 1)' },
    { hora: '8:45 - 9:00', tipo: 'descanso', label: 'Descanso' },
    { hora: '9:00 - 9:45', tipo: 'tesis', label: 'TESIS (Bloque 2)' },
    { hora: '9:45 - 10:00', tipo: 'descanso', label: 'Descanso' },
    { hora: '10:00 - 10:45', tipo: 'tesis', label: 'TESIS (Bloque 3)' },
    { hora: '10:45 - 11:00', tipo: 'descanso', label: 'Descanso' },
    { hora: '11:00 - 12:00', tipo: 'delegar', label: 'DELEGAR' },
    { hora: '12:00 - 13:30', tipo: 'libre', label: 'Almuerzo' },
    { hora: '13:30 - 13:45', tipo: 'aleman', label: 'ALEMÁN (15 min)' },
    { hora: '13:45 - 14:30', tipo: 'tesis', label: 'TESIS (Bloque 4)' },
    { hora: '14:30 - 14:45', tipo: 'descanso', label: 'Descanso' },
    { hora: '14:45 - 15:30', tipo: 'tesis', label: 'TESIS (Bloque 5)' },
    { hora: '15:30 - 17:30', tipo: 'libre', label: 'Ejercicio / Libre' },
    { hora: '17:30 - 18:30', tipo: 'rutina', label: 'Cena' },
    { hora: '18:30 - 21:00', tipo: 'libre', label: 'Tiempo libre' },
    { hora: '21:00', tipo: 'rutina', label: 'Cierre' }
  ],
  domingo: [
    { hora: '7:00 - 8:00', tipo: 'rutina', label: 'Despertar / Desayuno' },
    { hora: '8:00 - 9:00', tipo: 'tesis', label: 'Revisión de estilo' },
    { hora: '9:00 - 10:00', tipo: 'tesis', label: 'Revisión de coherencia' },
    { hora: '10:00 - 11:00', tipo: 'aleman', label: 'ALEMÁN (45 min)' },
    { hora: '11:00 - 13:30', tipo: 'libre', label: 'Libre / Almuerzo' },
    { hora: '13:30 - 15:00', tipo: 'tesis', label: 'TESIS (Recuperación)' },
    { hora: '15:00 - 21:00', tipo: 'libre', label: 'Descanso' },
    { hora: '21:00', tipo: 'rutina', label: 'Cierre' }
  ]
};

const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];

// Renderizar Lunes a Viernes
function renderWeekday() {
  const container = document.getElementById('weekdayGrid');
  container.innerHTML = '';

  days.forEach((day, dayIndex) => {
    const column = document.createElement('div');
    column.className = 'day-column';

    const header = document.createElement('div');
    header.className = 'day-header';
    header.innerHTML = `<h2>${day}</h2><span>${7 + dayIndex} OCT</span>`;
    column.appendChild(header);

    weekdayData.forEach((item, itemIndex) => {
      const card = document.createElement('div');
      card.className = `card ${item.tipo}`;
      card.dataset.id = `wd-${dayIndex}-${itemIndex}`;
      card.innerHTML = `
        <div class="time">${item.hora}</div>
        <div class="label">${item.label}</div>
      `;
      card.addEventListener('click', () => toggleComplete(card));
      column.appendChild(card);
    });

    container.appendChild(column);
  });
}

// Renderizar Fin de Semana
function renderWeekend() {
  const container = document.getElementById('weekendGrid');
  container.innerHTML = '';

  ['sabado', 'domingo'].forEach((dayKey, dayIndex) => {
    const column = document.createElement('div');
    column.className = 'day-column';

    const header = document.createElement('div');
    header.className = 'day-header';
    const dayName = dayKey.charAt(0).toUpperCase() + dayKey.slice(1);
    const dayNum = dayIndex === 0 ? 12 : 13;
    header.innerHTML = `<h2>${dayName}</h2><span>${dayNum} OCT</span>`;
    column.appendChild(header);

    weekendData[dayKey].forEach((item, itemIndex) => {
      const card = document.createElement('div');
      card.className = `card ${item.tipo}`;
      card.dataset.id = `we-${dayIndex}-${itemIndex}`;
      card.innerHTML = `
        <div class="time">${item.hora}</div>
        <div class="label">${item.label}</div>
      `;
      card.addEventListener('click', () => toggleComplete(card));
      column.appendChild(card);
    });

    container.appendChild(column);
  });
}

// Toggle completado
function toggleComplete(card) {
  card.classList.toggle('completed');
  saveState();
  updateProgress();
}

// Guardar estado
function saveState() {
  const state = {};
  document.querySelectorAll('.card.completed').forEach(card => {
    state[card.dataset.id] = true;
  });
  localStorage.setItem('horarioTesisGrid', JSON.stringify(state));
}

// Cargar estado
function loadState() {
  const state = JSON.parse(localStorage.getItem('horarioTesisGrid') || '{}');
  document.querySelectorAll('.card').forEach(card => {
    if (state[card.dataset.id]) {
      card.classList.add('completed');
    }
  });
  updateProgress();
}

// Actualizar progreso
function updateProgress() {
  const allCards = document.querySelectorAll('.card');
  const completedCards = document.querySelectorAll('.card.completed');
  const percentage = allCards.length > 0 ? Math.round((completedCards.length / allCards.length) * 100) : 0;
  document.getElementById('progressText').textContent = percentage + '%';
  document.getElementById('progressFloat').style.background = percentage === 100 ? '#2ecc71' : '#111';
}

// Inicializar
renderWeekday();
renderWeekend();
loadState();
