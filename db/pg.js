const { Sequelize } = require("sequelize");

async function connection() {
    const db = new Sequelize({
        dialect: "postgres",
        host: process.env.DB_PG_HOST,
        port: process.env.DB_PG_PORT,
        database: process.env.DB_PG_DB_NAME,
        username: process.env.DB_PG_USER,
        password: process.env.DB_PG_PASS,
    });

    try {
        await db.authenticate();
        console.log("Success connect postgres");
    } catch (error) {
        console.log("Failed connect postgres, error: %s", error);
        process.exit(500);
    }

    return db;
}

// try {
//     db.authenticate()
//         .then(() => {
//             console.log("Success connect postgres");
//         })
//         .catch((err) => {
//             console.log("Failed connect postgres error: %d", err);
//             process.exit(500);
//         });
// } catch (error) {
//     console.log("Failed connect postgres");
//     process.exit(500);
// }

module.exports = { connection };
