

/* Navbar toggle section*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x'); // Toggle the "X" icon
    navbar.classList.toggle('active'); // Toggle the "active" class on the navbar
};


/* Activating  sections */
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    /* Navbar */

/* Scroll */

    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

};


/**Form validation */
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let fullName = document.getElementById('fullName').value.trim();
    let email = document.getElementById('email').value.trim();
    let mobile = document.getElementById('mobile').value.trim();
    let subject = document.getElementById('subject').value.trim();
    let message = document.getElementById('message').value.trim();

    if (!fullName || !email || !mobile || !subject || !message) {
        alert('Please fill in all the fields');
        return;
    }

    if (!/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(fullName)) {
        alert('Please enter a valid full name');
        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert('Please enter a valid email address');
        return;
    }

    if (!/^\d{10}$/.test(mobile)) {
        alert('Please enter a valid 10-digit mobile number');
        return;
    }

    if (!/^[a-zA-Z0-9 ]+$/.test(subject)) {
        alert('Please enter a valid email subject');
        return;
    }

    if (!/^[a-zA-Z0-9,.!? ]+$/.test(message)) {
        alert('Please enter a valid message');
        return;
    }

    // Your form submission logic goes here
    alert('Form submitted successfully');
});






