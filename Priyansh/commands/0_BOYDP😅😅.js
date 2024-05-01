module.exports.config = {
  name: "boy",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "PREM BABU",
  description: "Girl Dp photos",
  commandCategory: "Random-IMG",
  usages: "boydp",
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
"https://i.imgur.com/iePQzkE.jpg","https://i.imgur.com/ucKyjGC.jpg","https://i.imgur.com/gSKfZ0U.jpg","https://i.imgur.com/Wh3wqoA.jpg","https://i.imgur.com/jSLKrrn.jpg","https://i.imgur.com/tCWNpUK.jpg","https://i.imgur.com/WiDZRpi.jpg","https://i.imgur.com/5KXMhpb.jpg","https://i.imgur.com/4KDtXtQ.jpg","https://i.imgur.com/qGtt0eU.jpg","https://i.imgur.com/GlPh4m1.jpg","https://i.imgur.com/lO9QtYY.jpg","https://i.imgur.com/jPbHPfz.jpg","https://i.imgur.com/Qzvm0Fs.jpg","https://i.imgur.com/iU1NM92.jpg","https://i.imgur.com/KIoziGA.jpg","https://i.imgur.com/cW1PbC0.jpg","https://i.imgur.com/8JklvdT.jpg","https://i.imgur.com/L5K1uNU.jpg","https://i.imgur.com/qjtyemd.jpg","https://i.imgur.com/3RI6zoZ.jpg","https://i.imgur.com/Md0FUGe.jpg","https://i.imgur.com/4b34X48.jpg","https://i.imgur.com/x6msOv4.jpg","https://i.imgur.com/pHnd4Y3.jpg","https://i.imgur.com/biYCcMq.jpg","https://i.imgur.com/ggkTTm0.jpg","https://i.imgur.com/n1t5PiR.jpg","https://i.imgur.com/NFxicGE.jpg","https://i.imgur.com/poRaKr5.jpg","https://i.imgur.com/ITlJfJ1.jpg","https://i.imgur.com/nYfvAxO.jpg","https://i.imgur.com/amrV4D3.jpg","https://i.imgur.com/jXTJ4ys.jpg","https://i.imgur.com/7QhLAqS.jpg","https://i.imgur.com/IsZQDof.jpg","https://i.imgur.com/E9bV3dy.jpg","https://i.imgur.com/9jiYtGx.jpg","https://i.imgur.com/a4Ed47q.jpg","https://i.imgur.com/BsfPGOF.jpeg","https://i.imgur.com/h0C5puK.jpeg","https://i.imgur.com/qpgBE0X.jpeg","https://i.imgur.com/f0HFaCv.jpeg","https://i.imgur.com/a4vo9Cv.jpeg","https://i.imgur.com/J7PAAuR.jpeg","https://i.imgur.com/OG7CCAz.jpeg","https://i.imgur.com/tqnzYDJ.jpeg","https://i.imgur.com/3ItPOnW.jpeg","https://i.imgur.com/yCkue9w.jpeg","https://i.imgur.com/jx6VfM6.jpeg","https://i.imgur.com/h9kE3Ic.jpeg","https://i.imgur.com/nNJr9Dt.jpeg","https://i.imgur.com/wFSzYnF.jpeg","https://i.imgur.com/zJ1HFs8.jpeg","https://i.imgur.com/wsv4mWY.jpeg","https://i.imgur.com/r3UTDwz.jpeg","https://i.imgur.com/ZCYaMfF.jpeg","https://i.imgur.com/hSQWcAM.jpeg","https://i.imgur.com/ovX6lfA.jpeg","https://i.imgur.com/RgfrYpM.jpeg","https://i.imgur.com/DfvFLov.jpeg","https://i.imgur.com/GPwbrDj.jpeg","https://i.imgur.com/jSifYwo.jpeg","https://i.imgur.com/Chc5pLl.jpeg","https://i.imgur.com/HbznJXK.jpeg","https://i.imgur.com/OLKdt61.jpeg","https://i.imgur.com/tDNqmML.jpeg","https://i.imgur.com/yUwx4o4.jpeg","https://i.imgur.com/e4xWHUv.jpeg","https://i.imgur.com/q6LfLx0.jpeg","https://i.imgur.com/eoKKdzI.jpeg","https://i.imgur.com/n3DS2ha.jpeg","https://i.imgur.com/E5QWGCE.jpeg","https://i.imgur.com/44YNGf6.jpeg","https://i.imgur.com/fh8i2Ph.jpeg","https://i.imgur.com/EMazlEj.jpeg","https://i.imgur.com/Uz4RQSg.jpeg","https://i.imgur.com/INxT1BF.jpeg","https://i.imgur.com/jnU2FrO.jpeg","https://i.imgur.com/qFDKN6v.jpeg","https://i.imgur.com/m84lelb.jpeg","https://i.imgur.com/FmMsaOR.jpeg","https://i.imgur.com/Ln7It9C.jpeg","https://i.imgur.com/SZ9KznS.jpeg","https://i.imgur.com/WypMeee.jpeg","https://i.imgur.com/Zq9sgX0.jpeg","https://i.imgur.com/kIvSt9A.jpeg","https://i.imgur.com/g3R1fQh.jpeg","https://i.imgur.com/jv1LGtq.jpeg","https://i.imgur.com/lKkm83o.jpeg","https://i.imgur.com/Yuai95W.jpeg","https://i.imgur.com/FNWIrNo.jpeg","https://i.imgur.com/YUOScB2.jpeg","https://i.imgur.com/Gd8K8Cg.jpeg"
     ];
     var callback = () => api.sendMessage({body:`💝 𝐌𝐚𝐝𝐞 𝐁𝐲: 𝐌𝐢𝐬𝐬..𝐏𝐫𝐢𝐲𝐚`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
   };