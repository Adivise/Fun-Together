const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "youtube",
  category: "Watch",
  aliases: ["yt"],
  cooldown: 3,
  description: "watching youtube with friend!",

    run: async (client, message, args) => {
      const msg = await message.channel.send("Generating...");

      if(message.member.voice.channel) {
        client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'youtube').then(async invite => {

          const embed = new MessageEmbed()
          .setTitle("Youtube Together")
          .setColor("RED")
          .setDescription(`**[CLICK HERE!](${invite.code})**\n\`\`\`\nNote: This feature is not availble for mobile users!\`\`\``)
          .setFooter(`Requested by: ${message.author.tag}`, message.author.displayAvatarURL())

          msg.edit({ content: " ", embeds: [embed] });
        });
      };
    }
}