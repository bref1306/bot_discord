import { Client, ClientOptions } from "discord.js";
import ready from "./listeners/ready";
import interactionCreate from "./listeners/interactionCreate";
require("dotenv").config();

// const path = require('path')
import express from "express";

const app = express();

app.listen(process.env.PORT || 3000);

app.get('/', (req, res) => {
    res.send('Bot activé')
});

const botToken = process.env.botToken;

const client = new Client({
    intents: []
});
ready(client);
interactionCreate(client);
client.login(botToken);