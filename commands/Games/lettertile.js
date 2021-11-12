const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "lettertile",
  category: "Games",
  aliases: ["letter", "lt"],
  cooldown: 3,
  description: "play letter tile with friend!",

    run: async (client, message, args) => {
      const msg = await message.channel.send("Generating...");

      if(message.member.voice.channel) {
        client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'lettertile').then(async invite => {

          const embed = new MessageEmbed()
          .setTitle("Letter Tile")
          .setColor("#000001")
          .setDescription(`**[CLICK HERE!](${invite.code})**\n\`\`\`\nNote: This feature is not availble for mobile users!\`\`\``)
          .setFooter(`Requested by: ${message.author.tag}`, message.author.displayAvatarURL())

          msg.edit({ content: " ", embeds: [embed] });
        });
      };
    }
}