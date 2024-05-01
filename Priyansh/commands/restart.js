module.exports.config = {
	name: "restart",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "𝙋𝙧𝙞𝙮𝙖𝙣𝙨𝙝 𝙍𝙖𝙟𝙥𝙪𝙩",
	description: "Restart Bot",
	commandCategory: "system",
	usages: "",
	cooldowns: 5
};

module.exports.run = async ({ api, event, args }) => {
	const { threadID, messageID } = event;
	return api.sendMessage(`[${global.config.BOTNAME}]👉 🌸==========【 𝙊𝐊 𝐏𝐑𝐈𝐘𝐀 𝐉𝐈 𝐏𝐋𝐄𝐀𝐒𝐄 𝐖𝐀𝐈𝐓 【8】 𝐒𝐄𝐂𝙊𝐍𝐃  】==========🌸           

🌸==========【 𝐑𝐢𝐞𝐚𝐬𝐭𝐚𝐫𝐭𝐢𝐧𝐠.....】==========🌸`, threadID, () => process.exit(1));
}