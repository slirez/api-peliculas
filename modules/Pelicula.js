const { Sequelize, DataTypes } = require('sequelize');
const path = require('path');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: path.join(__dirname, '../database.sqlite')
});

const Pelicula = sequelize.define('Pelicula', {
    titulo: { type: DataTypes.STRING, allowNull: false },
    director: { type: DataTypes.STRING },
    anio: { type: DataTypes.INTEGER }
});

module.exports = { Pelicula, sequelize };