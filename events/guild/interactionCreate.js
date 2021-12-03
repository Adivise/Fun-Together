const { MessageEmbed } = require('discord.js');

module.exports = async(client, interaction) => {
    if (interaction.isCommand()) {
        if (!client.slash.has(interaction.commandName)) return;
        if (!interaction.guild) return;
        const command = client.slash.get(interaction.commandName);
        if(!command) return;

        try {
            if (command.botPerms) {
                if (!interaction.guild.me.permissions.has(command.botPerms)) {
                    const embed = new MessageEmbed()
                        .setAuthor('Missing Permission', client.user.displayAvatarURL({ dynamic: true }))
                        .setColor("#ff0000")
                        .setDescription(`I don't have perm ${command.botPerms} to use this command!`)
                        .setFooter(interaction.user.tag, interaction.user.displayAvatarURL());
                    
                    return interaction.reply({ embeds: [embed] });
            }
        }
            command.run(interaction, client);

        } catch (e) {
            console.log(e)
            await interaction.reply({ content: "Something went wrong!", ephemeral: true });
        }
    }
}