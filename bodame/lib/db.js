import knex from "knex";

export const db = knex({
  client: "mysql2",
  connection: {
    host: 'bodam-e.com',
    user: 'ljlj123',
    password: 'Lj!13402413',
    database: 'ljlj123'
  },
});
