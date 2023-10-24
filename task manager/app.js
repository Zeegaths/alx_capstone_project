// app.js

import {taskList, displayTask, editTask, deleteTask} from './task.js';
import {setReminder} from './reminder.js';

// select the add task button
const addTaskButton = document.getElementById('add-task');

// listen for a click event on the add task button
addTaskButton.addEventListener('click', () => {
    const task = document.getElementById('task').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    // check if inputs are not empty
    if (task.trim() && date.trim() && time.trim()) {
        const newTask = {
            task,
            date,
            time,
            done: false,
        };

        // add task to taskList array
        taskList.push(newTask);

        // display task in task list
        displayTask(newTask);

        // set reminder
        setReminder(task, date, time);
    } else {
        alert('Please fill out all fields.');
    }
});

// handle editing tasks
document.querySelector('.task-list').addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-update')) {
        const task = e.target.parentElement.parentElement;
        editTask(task);
    }
});

// handle deleting tasks
document.querySelector('.task-list').addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-danger')) {
        const task = e.target.parentElement.parentElement;
        deleteTask(task);
    }
});