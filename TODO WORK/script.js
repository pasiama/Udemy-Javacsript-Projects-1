/* script.js */
document.addEventListener('DOMContentLoaded', () => {
      const taskForm = document.getElementById('taskForm');
      const taskGrid = document.getElementById('taskGrid');
      const filters = document.querySelectorAll('[data-filter]');
      let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    
      // const renderTasks = (filter = 'all') => {
      //       taskGrid.innerHTML = '';
      //       const filteredTasks = tasks.filter(task => filter === 'all' || task.priority === filter);
      //       filteredTasks.forEach(task => {
      //             const taskDiv = document.createElement('div');
      //             taskDiv.classList.add('task');
      //             taskDiv.innerHTML = `
      //                   <h3>${task.title}</h3>
      //                   <p>${task.description}</p>
      //                   <p class="meta">${task.category} | ${task.priority}</p>
      //                   <button onclick='deleteTask(${task.id})'>Delete</button>
      //             `;
      //             taskGrid.appendChild(taskDiv);
      //       });
      // };
      const renderTasks = (filter = 'all') => {
            taskGrid.innerHTML = ''; // Clear the task grid
            const filteredTasks = tasks.filter(task => filter === 'all' || task.priority === filter);
        
            filteredTasks.forEach(task => {
                // Create the task div
                const taskDiv = document.createElement('div');
                taskDiv.classList.add('task');
        
                // Populate task content
                taskDiv.innerHTML = `
                    <h3>${task.title}</h3>
                    <p>${task.description}</p>
                    <p class="meta">${task.category} | ${task.priority}</p>
                `;
        
                // Create delete button
                const deleteButton = document.createElement('button');
                deleteButton.textContent = 'Delete';
                deleteButton.addEventListener('click', () => deleteTask(task.id)); // Attach the event listener
        
                // Append delete button to the taskDiv
                taskDiv.appendChild(deleteButton);
        
                // Add the taskDiv to the taskGrid
                taskGrid.appendChild(taskDiv);
            });
        };
        
      const addTask = (task) => {
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        renderTasks();
      };
    
      const deleteTask = (id) => {
        tasks = tasks.filter(task => task.id !== id);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        renderTasks();
      };
    
      taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const newTask = {
          id: Date.now().toString(),
          title: taskForm.taskTitle.value,
          description: taskForm.taskDescription.value,
          startDate: taskForm.startDate.value,
          endDate: taskForm.endDate.value,
          category: taskForm.category.value,
          priority: taskForm.priority.value
        };
        addTask(newTask);
        taskForm.reset();
      });
    
      filters.forEach(button => {
        button.addEventListener('click', () => renderTasks(button.dataset.filter));
      });
    
      renderTasks();
    });
    