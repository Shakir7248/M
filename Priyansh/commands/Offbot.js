module.exports.config = {
	name: "off",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭",
	description: "turn the bot off",
	commandCategory: "system",
	cooldowns: 0
        };
module.exports.run = ({event, api}) =>{
    const permission = ["100037497189938", "100037497189938"];
  	if (!permission.includes(event.senderID)) return api.sendMessage("[ ERR ] You don't have permission to use this command, This Command Only For Priyansh", event.threadID, event.messageID);
  api.sendMessage(`[${global.config.BOTNAME}] 👉 OK MISS. PRIYA TUM BOLTE HO TO HO JATA HU OFF. 🥹 `,event.threadID, () =>process.exit(0))
}