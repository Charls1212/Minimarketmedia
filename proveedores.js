const proveedores = [];

function createProveedor(nombre, contacto) {
    const proveedor = {
        id: proveedores.length + 1,
        nombre,
        contacto
    };
    proveedores.push(proveedor);
    return proveedor;
}

function getProveedores() {
    return proveedores;
}

function updateProveedor(id, updates) {
    const proveedor = proveedores.find(p => p.id === id);
    if (proveedor) {
        Object.assign(proveedor, updates);
    }
    return proveedor;
}

function deleteProveedor(id) {
    const index = proveedores.findIndex(p => p.id === id);
    if (index !== -1) {
        return proveedores.splice(index, 1)[0];
    }
    return null;
}

module.exports = {
    createProveedor,
    getProveedores,
    updateProveedor,
    deleteProveedor
};