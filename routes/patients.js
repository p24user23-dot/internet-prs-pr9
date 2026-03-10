const express = require('express');
const router = express.Router();
const { getAllPatients, createPatient, updatePatient, deletePatient } = require('../services/patientService');

router.get('/', async (req, res) => {
    try {
        const patients = await getAllPatients();
        res.json(patients);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const { full_name, age, doctor_id } = req.body;
        const newPatient = await createPatient(full_name, age, doctor_id);
        res.status(201).json(newPatient);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const { full_name, age, doctor_id } = req.body;
        await updatePatient(req.params.id, full_name, age, doctor_id);
        res.json({ message: 'Patient updated' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await deletePatient(req.params.id);
        res.json({ message: 'Patient deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
