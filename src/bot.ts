import { Client, ClientOptions } from "discord.js";
import ready from "./listeners/ready";
import interactionCreate from "./listeners/interactionCreate";
require("dotenv").config();

const path = require('path')
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('App running on port: ' + port);
  });

const botToken = process.env.botToken;

const client = new Client({
    intents: []
});
ready(client);
interactionCreate(client);
client.login(botToken);