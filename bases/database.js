// bases/database.js
const { Pool } = require('pg');

// Configuración de conexión a tu base de datos de Render
const pool = new Pool({
  host: 'dpg-d44f9d9r0fns73avqklg-a',   // 👈 Hostname de Render
  port: 5432,                           // Puerto por defecto de PostgreSQL
  database: 'cantinadb_nwv5',           // Nombre de tu base
  user: 'cantinadb_nwv5_user',          // Usuario
  password: '8htph3DuFD52kDZGBD0jtLrwfw9OR6Ps',         // 🔐 Copiá la contraseña que te da Render
  ssl: { rejectUnauthorized: false }    // Importante para Render
});

// Test de conexión
pool.connect()
  .then(() => console.log('✅ Conectado correctamente a PostgreSQL en Render'))
  .catch(err => console.error('❌ Error al conectar:', err.message));

module.exports = pool;
