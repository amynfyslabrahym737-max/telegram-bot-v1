import TelegramBot from "node-telegram-bot-api";
import dotenv from "dotenv";

dotenv.config();

const token = process.env.BOT_TOKEN;

if (!token) {
  console.log("❌ BOT_TOKEN غير موجود");
  process.exit(1);
}

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "✅ البوت شغال! ارسل أي رسالة.");
});

bot.on("message", (msg) => {
  if (msg.text === "/start") return;
  bot.sendMessage(msg.chat.id, `وصلتني رسالتك: ${msg.text}`);
});

console.log("✅ Bot is running...");
