import { BaseCommandInteraction, Client } from "discord.js";
import { Command } from "src/command";

export const Hello: Command = {
    name: "hello",
    description: "Vous répond bonjour",
    type: "CHAT_INPUT",
    run: async (client: Client, interaction: BaseCommandInteraction) => {
        const content = "Hello there!";

        await interaction.followUp({
            ephemeral: true,
            content
        });
    }
};