import { Client, ClientOptions } from "discord.js";
import ready from "./listeners/ready";
import interactionCreate from "./listeners/interactionCreate";
require("dotenv").config();

const path = require('path')
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


app.use(express.static(path.join(process.cwd, 'src'))); // ajouter un middleware 
// à la place de __dirname on peut mettre process.cwd --> chemin depuis lequel on a exécuté le fichier point d'entrée (chemin terminal))

// app.get('/', (req, res, next) => {
//     //oui; // démo pour montrer que la middleware fonctionne
//     return res.sendFile(path.join(__dirname, './index.html')); // renvoie une page html basique avec écrit "lol"
// });
// app.get() => {
//     return res.sendFile(path.join(__dirname, './index.html')); 
// }

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