const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "doodlecrew",
  category: "Games",
  aliases: ["dc"],
  cooldown: 3,
  description: "play doodlecrew with friend!",

    run: async (client, message, args) => {
      const msg = await message.channel.send("Generating...");

      if(message.member.voice.channel) {
        client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'doodlecrew').then(async invite => {

          const embed = new MessageEmbed()
          .setTitle("Doodle Crew")
          .setColor("#000001")
          .setDescription(`**[CLICK HERE!](${invite.code})**\n\`\`\`\nNote: This feature is not availble for mobile users!\`\`\``)
          .setFooter(`Requested by: ${message.author.tag}`, message.author.displayAvatarURL())

          msg.edit({ content: " ", embeds: [embed] });
        });
      };
    }
}