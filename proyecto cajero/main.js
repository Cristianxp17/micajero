const clientes = [
    { nombre: "cristian", pin: 1234, saldo: 1500 },
    { nombre: "paola", pin: 5678, saldo: 2000 },
    { nombre: "nicolas", pin: 9012, saldo: 3000 }
];

const form = document.getElementById('contactForm');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const password = document.getElementById('email').value;

    if (name === '') {
        alert('Por favor, ingresa tu nombre');
        return;
    }
    
    if (password === '') {
        alert('Por favor, ingresa tu contraseña');
        return;
    }
    
    const clienteEncontrado = clientes.find(cliente => cliente.nombre === name);
    if (clienteEncontrado && clienteEncontrado.pin == password) {
        sessionStorage.setItem('nombreCliente', clienteEncontrado.nombre);
        saldoUsuario = clienteEncontrado.saldo;
        window.location.href = 'paginaprincipal.html';
    } else {
        alert('Nombre de usuario o contraseña incorrectos');
    }
    
});