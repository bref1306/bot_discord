import { Client, ClientOptions } from "discord.js";
import ready from "./listeners/ready";
import interactionCreate from "./listeners/interactionCreate";
require("dotenv").config();


const botToken = process.env.botToken;

const client = new Client({
    intents: []
});
ready(client);
interactionCreate(client);
client.login(botToken);