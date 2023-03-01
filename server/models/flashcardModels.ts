import { Pool } from "pg";

const PG_URI =
    "postgres://drvoztxe:wljDzynNrwYJHBf4tAGyZF_qFEh6j7gG@kashin.db.elephantsql.com/drvoztxe";

const pool = new Pool({
    connectionString: PG_URI,
});

export const query = (text: string) => {
    console.log("executed query", text);
    return pool.query(text);
};
