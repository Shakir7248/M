const fs = require("fs");
module.exports.config = {
	name: "✨",
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
	if(react.includes("love") ||
     react.includes("Love") || react.includes("LOVE") || react.includes("Lobe") ||
react.includes("Lov") ||
react.includes("143")) {
		var msg = {
				body: `I LOVE YOU TOO MERI JAAN UMUAAA 💋💋💋💋💋 🙌🫣`,
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("✨", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }