const discord = require('discord.js');
const config = require("../config.json");

module.exports.run = async (client, message, args) => {
  client.emit("error", "Unhandled niggatry");
}

module.exports.help = {
  name: "kick",
  usage: "kick <@user> [reason]"
}
