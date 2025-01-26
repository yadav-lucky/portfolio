// Modal open/close functionality
const modal = document.getElementById("myModal");
const btn = document.getElementById("openModalBtn");
const span = document.getElementsByClassName("close-btn")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Form input handling for testing purposes
document.getElementById('formInputs').addEventListener('submit', function(event) {
    event.preventDefault();
    console.log('Form submitted');
    alert('Form submitted!');
});

// You can add more JavaScript for testing specific allocators here, like focus events, alert testing, etc.
