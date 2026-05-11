const { Client, GatewayIntentBits } = require("discord.js");

const PREFIX = "!";
const TOKEN = "YOUR_BOT_TOKEN";

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.once("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on("messageCreate", async (message) => {

  if (message.author.bot) return;
  if (!message.content.startsWith(PREFIX)) return;

  const command = message.content.slice(PREFIX.length).trim().toLowerCase();

  if (command === "ping") {

    const sent = await message.reply("Pinging...");

    const msgLatency = sent.createdTimestamp - message.createdTimestamp;
    const apiLatency = client.ws.ping;

    sent.edit(
      `🏓 Pong!\n📨 Message Latency: ${msgLatency}ms\n🌐 API Latency: ${apiLatency}ms`
    );
  }

});

client.login(TOKEN);
