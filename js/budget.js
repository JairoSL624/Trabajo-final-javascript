document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('presupuestoForm');

    form.addEventListener('submit', function(event) {
        // Validar Nombre
        const nombre = document.getElementById('nombre').value;
        const nombrePattern = /^[A-Za-z]+$/;
        if (!nombrePattern.test(nombre)) {
            alert('El nombre solo puede contener letras.');
            event.preventDefault();
            return;
        }

        // Validar Apellidos
        const apellidos = document.getElementById('apellidos').value;
        const apellidosPattern = /^[A-Za-z\s]+$/;
        if (!apellidosPattern.test(apellidos)) {
            alert('Los apellidos solo pueden contener letras.');
            event.preventDefault();
            return;
        }

        // Validar Teléfono
        const telefono = document.getElementById('telefono').value;
        const telefonoPattern = /^[0-9]{9}$/;
        if (!telefonoPattern.test(telefono)) {
            alert('El teléfono solo puede contener números y tener una longitud exacta de 9 dígitos.');
            event.preventDefault();
            return;
        }

        // Validar Email
        const email = document.getElementById('email').value;
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email)) {
            alert('Por favor, introduce un correo electrónico válido.');
            event.preventDefault();
            return;
        }
    });

    // Calcular el presupuesto total
    const productoSelect = document.getElementById('producto');
    const extrasCheckboxes = document.querySelectorAll('input[name="extras"]');
    const totalElement = document.getElementById('total');

    function updateTotal() {
        let total = 0;

        // Obtener el precio del producto seleccionado
        const selectedOption = productoSelect.options[productoSelect.selectedIndex];
        total += parseFloat(selectedOption.getAttribute('data-precio')) || 0;

        // Obtener el precio de los extras seleccionados
        extrasCheckboxes.forEach(checkbox => {
            if (checkbox.checked) {
                total += parseFloat(checkbox.getAttribute('data-precio')) || 0;
            }
        });

        // Actualizar el total en el HTML
        totalElement.textContent = total.toFixed(2);
    }

    // Escuchar cambios en el formulario
    productoSelect.addEventListener('change', updateTotal);
    extrasCheckboxes.forEach(extra => extra.addEventListener('change', updateTotal));
    form.addEventListener('input', updateTotal);

    // Calcular total al cargar la página
    updateTotal();
});

