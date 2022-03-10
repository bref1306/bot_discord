import { Client, ClientOptions } from "discord.js";
import ready from "./listeners/ready";
import interactionCreate from "./listeners/interactionCreate";
require("dotenv").config();

const path = require('path')
const express = require('express');
const app = express();
//const port = process.env.PORT || 3000;
const http = require("http");
const server = require("server");

app.listen(process.env.PORT || 3000);

// const host = 'localhost';
// const port = 8000;

// http.createServer(Request).listen(process.env.PORT || 3000);
// server.listen(port, host, () => {
//     console.log(`Server is running on http://${host}:${port}`);
// });


const botToken = process.env.botToken;

const client = new Client({
    intents: []
});
ready(client);
interactionCreate(client);
client.login(botToken);