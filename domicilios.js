const deliveries = [];

function addDelivery(customerId, address, products) {
    const delivery = {
        id: deliveries.length + 1,
        customerId,
        address,
        products
    };
    deliveries.push(delivery);
    return delivery;
}

function getDeliveries() {
    return deliveries;
}

function updateDelivery(id, updatedDelivery) {
    const index = deliveries.findIndex(delivery => delivery.id === id);
    if (index !== -1) {
        deliveries[index] = { ...deliveries[index], ...updatedDelivery };
        return deliveries[index];
    }
    return null;
}

function deleteDelivery(id) {
    const index = deliveries.findIndex(delivery => delivery.id === id);
    if (index !== -1) {
        return deliveries.splice(index, 1)[0];
    }
    return null;
}

module.exports = {
    addDelivery,
    getDeliveries,
    updateDelivery,
    deleteDelivery
};