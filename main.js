require("dotenv").config();

const { connection } = require("./db/pg");

const express = require("express");
const app = express();
const port = process.env.APP_PORT || 3000;

const { Server } = require("./app");

//* Tujuan dari penggunaan dependency injection, adalah untuk mengurangi proses pemanggilan function berulang

connection()
    .then((db) => {
        Server({
            app: app,
            db: db,
        });

        app.listen(port, () =>
            console.log("Service user running on port %d", port)
        );
    })
    .catch((err) => {
        console.error(err);
    });
