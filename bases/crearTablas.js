// bases/crearTablas.js
const pool = require('./database');

async function crearTablas() {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS productos (
        id SERIAL PRIMARY KEY,
        nombre TEXT NOT NULL,
        precio REAL NOT NULL,
        cantidad INTEGER DEFAULT 0,
        imagen TEXT,
        descripcion TEXT
      )
    `);

    console.log('📦 Tabla "productos" lista para usar.');
  } catch (err) {
    console.error('❌ Error al crear tabla:', err.message);
  }
}

module.exports = { crearTablas };
