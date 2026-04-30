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

const jwt = require('jsonwebtoken');

const SECRET_KEY = "secreto123";

app.use(express.json());

// LOGIN
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (username === "admin" && password === "1234") {

        const token = jwt.sign(
            { username },
            SECRET_KEY,
            { expiresIn: "1h" }
        );

        return res.json({ token });
    }

    res.status(401).json({ mensaje: "Credenciales incorrectas" });
});