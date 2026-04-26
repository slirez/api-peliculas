const express = require('express');
const { sequelize } = require('./modules/Pelicula');
const { logger, validarApiKey } = require('./middlewares/auth');
const peliculasRoutes = require('./routes/peliculas');

const app = express();
app.use(express.json());
app.use(logger);

// Aplicar validarApiKey a todas las rutas de películas
app.use('/peliculas', validarApiKey, peliculasRoutes);

const PORT = 3000;
sequelize.sync().then(() => {
    app.listen(PORT, () => console.log(`Servidor en http://localhost:${PORT}`));
});