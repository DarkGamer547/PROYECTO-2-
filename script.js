document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const mensaje = document.getElementById('mensaje').value;

        if (nombre && email && mensaje) {
            const modal = new bootstrap.Modal(document.getElementById('confirmationModal'));
            modal.show();
            form.reset();
        } else {
            alert('Por favor, complete todos los campos.');
        }
    });
});
