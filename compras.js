const compras = [];

function createCompra(productId, providerId, cantidad, costoTotal) {
    const compra = {
        id: compras.length + 1,
        productId,
        providerId,
        cantidad,
        costoTotal
    };
    compras.push(compra);
    return compra;
}

function getCompras() {
    return compras;
}

function updateCompra(id, updates) {
    const compra = compras.find(c => c.id === id);
    if (compra) {
        Object.assign(compra, updates);
    }
    return compra;
}

function deleteCompra(id) {
    const index = compras.findIndex(c => c.id === id);
    if (index !== -1) {
        return compras.splice(index, 1)[0];
    }
    return null;
}

module.exports = {
    createCompra,
    getCompras,
    updateCompra,
    deleteCompra
};