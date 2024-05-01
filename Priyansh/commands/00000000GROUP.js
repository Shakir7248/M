const fs = require("fs");
module.exports.config = {
	name: "gp",
    version: "1.1.1",
	hasPermssion: 0,
	credits: "PREM BABU", 
	description: "Just Respond",
	commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("Group") ||
     react.includes("Grp") || react.includes("Gp") || react.includes("group") ||
react.includes("grp") ||
react.includes("GROUP")) {
		var msg = {
				body: `𝐎𝐖𝐍𝐄𝐑.☞︎︎︎ 𝐏𝐑𝐈𝐘𝐀\n𝐌𝐄𝐑𝐄 𝐆𝐑𝐎𝐔𝐏 [𝐇𝐄𝐑𝐀 𝐏𝐇𝐄𝐑𝐈 😅] 𝐌 𝐀𝐀𝐎 𝐎𝐑 𝐄𝐍𝐉𝐎𝐘 𝐊𝐑𝐎\n\n𝐆𝐑𝐎𝐔𝐏 𝐋𝐈𝐍𝐊☞︎︎︎ https://m.me/j/AbYqULuy_E3wE4fC/`,
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😎", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }