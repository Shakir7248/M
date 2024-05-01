const fs = require("fs");
module.exports.config = {
	name: "📛",
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
	if(react.includes("setting") ||
     react.includes("girlfriend") || react.includes("boyfriend") || react.includes("Girlfriend") ||
react.includes("Boyfriend") ||
react.includes("Setting")) {
		var msg = {
				body: `Mujhse setting krne k liye inbox m massage kre Or Apna WhatsApp No. send kre Only Girls 😀😅🤭`,
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😎", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }