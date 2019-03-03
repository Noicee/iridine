module.exports = async (client, message) => {
let messageArray = message.content.split(" ");
let cmd = messageArray[0];
if(message.author.bot) return;
if (message.channel.type === "dm") return;
if(message.content.indexOf(client.config.prefix) !== 0) return;
const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
let commandfile = client.commands.get(cmd.slice(client.config.prefix.length));
if(commandfile) commandfile.run(client, message, args);
}
