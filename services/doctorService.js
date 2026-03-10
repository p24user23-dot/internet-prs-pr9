const mysql = require('mysql2/promise');
const config = require('./db');

async function getAllDoctors() {
    const conn = await mysql.createConnection(config);
    const [rows] = await conn.execute(`
        SELECT doctors.id, doctors.full_name, doctors.specialty, hospitals.name as hospital_name 
        FROM doctors 
        LEFT JOIN hospitals ON doctors.hospital_id = hospitals.id
    `);
    await conn.end();
    return rows;
}

async function createDoctor(full_name, specialty, hospital_id) {
    const conn = await mysql.createConnection(config);
    const [result] = await conn.execute(
        'INSERT INTO doctors (full_name, specialty, hospital_id) VALUES (?, ?, ?)',
        [full_name, specialty, hospital_id]
    );
    await conn.end();
    return { id: result.insertId, full_name, specialty, hospital_id };
}

async function updateDoctor(id, full_name, specialty, hospital_id) {
    const conn = await mysql.createConnection(config);
    await conn.execute(
        'UPDATE doctors SET full_name = ?, specialty = ?, hospital_id = ? WHERE id = ?',
        [full_name, specialty, hospital_id, id]
    );
    await conn.end();
    return true;
}

async function deleteDoctor(id) {
    const conn = await mysql.createConnection(config);
    await conn.execute('DELETE FROM doctors WHERE id = ?', [id]);
    await conn.end();
    return true;
}

module.exports = { getAllDoctors, createDoctor, updateDoctor, deleteDoctor };
