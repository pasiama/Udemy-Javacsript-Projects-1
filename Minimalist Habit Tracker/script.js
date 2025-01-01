const habitForm = document.getElementById('habitForm');
const habitNameInput = document.getElementById('habitName');
const habitGrid = document.getElementById('habitGrid');
const quote = document.getElementById('quote');

let habits = JSON.parse(localStorage.getItem('habits')) || [];

// Motivational Quotes
const quotes = [
  "Consistency is the key to success!",
  "Small steps lead to big changes.",
  "Success is the sum of small efforts repeated daily.",
  "Stay focused, stay committed.",
];

// Add a new habit
habitForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const habitName = habitNameInput.value.trim();
  if (!habitName) return;

  const newHabit = {
    id: Date.now(),
    name: habitName,
    streak: 0,
  };

  habits.push(newHabit);
  localStorage.setItem('habits', JSON.stringify(habits));
  habitNameInput.value = '';
  renderHabits();
});

// Render habits
const renderHabits = () => {
  habitGrid.innerHTML = '';
  habits.forEach((habit) => {
    const habitDiv = document.createElement('div');
    habitDiv.classList.add('habit');
    habitDiv.innerHTML = `
      <h3>${habit.name}</h3>
      <p class="streak">Streak: ${habit.streak} days</p>
      <button class="button" onclick="incrementStreak(${habit.id})">+1 Day</button>
      <button class="delete" onclick="deleteHabit(${habit.id})">Delete</button>
    `;
    habitGrid.appendChild(habitDiv);
  });
};

// Increment streak
const incrementStreak = (id) => {
  habits = habits.map((habit) =>
    habit.id === id ? { ...habit, streak: habit.streak + 1 } : habit
  );
  localStorage.setItem('habits', JSON.stringify(habits));
  renderHabits();
};

// Delete a habit
const deleteHabit = (id) => {
  habits = habits.filter((habit) => habit.id !== id);
  localStorage.setItem('habits', JSON.stringify(habits));
  renderHabits();
};

// Update motivational quote
const updateQuote = () => {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  quote.textContent = randomQuote;
};

// Initial render
renderHabits();
updateQuote();
