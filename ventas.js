const ventas = [];

function createVenta(productId, clientId, cantidad, precioTotal) {
    const venta = {
        id: ventas.length + 1,
        productId,
        clientId,
        cantidad,
        precioTotal
    };
    ventas.push(venta);
    return venta;
}

function getVentas() {
    return ventas;
}

function updateVenta(id, updates) {
    const venta = ventas.find(v => v.id === id);
    if (venta) {
        Object.assign(venta, updates);
    }
    return venta;
}

function deleteVenta(id) {
    const index = ventas.findIndex(v => v.id === id);
    if (index !== -1) {
        return ventas.splice(index, 1)[0];
    }
    return null;
}

module.exports = {
    createVenta,
    getVentas,
    updateVenta,
    deleteVenta
};