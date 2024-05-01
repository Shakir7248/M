module.exports.config = {
  name: "6mui",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "𝙋𝙧𝙞𝙮𝙖𝙣𝙨𝙝 𝙍𝙖𝙟𝙥𝙪𝙩",
  description: "Random 6-pack photos",
  commandCategory: "Random-IMG",
  usages: "6mui",
  cooldowns: 2,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
    
};

module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
"","https://i.imgur.com/S4jY1V4.jpg","https://i.imgur.com/8aZVYdy.jpg","https://i.imgur.com/QqKPvb4.jpg","https://i.imgur.com/aDZeZ3q.jpg","https://i.imgur.com/CZdkRom.jpg","https://i.imgur.com/hLXWad9.jpg","https://i.imgur.com/iKzmETX.jpg","https://i.imgur.com/jfXVHAH.jpg","https://i.imgur.com/fVj8Md7.jpg","https://i.imgur.com/v9lyGEs.jpg","https://i.imgur.com/NFguHww.jpg","https://i.imgur.com/ihkpAIz.jpg","https://i.imgur.com/tk6cYgj.jpg"
     ];
     var callback = () => api.sendMessage({body:`Agar Tum Gay Nhi Ho To Ye Dekho Mr.Parfect K Six Pack -.-`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
   };