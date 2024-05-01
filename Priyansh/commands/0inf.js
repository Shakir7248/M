module.exports.config = {
	name: "info",
	version: "1.0.1", 
	hasPermssion: 0,
	credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭",
	description: "Admin and Bot info.",
	commandCategory: "...",
	cooldowns: 1,
	dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【HH:mm:ss】");
var link =                                     
["https://i.imgur.com/GMBpQCG.jpg","https://i.imgur.com/aEMSy4t.jpg","https://i.imgur.com/MfSfxfq.jpg","https://i.imgur.com/iXlteLy.jpg","https://i.imgur.com/cfHdffL.jpg","https://i.imgur.com/YVczVn6.jpg","https://i.imgur.com/7gR1kHH.jpg"];
var callback = () => api.sendMessage({body:`🙌𝐁𝐎𝐓 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐓𝐈𝐎𝐍🙌

𝐁𝐎𝐓 𝐍𝐀𝐌𝐄 【${global.config.BOTNAME}】

🙈𝐁𝐎𝐓 𝐎𝐖𝐍𝐄𝐑 𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊 𝐋𝐈𝐍𝐊🙈➪ https://www.facebook.com/profile.php?id=100092692942495&mibextid=ZbWKwL

✧══════•❁•══════✧

🌸𝐁𝐎𝐓 𝐏𝐑𝐎𝐅𝐈𝐗🌸☞︎︎︎ ${global.config.PREFIX}☜︎︎︎✰

♥️𝐁𝐎𝐓 𝐎𝐖𝐍𝐄𝐑♥️ ☞︎︎︎𝐏𝐑𝐈𝐘𝐀🤩☜︎︎︎✰ 

🥳𝐔𝐏𝐓𝐈𝐌𝐄🥳

🌪️𝐓𝐎𝐃𝐀𝐘 𝐈𝐒🌪️ ☞︎︎︎ ${juswa} ☜︎︎︎✰

⚡𝐁𝐎𝐓 𝐈𝐒 𝐑𝐔𝐍𝐍𝐈𝐍𝐆⚡ ${hours}:${minutes}:${seconds}.

✅𝐓𝐇𝐀𝐍𝐊𝐒 𝐅𝐎𝐑 𝐔𝐒𝐈𝐍𝐆 ${global.config.BOTNAME} 𝐁𝐎𝐓🖤


🦢🍒•••ꞪɛᏒɛ ɪʂ ɮ❍┼ ❍ωɳɜɽ ɳaʍɜ•••🌷💞
┏━━━°❀•°::°•❀°━━━┓\n          ✦ 𝐏𝐑𝐈𝐘𝐀 ✦
┗━━━°❀•°::°•❀°━━━┛


`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };