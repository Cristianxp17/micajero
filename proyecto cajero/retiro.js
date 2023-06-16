const clientes = [
    { nombre: "cristian", pin: 1234, saldo: 1500 },
    { nombre: "paola", pin: 5678, saldo: 2000 },
    { nombre: "nicolas", pin: 9012, saldo: 3000 }
];




addEventListener("onclick",(event)=>{})


function hacerRetiro() {
    const cantidad = parseFloat(document.getElementById("cantidad").value);
    const nombreCliente = sessionStorage.getItem('nombreCliente');
    const cliente = clientes.find(function (cliente) {
    return cliente.nombre === nombreCliente;
    });
    if (cliente) {
    cliente.saldo -= cantidad;
    console.log(`El nuevo saldo de ${cliente.nombre} es: ${cliente.saldo}`);
    alert(`Se ha retirado ${cantidad} de su cuenta  ${cliente.nombre}  El nuevo saldo de su cuenta es: ${cliente.saldo}`);
    } else {
    alert("Cliente no encontrado");
    }
}