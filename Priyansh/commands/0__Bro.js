module.exports.config = {
    name: "bro",
    version: "7.3.1",
    hasPermssion: 0,
    credits: " Priyansh Rajput", 
    description: "Get Pair From Mention",
    commandCategory: "png",
    usages: "[@mention]",
    cooldowns: 5, 
    dependencies: {
        "axios": "",
        "fs-extra": "",
        "path": "",
        "jimp": ""
    }
};

module.exports.onLoad = async() => {
    const { resolve } = global.nodemodule["path"];
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { downloadFile } = global.utils;
    const dirMaterial = __dirname + `/cache/canvas/`;
    const path = resolve(__dirname, 'cache/canvas', 'sis.png');
    if (!existsSync(dirMaterial + "canvas")) mkdirSync(dirMaterial, { recursive: true });
    if (!existsSync(path)) await downloadFile("https://i.imgur.com/n2FGJFe.jpg", path); 
}

async function makeImage({ one, two }) {
    const fs = global.nodemodule["fs-extra"];
    const path = global.nodemodule["path"];
    const axios = global.nodemodule["axios"]; 
    const jimp = global.nodemodule["jimp"];
    const __root = path.resolve(__dirname, "cache", "canvas");

    let batgiam_img = await jimp.read(__root + "/sis.png");
    let pathImg = __root + `/batman${one}_${two}.png`;
    let avatarOne = __root + `/avt_${one}.png`;
    let avatarTwo = __root + `/avt_${two}.png`;
    
    let getAvatarOne = (await axios.get(`https://graph.facebook.com/${one}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: 'arraybuffer' })).data;
    fs.writeFileSync(avatarOne, Buffer.from(getAvatarOne, 'utf-8'));
    
    let getAvatarTwo = (await axios.get(`https://graph.facebook.com/${two}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: 'arraybuffer' })).data;
    fs.writeFileSync(avatarTwo, Buffer.from(getAvatarTwo, 'utf-8'));
    
    let circleOne = await jimp.read(await circle(avatarOne));
    let circleTwo = await jimp.read(await circle(avatarTwo));
    batgiam_img.composite(circleOne.resize(191, 191), 93, 111).composite(circleTwo.resize(190, 190), 434, 107);
    
    let raw = await batgiam_img.getBufferAsync("image/png");
    
    fs.writeFileSync(pathImg, raw);
    fs.unlinkSync(avatarOne);
    fs.unlinkSync(avatarTwo);
    
    return pathImg;
}
async function circle(image) {
    const jimp = require("jimp");
    image = await jimp.read(image);
    image.circle();
    return await image.getBufferAsync("image/png");
}

module.exports.run = async function ({ event, api, args }) {    
    const fs = global.nodemodule["fs-extra"];
    const { threadID, messageID, senderID } = event;
    const mention = Object.keys(event.mentions);
    if (!mention[0]) return api.sendMessage("Kisi 1 ko mantion to kr tootiye 😅", threadID, messageID);
    else {
        const one = senderID, two = mention[0];
        return makeImage({ one, two }).then(path => api.sendMessage({ body: "✧•❁𝐌𝐢𝐬𝐬..𝐏𝐫𝐢𝐲𝐚❁•✧\n\n╔═══❖••° °••❖═══╗\n\n   𝐒𝐮𝐜𝐜𝐞𝐬𝐬𝐟𝐮𝐥 𝐏𝐚𝐢𝐫𝐢𝐧𝐠\n\n╚═══❖••° °••❖═══╝\n\n   ✶⊶⊷⊷❍⊶⊷⊷✶\n\n𝕄𝕖𝕣𝕒 𝕓𝕙𝕒𝕚 𝕞𝕖𝕣𝕒 𝕓𝕖𝕤𝕥 𝕗𝕣𝕚𝕖𝕟𝕕 𝕙...😘\n     𝕄𝕦𝕛𝕙𝕖 𝕡𝕥𝕒 𝕙 𝕜𝕚 𝕛𝕓..\n    𝕡𝕦𝕣𝕚 𝕕𝕦𝕟𝕚𝕪𝕒 𝕓𝕙𝕚 𝕞𝕖𝕣𝕖 𝕒𝕘𝕒𝕚𝕟𝕤𝕥 𝕙𝕠𝕘𝕚 𝕟𝕒...\n𝕋𝕓 𝕓𝕙𝕚 𝕨𝕠 𝕞𝕖𝕣𝕖 𝕤𝕒𝕥𝕙 𝕜𝕙𝕒𝕕𝕒 𝕙𝕠𝕘𝕒..🫶❤️\n     𝔸𝕦𝕣 𝕞𝕦𝕛𝕙𝕖 𝕜𝕒𝕙 𝕣𝕙𝕒 𝕙𝕠𝕘𝕒...\n𝕎𝕒𝕚𝕤𝕖 𝕥𝕠 𝕥𝕦 𝕒𝕕𝕠𝕡𝕥𝕖𝕕 𝕙..🤭😁\n    𝕃𝕖𝕜𝕚𝕟 𝕞𝕒𝕚𝕟 𝕥𝕖𝕣𝕖 𝕤𝕒𝕥𝕙 𝕙𝕦..🫂❤️🧿\n\n       👑𝐘𝐄 𝐋𝐄 𝐌𝐈𝐋 𝐆𝐘𝐀❤\n\n𝐓𝐄𝐑𝐀 𝐁𝐑𝐎𝐓𝐇𝐄𝐑 🩷\n\n   ✶⊶⊷⊷❍⊶⊷⊷✶", attachment: fs.createReadStream(path) }, threadID, () => fs.unlinkSync(path), messageID));
    }
      }