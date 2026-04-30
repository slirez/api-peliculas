const logger = (req, res, next) => {
    console.log(`[${new Date().toLocaleString()}] ${req.method} a ${req.url}`);
    next();
};

const validarApiKey = (req, res, next) => {
    const apiKey = req.headers['x-api-key'];
    if (apiKey === 'PROFE100') { // Esta es la llave que usarás en Postman
        next();
    } else {
        res.status(403).json({ error: "API Key inválida o inexistente" });
    }
};

module.exports = { logger, validarApiKey };
const jwt = require('jsonwebtoken');

const SECRET_KEY = "secreto123";

function verificarToken(req, res, next) {
    const authHeader = req.headers['authorization'];

    if (!authHeader) {
        return res.status(401).json({ mensaje: "Token requerido" });
    }

    const token = authHeader.split(" ")[1];

    if (!token) {
        return res.status(401).json({ mensaje: "Token inválido" });
    }

    jwt.verify(token, SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(403).json({ mensaje: "Token inválido o expirado" });
        }

        req.usuario = decoded;
        next();
    });
}

module.exports = verificarToken;