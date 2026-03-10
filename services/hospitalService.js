const mysql = require('mysql2/promise');
const config = require('./db');

async function getAllHospitals() {
    const conn = await mysql.createConnection(config);
    const [rows] = await conn.execute('SELECT * FROM hospitals');
    await conn.end();
    return rows;
}

async function createHospital(name, address) {
    const conn = await mysql.createConnection(config);
    const [result] = await conn.execute(
        'INSERT INTO hospitals (name, address) VALUES (?, ?)',
        [name, address]
    );
    await conn.end();
    return { id: result.insertId, name, address };
}

async function updateHospital(id, name, address) {
    const conn = await mysql.createConnection(config);
    await conn.execute(
        'UPDATE hospitals SET name = ?, address = ? WHERE id = ?',
        [name, address, id]
    );
    await conn.end();
    return true;
}

async function deleteHospital(id) {
    const conn = await mysql.createConnection(config);
    await conn.execute('DELETE FROM hospitals WHERE id = ?', [id]);
    await conn.end();
    return true;
}

module.exports = { getAllHospitals, createHospital, updateHospital, deleteHospital };
