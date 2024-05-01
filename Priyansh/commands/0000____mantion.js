const fs = require("fs");
module.exports.config = {
	name: "MentionBot",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "🙂",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Saku Daku")==0 || event.body.indexOf("@Saku Daku")==0 || event.body.indexOf("SAKU")==0 || event.body.indexOf("BOT")==0) {
		var msg = {
				body: "✨● MENTION NA KR ☆   ME EK BOT HU  Bot Prefix # 👈🏻 use #help2 for commands ✨ 🌹𝐌𝐚𝐝𝐞 𝐛𝐲 𒁍 ⟬ 𓆩𝐌𝐢𝐬𝐬..𝐏𝐫𝐢𝐲𝐚 ‣⃟ ⃝𑁍𓆪᭄ 達 ⟭ ꪹ 爾 ᯽⸺›⁐‡𖣴‣ ⸨⸙⸩😊💫",
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😏", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }