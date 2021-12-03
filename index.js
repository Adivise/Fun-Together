const { Intents, Client, Collection } = require("discord.js");
const { TOKEN } = require('./config.json');
const { DiscordTogether } = require('discord-together');

const client = new Client({
    intents: [ 
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_VOICE_STATES,
    ],
});

client.slash = new Collection();
client.commands = new Collection();
client.together = new DiscordTogether(client);

["loadEvents", "loadCommands"]
    .forEach(file => {
        require(`./handlers/${file}`)(client);
});

client.login(TOKEN)
