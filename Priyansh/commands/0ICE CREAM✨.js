const fs = require("fs");
module.exports.config = {
	name: "icecream",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "𝙋𝙧𝙞𝙮𝙖𝙣𝙨𝙝 𝙍𝙖𝙟𝙥𝙪𝙩", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "icecream",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("ICE CREAM")==0 || event.body.indexOf("Ice cream")==0 || event.body.indexOf("ice cream")==0 || event.body.indexOf("#ice cream")==0) {
		var msg = {
				body: "💝 YE LO BBY ICE CREAM KHAO 😊\n\n[Creator-Miss. Priya]",
				attachment: 
fs.createReadStream(__dirname + `/cache/ice.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("☑", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }