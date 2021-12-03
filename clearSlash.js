const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");
const { CLIENT_ID, GUILD_ID, TOKEN } = require("./config.json");

const commands = [];

const rest = new REST({ version: "9" }).setToken(TOKEN);

(async () => {
    try {
        console.log("[INFOMATION] Start clearing application (/) commands.");
        await rest.put(
            // if you want to use global clear slashcommand use here => "Routes.applicationCommands(CLIENT_ID)"
            Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID),
           // Routes.applicationCommands(CLIENT_ID),
            { body: commands },
        );
        console.log("[INFOMATION] Successfully clearing application (/) commands.");
    } catch (error) {
        console.log(error);
    }
})();