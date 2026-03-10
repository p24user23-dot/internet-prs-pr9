const mysql = require('mysql2/promise');
const config = require('./db');

async function getAllPatients() {
    const conn = await mysql.createConnection(config);
    const [rows] = await conn.execute(`
        SELECT patients.id, patients.full_name, patients.age, doctors.full_name as doctor_name 
        FROM patients 
        LEFT JOIN doctors ON patients.doctor_id = doctors.id
    `);
    await conn.end();
    return rows;
}

async function createPatient(full_name, age, doctor_id) {
    const conn = await mysql.createConnection(config);
    const [result] = await conn.execute(
        'INSERT INTO patients (full_name, age, doctor_id) VALUES (?, ?, ?)',
        [full_name, age, doctor_id]
    );
    await conn.end();
    return { id: result.insertId, full_name, age, doctor_id };
}

async function updatePatient(id, full_name, age, doctor_id) {
    const conn = await mysql.createConnection(config);
    await conn.execute(
        'UPDATE patients SET full_name = ?, age = ?, doctor_id = ? WHERE id = ?',
        [full_name, age, doctor_id, id]
    );
    await conn.end();
    return true;
}

async function deletePatient(id) {
    const conn = await mysql.createConnection(config);
    await conn.execute('DELETE FROM patients WHERE id = ?', [id]);
    await conn.end();
    return true;
}

module.exports = { getAllPatients, createPatient, updatePatient, deletePatient };
