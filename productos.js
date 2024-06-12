const products = [];

function addProduct(name, price) {
    const product = {
        id: products.length + 1,
        name,
        price
    };
    products.push(product);
    return product;
}

function getProducts() {
    return products;
}

function updateProduct(id, updatedProduct) {
    const index = products.findIndex(product => product.id === id);
    if (index !== -1) {
        products[index] = { ...products[index], ...updatedProduct };
        return products[index];
    }
    return null;
}

function deleteProduct(id) {
    const index = products.findIndex(product => product.id === id);
    if (index !== -1) {
        return products.splice(index, 1)[0];
    }
    return null;
}

module.exports = {
    addProduct,
    getProducts,
    updateProduct,
    deleteProduct
};