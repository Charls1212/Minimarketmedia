const inventario = {};

function addProducto(productId, cantidad) {
    if (inventario[productId]) {
        inventario[productId] += cantidad;
    } else {
        inventario[productId] = cantidad;
    }
}

function removeProducto(productId, cantidad) {
    if (inventario[productId]) {
        inventario[productId] -= cantidad;
        if (inventario[productId] <= 0) {
            delete inventario[productId];
        }
    }
}

function getInventario() {
    return inventario;
}

function updateInventario(productId, cantidad) {
    if (inventario[productId]) {
        inventario[productId] = cantidad;
    }
}

module.exports = {
    addProducto,
    removeProducto,
    getInventario,
    updateInventario
};