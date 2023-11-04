const { Client, Collection, MessageEmbed } = require("discord.js");
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const fs = require("node:fs");
const config = require("./config.json");
const client = new Client({
    intents: 32767
});

client.config = require("./config")
client.slash_commands = new Collection();
client.events = new Collection();

module.exports = client;

["slash", "event" , "function"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});

process.on('unhandledRejection', err => {
    console.log(`[HATA] Unhandled promise rejection: ${err.message}.`);
    console.log(err);
});

const start = process.env.TOKEN || config.client.TOKEN;
if (!start) {
    console.warn("[Warn] Token!").then(async () => process.exit(1));
} else {
    client.login(start).catch(() => console.log("[Warn] Token error."));
}