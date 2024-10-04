const pool = require('../db');

const Adm = {
    create: async (user) => {
        const result = await pool.query(
            'INSERT INTO adms (name, email, password, role) VALUES ($1, $2, $3, $4) RETURNING *',
            [user.name, user.email, user.password, user.role]
        );
        return result.rows[0];
    },
};

module.exports = Adm;