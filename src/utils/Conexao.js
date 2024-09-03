// db.js
import pkg from 'pg';
const { Pool } = pkg;

class Database {
    constructor() {
        if (!Database.instance) {
            this.pool = new Pool({
                user: 'postgres',
                host: 'localhost',
                database: 'postgres',
                password: 'postgres123',
                port: 5432,
            });

            Database.instance = this;
        }

        return Database.instance;
    }

    async query(text, params) {
        return this.pool.query(text, params);
    }

    async close() {
        await this.pool.end();
    }
}

const instance = new Database();
Object.freeze(instance);

export default instance;
