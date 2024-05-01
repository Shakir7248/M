module.exports.config = {
	name: "bye",
  version: "7.3.1",
	hasPermssion: 0,
	credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭", 
	description: "Just Respond",
	commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = async function({ api, event, client, Users, __GLOBAL }) {
	var { threadID, messageID } = event;
	var name = await Users.getNameUser(event.senderID);
	if (event.body.indexOf("BYE")==0 || event.body.indexOf("Bye")==0 || event.body.indexOf("bye")==0 || event.body.indexOf("By")==0 || event.body.indexOf("BY")==0 || event.body.indexOf("by")==0 || event.body.indexOf("Tata")==0 || event.body.indexOf("See you")==0 || event.body.indexOf("Baye")==0 || event.body.indexOf("baye")==0 ) { 
		var msg = {
				body: `BYE BYE ALLAH HAFIZ SEE YOU ${name} 🙌😗🤙`
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😗", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
