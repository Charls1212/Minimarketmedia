function calculateTotalSales(sales) {
    return sales.reduce((total, sale) => total + sale.totalPrice, 0);
}

function calculateTotalPurchases(purchases) {
    return purchases.reduce((total, purchase) => total + purchase.totalCost, 0);
}

function calculateInventoryValue(inventory, prices) {
    let totalValue = 0;
    for (let productId in inventory) {
        totalValue += inventory[productId] * (prices[productId] || 0);
    }
    return totalValue;
}

module.exports = {
    calculateTotalSales,
    calculateTotalPurchases,
    calculateInventoryValue
};