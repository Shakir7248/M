const fs = require("fs");
module.exports.config = {
	name: "French",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "𝙋𝙧𝙞𝙮𝙖𝙣𝙨𝙝 𝙍𝙖𝙟𝙥𝙪𝙩", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "french",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("FRENCH")==0 || event.body.indexOf("French")==0 || event.body.indexOf("french")==0 || event.body.indexOf("#french")==0) {
		var msg = {
				body: "💝 YE LO BBY FRENCH FRIES KHAO 🍟\n\n[Creator-Miss. Priya]",
				attachment: 
fs.createReadStream(__dirname + `/cache/french.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("☑", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }