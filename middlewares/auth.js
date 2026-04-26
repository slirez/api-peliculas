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