const client = global.client;
const { TextChannel, EmbedBuilder } = require("discord.js");
module.exports = async client => {
	function clean(text) {
    if (typeof text !== "string")
        text = require("util").inspect(text, { depth: 0 });
    text = text
        .replace(/`/g, "`" + String.fromCharCode(8203))
        .replace(/@/g, "@" + String.fromCharCode(8203));
    return text;
}
}