document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
  
    form.addEventListener("submit", function (event) {
      let valid = true;
  
      if (nameInput.value.trim() === "") {
        valid = false;
        alert("Name cannot be empty");
        nameInput.focus();
      } else if (emailInput.value.trim() === "") {
        valid = false;
        alert("Email cannot be empty");
        emailInput.focus();
      } else if (messageInput.value.trim() === "") {
        valid = false;
        alert("Message cannot be empty");
        messageInput.focus();
      }
  
      if (!valid) {
        event.preventDefault(); // Prevent form submission if validation fails
      }
    });
  });
  