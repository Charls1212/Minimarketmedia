const express = require("express")
const compilado = express();
compilado.use(express.json());
compilado.use(express.urlencoded({ extended: false }));




const rutasderegistro = require("./routes/RegistroRouter");
const rutasdeventas = require("./routes/VentasRouter");
const rutasdecompras = require("./routes/ComprasRouter");
const rutasdeclientes = require("./routes/ClientesRouter");
const rutasdeinventarios = require("./routes/InventariosRouter");
const rutasdeproductos = require("./routes/ProductosRouter");
const rutasdeproveedores = require("./routes/ProveedoresRouter");



compilado.use(rutasderegistro)
compilado.use(rutasdeventas)
compilado.use(rutasdecompras)
compilado.use(rutasdeclientes)
compilado.use(rutasdeinventarios)
compilado.use(rutasdeproductos)
compilado.use(rutasdeproveedores)



compilado.listen(4007, function (err) {
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", "http://localhost:4007/");
})

// Rutas de la API

// Crear una nueva venta
app.post('/sales', (req, res) => {
    const { product_name, reference_code, quantity, price } = req.body;
    const sql = 'INSERT INTO sales (product_name, reference_code, quantity, price) VALUES (?, ?, ?, ?)';
    db.query(sql, [product_name, reference_code, quantity, price], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ id: result.insertId, product_name, reference_code, quantity, price });
    });
});

// Obtener todas las ventas
app.get('/sales', (req, res) => {
    const sql = 'SELECT * FROM sales';
    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});

// Obtener una venta por ID
app.get('/sales/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'SELECT * FROM sales WHERE id = ?';
    db.query(sql, [id], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (result.length === 0) {
            return res.status(404).json({ error: 'Sale not found' });
        }
        res.json(result[0]);
    });
});

// Actualizar una venta por ID
app.put('/sales/:id', (req, res) => {
    const { id } = req.params;
    const { product_name, reference_code, quantity, price } = req.body;
    const sql = 'UPDATE sales SET product_name = ?, reference_code = ?, quantity = ?, price = ? WHERE id = ?';
    db.query(sql, [product_name, reference_code, quantity, price, id], (err) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Sale updated successfully' });
    });
});

// Eliminar una venta por ID
app.delete('/sales/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM sales WHERE id = ?';
    db.query(sql, [id], (err) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Sale deleted successfully' });
    });
});
