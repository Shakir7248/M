module.exports.config = {
	name: "salam",
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
	if (event.body.indexOf("Assalamu o alikum")==0 || event.body.indexOf("Asalamu alaikum")==0 || event.body.indexOf("Asalamualaikum")==0 || event.body.indexOf("Salamu alaikum")==0 || event.body.indexOf("Aslam alekum")==0 || event.body.indexOf("S/A")==0 || event.body.indexOf("Assalam o Alaikum")==0 || event.body.indexOf("Asalam Alekum")==0 || event.body.indexOf("Aselamu alaikum")==0 || event.body.indexOf("Asalam alaikum")==0 ) { 
		var msg = {
				body: `━━━━❖❖💠❖❖━━━━
𑁍 WALEKUM ASSALAM 😍 𑁍
━━━━❖❖💠❖❖━━━━\n«࿙❰༗ོ⍣𓆩${name}𓆪ོ༗❱࿚»`
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😍", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
