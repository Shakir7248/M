const fs = require("fs");
module.exports.config = {
	name: "id",
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
	if(react.includes("instagram") ||
     react.includes("Instagram") || react.includes("#INSTAGRAM") || react.includes("#instagram") ||
react.includes("#insta") ||
react.includes("Insta")) {
		var msg = {
				body: `YE LO BBY MERI INSTAGRAM I'D ❤️‍🩹🥺🥀\n\n👉  https://www.instagram.com/__shakirr__?igsh=cW81bjQwbW9tMGFy`,
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🥀", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }