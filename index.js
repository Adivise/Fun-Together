const { Intents, Client, Collection } = require("discord.js");
const { readdirSync } = require("fs");
const { TOKEN } = require('./config.json');
const { DiscordTogether } = require('discord-together');

const client = new Client({
    shards: "auto",
    intents: [ 
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_VOICE_STATES,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    ],
});

client.commands = new Collection();
client.cooldowns = new Collection();
client.aliases = new Collection();
client.discordTogether = new DiscordTogether(client);
client.categories = readdirSync(`./commands`);

["events", "commands"]
    .filter(Boolean)
    .forEach(h => {
        require(`./handlers/${h}`)(client);
})

client.login(TOKEN)
