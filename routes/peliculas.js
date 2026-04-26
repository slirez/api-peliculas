const express = require('express');
const router = express.Router();
const service = require('../services/peliculaService');

router.get('/', async (req, res) => res.json(await service.getAll()));
router.get('/:id', async (req, res) => {
    const p = await service.getById(req.params.id);
    p ? res.json(p) : res.status(404).json({ error: "No encontrada" });
});
router.post('/', async (req, res) => res.status(201).json(await service.create(req.body)));
router.put('/:id', async (req, res) => {
    const p = await service.update(req.params.id, req.body);
    p ? res.json(p) : res.status(404).json({ error: "No encontrada" });
});
router.delete('/:id', async (req, res) => {
    const p = await service.delete(req.params.id);
    p ? res.status(204).send() : res.status(404).json({ error: "No encontrada" });
});

module.exports = router;