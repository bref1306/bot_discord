import { BaseCommandInteraction, Client, Interaction, MessageActionRow, MessageButton, MessageEmbed } from "discord.js";
import { Command } from "src/command";
import fetch from "node-fetch";
import { datacatalog } from "googleapis/build/src/apis/datacatalog";
require("dotenv").config();

export const ShowButton: Command = {
    name: "button",
    description: "Vous renvoie un bouton",
    type: "CHAT_INPUT",
    options: [
        {
            name: "mot",
            description: "Met juste un mot random",
            type: 'STRING',
            required: true,
        }
    ],
    run: async (client: Client, interaction: BaseCommandInteraction) => {
        const query = interaction.options.get('mot')?.value;
        const content = "Clique pour voir ?";
        const row = new MessageActionRow()
			.addComponents(
			    new MessageButton()
					.setCustomId('youtube')
					.setLabel('Go !')
					.setStyle('SECONDARY')
                    .setEmoji('😄'),
			);
        // await interaction.followUp({
        //     ephemeral: true,
        //     content,
        // });
        await interaction.followUp({ephemeral: true, content, components: [row]});


        if(process.env.apiKey) {
            console.log('API connecté');
        }

        client.on("interactionCreate", async (interaction: Interaction) => {
            
            if (interaction.isButton()) {
                
                const url = 'https://www.googleapis.com/youtube/v3/search?key='+ process.env.apiKey +'&type=video&part=snippet&q='+ query;
                const response = await fetch(url);
                const data = await response.json();
                //console.log(data.items[0]['id']);
                const idVideo = JSON.stringify(data.items[0]['id']['videoId']);
                const title = JSON.stringify(data.items[0]['snippet']['title'])
                const description = JSON.stringify(data.items[0]['snippet']['description'])
                const channel = JSON.stringify(data.items[0]['snippet']['channelTitle'])
                const image = JSON.stringify(data.items[0]['snippet']['thumbnails']['medium'])

                console.log(data.items[0]);
                const embed = new MessageEmbed()
                    .setColor('#8F3B3A')
                    .setTitle(title + ' de ' + channel)
                    .setURL("https://www.youtube.com/watch?v=" + idVideo)
                    .setDescription(description)
                    ;
                
                await interaction.reply({ content: 'C\'est bon t\'es content tu veux une médaille ? Non je déconne tiens : ', embeds: [embed]});
            }
            
        });
    }
};