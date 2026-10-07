// ==================== DATOS DEL HORARIO ====================

// Lunes a Viernes
const weekdayData = [
  { hora: '6:00 - 6:30', tipo: 'rutina', label: 'Despertar / Aseo personal' },
  { hora: '6:30 - 7:00', tipo: 'rutina', label: 'Desayuno' },
  { hora: '7:00 - 8:00', tipo: 'tesis', label: 'TESIS (Bloque 1)' },
  { hora: '8:00 - 9:00', tipo: 'aleman', label: 'ALEMÁN (Bloque 1)' },
  { hora: '9:00 - 10:00', tipo: 'aleman', label: 'ALEMÁN (Bloque 2)' },
  { hora: '10:00 - 10:15', tipo: 'descanso', label: 'Descanso' },
  { hora: '10:15 - 11:15', tipo: 'aleman', label: 'ALEMÁN (Bloque 3)' },
  { hora: '11:15 - 12:15', tipo: 'aleman', label: 'ALEMÁN (Bloque 4)' },
  { hora: '12:15 - 13:30', tipo: 'libre', label: 'Almuerzo' },
  { hora: '13:30 - 14:15', tipo: 'tesis', label: 'TESIS (Bloque 2)' },
  { hora: '14:15 - 14:30', tipo: 'descanso', label: 'Descanso' },
  { hora: '14:30 - 15:15', tipo: 'tesis', label: 'TESIS (Bloque 3)' },
  { hora: '15:15 - 15:30', tipo: 'descanso', label: 'Descanso' },
  { hora: '15:30 - 16:15', tipo: 'tesis', label: 'TESIS (Bloque 4)' },
  { hora: '16:15 - 17:15', tipo: 'delegar', label: 'DELEGAR (Aseo/Compras)' },
  { hora: '17:15 - 18:30', tipo: 'libre', label: 'Tiempo libre' },
  { hora: '18:30 - 19:00', tipo: 'rutina', label: 'Cena' },
  { hora: '19:00 - 20:00', tipo: 'ejercicio', label: 'EJERCICIO' },
  { hora: '20:00 - 21:00', tipo: 'libre', label: 'Tiempo libre' },
  { hora: '21:00', tipo: 'rutina', label: 'Cierre / Modo avión' }
];

// Sábado
const saturdayData = [
  { hora: '6:00 - 6:30', tipo: 'rutina', label: 'Despertar / Aseo personal' },
  { hora: '6:30 - 7:00', tipo: 'rutina', label: 'Desayuno' },
  { hora: '7:00 - 8:00', tipo: 'tesis', label: 'TESIS (Bloque 1)' },
  { hora: '8:00 - 9:00', tipo: 'tesis', label: 'TESIS (Bloque 2)' },
  { hora: '9:00 - 12:30', tipo: 'aleman', label: 'ALEMÁN (Clase presencial)' },
  { hora: '12:30 - 13:30', tipo: 'libre', label: 'Almuerzo' },
  { hora: '13:30 - 14:15', tipo: 'tesis', label: 'TESIS (Bloque 3)' },
  { hora: '14:15 - 14:30', tipo: 'descanso', label: 'Descanso' },
  { hora: '14:30 - 15:15', tipo: 'tesis', label: 'TESIS (Bloque 4)' },
  { hora: '15:15 - 16:00', tipo: 'delegar', label: 'DELEGAR (Compras)' },
  { hora: '16:00 - 18:00', tipo: 'libre', label: 'Tiempo libre' },
  { hora: '18:00 - 18:30', tipo: 'rutina', label: 'Cena' },
  { hora: '19:00 - 20:00', tipo: 'ejercicio', label: 'EJERCICIO' },
  { hora: '20:00 - 21:00', tipo: 'libre', label: 'Tiempo libre' },
  { hora: '21:00', tipo: 'rutina', label: 'Cierre / Modo avión' }
];

// Domingo
const sundayData = [
  { hora: '6:00 - 6:30', tipo: 'rutina', label: 'Despertar / Aseo personal' },
  { hora: '6:30 - 7:00', tipo: 'rutina', label: 'Desayuno' },
  { hora: '7:00 - 8:00', tipo: 'tesis', label: 'Revisión de estilo (Tesis)' },
  { hora: '8:00 - 9:00', tipo: 'tesis', label: 'Revisión de coherencia (Tesis)' },
  { hora: '9:00 - 10:00', tipo: 'aleman', label: 'ALEMÁN (Estudio autónomo)' },
  { hora: '10:00 - 11:00', tipo: 'aleman', label: 'ALEMÁN (Estudio autónomo)' },
  { hora: '11:00 - 11:15', tipo: 'descanso', label: 'Descanso' },
  { hora: '11:15 - 12:15', tipo: 'aleman', label: 'ALEMÁN (Estudio autónomo)' },
  { hora: '12:15 - 13:30', tipo: 'libre', label: 'Almuerzo' },
  { hora: '13:30 - 15:00', tipo: 'tesis', label: 'TESIS (Recuperación)' },
  { hora: '15:00 - 18:00', tipo: 'libre', label: 'Descanso' },
  { hora: '18:00 - 18:30', tipo: 'rutina', label: 'Cena' },
  { hora: '19:00 - 20:00', tipo: 'ejercicio', label: 'EJERCICIO' },
  { hora: '20:00 - 21:00', tipo: 'libre', label: 'Tiempo libre' },
  { hora: '21:00', tipo: 'rutina', label: 'Cierre / Modo avión' }
];

// ==================== FUNCIONES ====================

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

  const weekendDays = [
    { key: 'sabado', name: 'Sábado', date: '12 OCT', data: saturdayData },
    { key: 'domingo', name: 'Domingo', date: '13 OCT', data: sundayData }
  ];

  weekendDays.forEach((day, dayIndex) => {
    const column = document.createElement('div');
    column.className = 'day-column';

    const header = document.createElement('div');
    header.className = 'day-header';
    header.innerHTML = `<h2>${day.name}</h2><span>${day.date}</span>`;
    column.appendChild(header);

    day.data.forEach((item, itemIndex) => {
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

// Cuenta regresiva al 22 de octubre
function updateCountdown() {
  const hoy = new Date();
  const entrega = new Date(hoy.getFullYear(), 9, 22); // Mes 9 = octubre
  const diff = Math.ceil((entrega - hoy) / (1000 * 60 * 60 * 24));
  const countdownEl = document.getElementById('countdown');
  if (diff > 0) {
    countdownEl.innerHTML = `⏳ Faltan <strong>${diff}</strong> días para la entrega: 22 de octubre`;
  } else if (diff === 0) {
    countdownEl.innerHTML = `🔥 ¡HOY ES EL DÍA! Entrega: 22 de octubre`;
  } else {
    countdownEl.innerHTML = `🎉 ¡Entrega completada!`;
  }
}

// Inicializar
renderWeekday();
renderWeekend();
loadState();
updateCountdown();
