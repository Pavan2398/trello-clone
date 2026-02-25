const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

async function migrate() {
    const client = await pool.connect();
    try {
        console.log('Running migration: Add is_due_complete to cards table');
        await client.query(`
      ALTER TABLE cards 
      ADD COLUMN IF NOT EXISTS is_due_complete BOOLEAN DEFAULT FALSE;
    `);
        console.log('Migration successful');
    } catch (err) {
        console.error('Migration failed:', err);
    } finally {
        client.release();
        await pool.end();
    }
}

migrate();
