module.exports.config = {
  name: "pair",
  version: "1.0.0", 
  hasPermssion: 0,
  credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭",
  description: "0Pairing",
  commandCategory: "Love", 
  usages: "pair", 
  cooldowns: 0
};
module.exports.run = async function({ api, event, args, Users, Threads, Currencies }) {
        const axios = global.nodemodule["axios"];
        const fs = global.nodemodule["fs-extra"];
        // var data = await Currencies.getData(event.senderID);
        var money = data.money
        if(money < 1) api.sendMessage("You need 500 USD for 1 pairing, please use ${global.config.PREFIX}work to received money or ask for admin bot!\n🤑Theres something new to eat🤑",event.threadID,event.messageID)
        else {
         var tl = ['𝙆𝙍 𝙇𝙄 𝙅𝙄𝙉𝘿𝙂𝙄 𝘽𝘼𝙍𝘽𝘼𝘿 𝘼𝘽 𝙍𝘼𝙃 𝘾𝙃𝙐𝘿𝘼𝙄𝙇 𝙆 𝙎𝘼𝙏𝙃 😁😅', 'शाम सवेरे अब मैं जोरू जोरू कहूंग मैं जोरू का गुलाम बनके रहूंगा 🫣🤭😂', '🅃🄴🅁🄴 🅃🄾 [🄻] 🄻🄰🄶 🄶🄰🅈🄴 🄱🄴🅃🄰 😀😅', '🅕🅐🅢 🅖🅨🅐 🅓🅔🅚🅗🅞 🅨 🅑🅔🅒🅗🅐🅡🅐 😐😂', '𝕍𝕒𝕣 𝕓𝕒𝕕𝕙𝕦 𝕜𝕚 𝕞𝕒𝕟𝕘 𝕞 𝕤𝕚𝕟𝕕𝕦𝕣 𝕓𝕙𝕒𝕣𝕠 😀😁', '𝐒𝐡𝐚𝐝𝐢 𝐦𝐞 𝐚𝐚𝐧𝐞 𝐬𝐞 𝐚𝐚𝐩 𝐧𝐚 𝐬𝐡𝐚𝐫𝐦𝐚𝐧𝐚 𝐡𝐮𝐦𝐚𝐫𝐞 𝐩𝐲𝐚𝐫𝐞 𝐝𝐨𝐬𝐭𝐨 𝐤𝐢 𝐬𝐡𝐚𝐝𝐢 𝐦𝐞 𝐚𝐚𝐩 𝐳𝐚𝐫𝐮𝐫 𝐚𝐚𝐧𝐚 🤭😅', 'अब बार-बार मत बोलना सेटिंग करवाने को 😀🫣', 'रोली है चन्दन है रिश्तों का बन्धन है हमारे भईया और भाभी की शादी मै आपका अभिनन्दन है।😀😀', '𝘊𝘰𝘯𝘨𝘳𝘢𝘵𝘶𝘭𝘢𝘵𝘪𝘰𝘯𝘴 𝘨𝘳𝘰𝘰𝘮 𝘢𝘯𝘥 𝘣𝘳𝘪𝘥𝘦 𝘵𝘰 𝘣𝘦 🎉☺☺', '𝚂𝚊𝚍𝚊 𝚜𝚑𝚞𝚐𝚊𝚗 𝚛𝚊𝚑𝚘 🫣', '𝐉𝐚𝐨 𝐃𝐨𝐧𝐨 𝐌𝐣𝐞 𝐊𝐫𝐨 🤭', '𝐊𝐲𝐚 𝐌𝐬𝐭 𝐉𝐨𝐝𝐢 𝐇𝐚𝐢 ❤️‍🩹', '𝐀𝐛 𝐓𝐨 𝐌𝐢𝐥 𝐆𝐲𝐚 𝐏𝐚𝐫𝐭𝐧𝐞𝐫 😅', '𝐉𝐚 𝐊𝐡𝐮𝐬 𝐇𝐨𝐣𝐚 𝐎𝐫 𝐏𝐚𝐫𝐭𝐲 𝐃𝐞 😀', '𝐓𝐮𝐦 𝐃𝐨𝐧𝐨 𝐊𝐨 𝐊𝐢𝐬𝐢 𝐊𝐢 𝐍𝐚𝐣𝐚𝐫 𝐍𝐚 𝐋𝐠𝐞 😆', '𝐓𝐮𝐦 𝐃𝐨𝐧𝐨 𝐇𝐮𝐦𝐞𝐬𝐡𝐚 𝐋𝐚𝐝𝐭𝐞 𝐑𝐡𝐨 😅', '𝐓𝐮𝐦𝐡𝐚𝐫𝐢 𝐑𝐚𝐛 𝐍𝐞 𝐁𝐧𝐚 𝐃𝐢 𝐉𝐨𝐝𝐢 😀', '𝐀𝐛 𝐓𝐮𝐦 𝐒𝐢𝐧𝐠𝐞𝐥 𝐍𝐡𝐢 𝐌𝐫𝐨𝐠𝐞 😀', '𝐉𝐚𝐨 𝐁𝐞𝐭𝐚 𝐇𝐞𝐧𝐲𝐦𝐨𝐨𝐧 𝐁𝐧𝐚𝐨 🤭', '𝐋𝐞 𝐀𝐛 𝐒𝐡𝐚𝐝𝐢 𝐊 𝐂𝐚𝐫𝐝 𝐁𝐚𝐧𝐰𝐚 𝐋𝐨 😅', '𝐀𝐛 𝐓𝐮𝐦 𝐃𝐨𝐧𝐨 𝐈𝐧𝐛𝐨𝐱 𝐌 𝐣𝐚𝐨 😀', '𝐉𝐨𝐝𝐢 𝐓𝐨 𝐌𝐢𝐥 𝐆𝐚𝐢 𝐀𝐛 𝐌𝐮𝐣𝐡𝐞 𝐌𝐭 𝐁𝐡𝐮𝐥 𝐉𝐚𝐧𝐚 😀', "𝐊𝐫 𝐋𝐨 𝐀𝐚𝐩𝐬 𝐌 𝐍𝐨. 𝐄𝐱𝐜𝐡𝐚𝐧𝐠𝐞 😀", "𝐉𝐨𝐝𝐢 𝐌𝐢𝐥 𝐆𝐚𝐢 𝐊𝐡𝐮𝐬 𝐊𝐡𝐚𝐛𝐫𝐢  𝐊𝐛 𝐃𝐨𝐠𝐞 🤭😅"];
        var tle = tl[Math.floor(Math.random() * tl.length)];
        let dataa = await api.getUserInfo(event.senderID);
        let namee = await dataa[event.senderID].name
        let loz = await api.getThreadInfo(event.threadID);
        var emoji = loz.participantIDs;
        var id = emoji[Math.floor(Math.random() * emoji.length)];
        let data = await api.getUserInfo(id);
        let name = await data[id].name
        var arraytag = [];
                arraytag.push({id: event.senderID, tag: namee});
                arraytag.push({id: id, tag: name});
        // api.changeNickname(`😘👉🔐🔐 ${name} Property 🔐🔐👈😘`, event.threadID, event.senderID);
        // api.changeNickname(`😘👉🔐🔐 ${namee} Property🔐🔐👈😘`, event.threadID, id);
        var sex = await data[id].gender;
        var gender = sex == 2 ? "89%" : sex == 1 ? "93%" : "99%";
        // Currencies.setData(event.senderID, options = {money: money - 500})
        let Avatar = (await axios.get( `https://graph.facebook.com/${id}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: "arraybuffer" } )).data;
            fs.writeFileSync( __dirname + "/cache/avt.png", Buffer.from(Avatar, "utf-8") );

          let gifLove = (await axios.get( `https://i.imgur.com/KLHKwMh.gif`, { responseType: "arraybuffer" } )).data; 
              fs.writeFileSync( __dirname + "/cache/giflove.png", Buffer.from(gifLove, "utf-8") );
          
        let Avatar2 = (await axios.get( `https://graph.facebook.com/${event.senderID}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: "arraybuffer" } )).data;
            fs.writeFileSync( __dirname + "/cache/avt2.png", Buffer.from(Avatar2, "utf-8") );
        var imglove = [];
              imglove.push(fs.createReadStream(__dirname + "/cache/avt.png"));
              imglove.push(fs.createReadStream(__dirname + "/cache/giflove.png"));
              imglove.push(fs.createReadStream(__dirname + "/cache/avt2.png"));
        var msg = {body: `    「 💝 ℙ𝔸𝕀ℝ𝕀ℕ𝔾 💝 」\n  🅂🅄🄲🄲🄴🅂🅂🄵🅄🄻\n\n${tle}\n\nLove 🫶 Ratio : ${gender}\n\n𝐌𝐚𝐝𝐞 𝐁𝐲 : 𝐌𝐢𝐬𝐬..𝐏𝐫𝐢𝐲𝐚\n\n`+name+" "+"  💖  "+" "+namee, mentions: arraytag, attachment: imglove}
        // var msg = {body: `🥰Successful pairing!\n💌Wish you two hundred years of happiness\n💕Double ratio: ${tle}%\n`+namee+" "+"💓"+" "+name, mentions: arraytag, attachment: imglove}  
         return api.sendMessage(msg, event.threadID, event.messageID)
      }
}