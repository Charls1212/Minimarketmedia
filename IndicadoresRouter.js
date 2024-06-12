
        // Funciones de estimación para las gráficas
        document.getElementById('estimarVentas').addEventListener('click', function() {
            // Lógica para estimar las ventas
            console.log('Estimación de Ventas');
        });

        document.getElementById('estimarTorta').addEventListener('click', function() {
            // Lógica para estimar la gráfica de torta
            console.log('Estimación de Gráfica de Torta');
        });

        document.getElementById('estimarBarras').addEventListener('click', function() {
            // Lógica para estimar la gráfica de barras
            console.log('Estimación de Gráfica de Barras');
        });

        document.getElementById('estimarProyeccion').addEventListener('click', function() {
            // Lógica para estimar la proyección de ventas
            console.log('Estimación de Proyección de Ventas');
        });

        // Datos  para la gráfica de ventas
        var ctxVentas = document.getElementById('ventasChart').getContext('2d');
        var ventasChart = new Chart(ctxVentas, {
            type: 'line',
            data: {
                labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
                datasets: [{
                    label: 'Ventas Mensuales',
                    data: [12000000, 15000000, 18000000, 16000000, 20000000, 22000000],
                    borderColor: 'blue',
                    fill: false
                }]
            }
        });

        // Datos de ejemplo para la gráfica de torta
        var ctxTorta = document.getElementById('tortaChart').getContext('2d');
        var tortaChart = new Chart(ctxTorta, {
            type: 'doughnut',
            data: {
                labels: ['Margen Comercial', 'Dinero Disponible', 'Rotación de Personal'],
                // Margen: Diferencia entre las ventas y el coste directo de las mismas (%).
                datasets: [{
                    data: [25, 35, 10],
                    backgroundColor: ['green', 'blue', 'red']
                }]
            }
        });

        // Datos de ejemplo para la gráfica de barras
        var ctxBarras = document.getElementById('barrasChart').getContext('2d');
        var barrasChart = new Chart(ctxBarras, {
            type: 'bar',
            data: {
                labels: ['Total de Ventas actuales', 'Promedio Mensual', 'Promedio Diario'],
                //
                datasets: [{
                    label: 'Ventas',
                    data: [12000000, 17000000, 500000],
                    backgroundColor: ['green', 'blue', 'purple']
                }]
            }
        });

        // Datos de ejemplo para la gráfica de proyección de ventas
        var ctxProyeccion = document.getElementById('proyeccionChart').getContext('2d');
        var proyeccionChart = new Chart(ctxProyeccion, {
            type: 'line',
            data: {
                labels: ['Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
                datasets: [{
                    label: 'Proyección de Ventas',
                    data: [24000000, 25000000, 28000000, 27000000, 26000000, 30000000],
                    borderColor: 'indigo',
                    fill: false
                }]
            }
        });
    