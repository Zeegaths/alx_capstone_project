import { validateForm } from './file.js'
const taskBtn = document.querySelector('#add-task');
taskBtn.addEventListener('click', function() {
    validateForm()
})