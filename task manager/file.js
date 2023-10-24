const taskInput = document.querySelector('#task');
const dateInput = document.querySelector('#date');
const timeInput = document.querySelector('#time');



const validateForm = () => {
const inputs = document.querySelectorAll('input');

if(taskInput.value === '' || dateInput.value === '' || timeInput.value === '')
{
    alert("Please fill all the fields")
}
}




export {
    validateForm
}