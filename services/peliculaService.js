const { Pelicula } = require('../modules/Pelicula');

class PeliculaService {
    async getAll() { return await Pelicula.findAll(); }
    async getById(id) { return await Pelicula.findByPk(id); }
    async create(data) { return await Pelicula.create(data); }
    async update(id, data) {
        const p = await Pelicula.findByPk(id);
        return p ? await p.update(data) : null;
    }
    async delete(id) {
        const p = await Pelicula.findByPk(id);
        return p ? await p.destroy() : null;
    }
}

module.exports = new PeliculaService();