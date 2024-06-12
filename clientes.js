const clientes = [];

function createCliente(nombre, contacto) {
    const cliente = {
        id: clientes.length + 1,
        nombre,
        contacto
    };
    clientes.push(cliente);
    return cliente;
}

function getClientes() {
    return clientes;
}

function updateCliente(id, updates) {
    const cliente = clientes.find(c => c.id === id);
    if (cliente) {
        Object.assign(cliente, updates);
    }
    return cliente;
}

function deleteCliente(id) {
    const index = clientes.findIndex(c => c.id === id);
    if (index !== -1) {
        return clientes.splice(index, 1)[0];
    }
    return null;
}

module.exports = {
    createCliente,
    getClientes,
    updateCliente,
    deleteCliente
};