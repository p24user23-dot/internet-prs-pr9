const express = require('express');
const router = express.Router();
const { getAllHospitals, createHospital, updateHospital, deleteHospital } = require('../services/hospitalService');

router.get('/', async (req, res) => {
    try {
        const hospitals = await getAllHospitals();
        res.json(hospitals);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const { name, address } = req.body;
        const newHospital = await createHospital(name, address);
        res.status(201).json(newHospital);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const { name, address } = req.body;
        await updateHospital(req.params.id, name, address);
        res.json({ message: 'Hospital updated' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await deleteHospital(req.params.id);
        res.json({ message: 'Hospital deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
