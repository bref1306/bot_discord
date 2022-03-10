import { Client, ClientOptions } from "discord.js";
import ready from "./listeners/ready";
import interactionCreate from "./listeners/interactionCreate";
require("dotenv").config();

const path = require('path')
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.listen(process.env.PORT || 3000);

//app.use(express.static(path.join(process.cwd, 'src'))); // ajouter un middleware 
// à la place de __dirname on peut mettre process.cwd --> chemin depuis lequel on a exécuté le fichier point d'entrée (chemin terminal))

//For avoidong Heroku $PORT error
// app.get('/', function(request, response) {
//     var result = 'App is running'
//     response.send(result);
// }).listen(app.get('port'), function() {
//     console.log('App is running, server is listening on port ', app.get('port'));
// });

// app.listen(port, () => {
//     console.log('App running on port: ' + port);
//   });

// http.createServer(Request).listen(process.env.PORT || 6000);
const botToken = process.env.botToken;

const client = new Client({
    intents: []
});
ready(client);
interactionCreate(client);
client.login(botToken);