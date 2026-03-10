const express = require('express');
const router = express.Router();
const { getAllDoctors, createDoctor, updateDoctor, deleteDoctor } = require('../services/doctorService');

router.get('/', async (req, res) => {
    try {
        const doctors = await getAllDoctors();
        res.json(doctors);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const { full_name, specialty, hospital_id } = req.body;
        const newDoctor = await createDoctor(full_name, specialty, hospital_id);
        res.status(201).json(newDoctor);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const { full_name, specialty, hospital_id } = req.body;
        await updateDoctor(req.params.id, full_name, specialty, hospital_id);
        res.json({ message: 'Doctor updated' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await deleteDoctor(req.params.id);
        res.json({ message: 'Doctor deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
