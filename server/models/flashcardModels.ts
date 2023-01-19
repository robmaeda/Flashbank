import { Pool } from "pg";

const PG_URI = "postgres://";

const pool = new Pool({
    connectionString: PG_URI,
});

export const query = (text: string) => {
    console.log("executed query", text);
    return pool.query(text);
};
