const client = require("../../index.js");
const config = require("../../config.json");
const ms = require("ms");

client.once('ready', async () => {
  console.log(`[CLIENT] ${client.user.tag} login.`);

  const up = ms(ms(Math.round(process.uptime() - (client.uptime / 1000)) + ''));

  console.log(`[NODEJS] Client login time : ${up} `);

  client.user.setActivity(`/help`)
});