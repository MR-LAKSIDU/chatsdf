const { makeid } = require('./gen-id');
const express = require('express');
const fs = require('fs');
let router = express.Router();
const pino = require("pino");
const { default: makeWASocket, useMultiFileAuthState, delay, Browsers, makeCacheableSignalKeyStore, getAggregateVotesInPollMessage, DisconnectReason, WA_DEFAULT_EPHEMERAL, jidNormalizedUser, proto, getDevice, generateWAMessageFromContent, fetchLatestBaileysVersion, makeInMemoryStore, getContentType, generateForwardMessageContent, downloadContentFromMessage, jidDecode } = require('@whiskeysockets/baileys')

const { upload } = require('./mega');
function removeFile(FilePath) {
    if (!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true });
}
router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;
    async function GIFTED_MD_PAIR_CODE() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/' + id);
        try {
var items = ["Safari"];
function selectRandomItem(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}
var randomItem = selectRandomItem(items);
            
            let sock = makeWASocket({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({ level: "fatal" }).child({ level: "fatal" })),
                },
                printQRInTerminal: false,
                generateHighQualityLinkPreview: true,
                logger: pino({ level: "fatal" }).child({ level: "fatal" }),
                syncFullHistory: false,
                browser: Browsers.macOS(randomItem)
            });
            if (!sock.authState.creds.registered) {
                await delay(1500);
                num = num.replace(/[^0-9]/g, '');
                const code = await sock.requestPairingCode(num);
                if (!res.headersSent) {
                    await res.send({ code });
                }
            }
            sock.ev.on('creds.update', saveCreds);
            sock.ev.on("connection.update", async (s) => {

    const {
                    connection,
                    lastDisconnect
                } = s;
                
                if (connection == "open") {
                    await delay(5000);
                    let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                    let rf = __dirname + `/temp/${id}/creds.json`;
                    function generateRandomText() {
                        const prefix = "3EB";
                        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
                        let randomText = prefix;
                        for (let i = prefix.length; i < 22; i++) {
                            const randomIndex = Math.floor(Math.random() * characters.length);
                            randomText += characters.charAt(randomIndex);
                        }
                        return randomText;
                    }
                    const randomText = generateRandomText();
                    try {


                        
                        const { upload } = require('./mega');
                        const mega_url = await upload(fs.createReadStream(rf), `${sock.user.id}.json`);
                        const string_session = mega_url.replace('https://mega.nz/file/', '');
                        let md = "" + string_session;
                        let code = await sock.sendMessage(sock.user.id, { text: md });
                        let desc = `┏━━━━━━━━━━━━━━
┃┏════════════❐
┃𝐐𝐔𝐄𝐄𝐍 𝐒𝐀𝐊𝐔𝐍𝐈 𝐒𝐈𝐒𝐒𝐈𝐎𝐍 𝐈𝐒🥰💚
┃𝐒𝐔𝐂𝐂𝐄𝐒𝐒𝐅𝐔𝐋𝐋𝐘🥰🍒
┃𝐂𝐎𝐍𝐍𝐄𝐂𝐓𝐄𝐃 ✅🔥
┃ ┗════════════❐
┗━━━━━━━━━━━━━━━
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❶ || 𝑪𝑹𝑬𝑻𝑨𝑫 𝑩𝒀 = 𝕄ℝ ℂ𝕐𝔹𝔸ℝ 𝕊𝕀𝕋ℍ𝕌𝕎𝔸👨🏻‍💻
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❷ || 𝑾𝑯𝑨𝑻𝑺𝑨𝑷𝑷 𝑪𝑯𝑨𝑵𝑵𝑬𝑳 =https://whatsapp.com/channel/0029Vaxfjb1HrDZWrPQZs51Z
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❸ || 𝑶𝑾𝑵𝑬𝑹 = https://wa.me/+94752902163
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❹ || 𝑮𝑰𝑻𝑯𝑼𝑩 𝑹𝑰𝑷𝑶 = https://github.com/CKODTCHANU/QUEEN-SAKUNI-MD
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
 ❺ || 𝒀𝑶𝑼𝑻𝑼𝑩𝑬 𝑪𝑯𝑨𝑵𝑵𝑬𝑳 = https://www.youtube.com/@OshadhaNilaweera
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
🥰💚🍒𝐐𝐔𝐄𝐄𝐍 𝐒𝐀𝐊𝐔𝐍𝐈-𝐌𝐃🍒💚🥰
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
▬▬▬▬▬▬▬▬▬▬▬▬▬▬

💗😘....ℚ𝕌𝔼𝔼ℕ 𝕊𝔸𝕂𝕌ℕ𝕀-𝕄𝔻 𝔹𝕆𝕋 𝕀𝕊 𝕊𝕀𝕄ℙ𝕃𝔼 𝕎𝔸 𝔹𝕆𝕋 ℕ𝕆𝕎 𝔼ℕ𝕁𝕆𝕐 𝕊ℙ𝔼𝔼𝔻 𝔸ℕ𝔻 𝔽𝔸𝕊𝕋 ....😘💗

▬▬▬▬▬▬▬▬▬▬▬▬▬▬
▬▬▬▬▬▬▬▬▬▬▬▬▬▬

🍒𝙲𝚁𝙰𝚃𝙴𝙳 𝙱𝚈©𝙾𝚆𝙽𝙴𝚁 𝙱𝚈 𝙲𝚈𝙱𝙰𝚁 𝚂𝙸𝚃𝙷𝚄𝚆𝙰💗

▬▬▬▬▬▬▬▬▬▬▬▬▬▬
▬▬▬▬▬▬▬▬▬▬▬▬▬▬`; 
                        await sock.sendMessage(sock.user.id, {
text: desc,
contextInfo: {
externalAdReply: {
title: "ℚ𝕌𝔼𝔼ℕ 𝕊𝔸𝕂𝕌ℕ𝕀-𝕄𝔻�",
thumbnailUrl: "https://i.ibb.co/Rp1JkMpR/Whats-App-Image-2025-03-04-at-9-27-58-PM.jpg",
sourceUrl: "https://whatsapp.com/channel/0029Vaxfjb1HrDZWrPQZs51Z",
mediaType: 1,
renderLargerThumbnail: true
}  
}
},
{quoted:code })
                    } catch (e) {
                            let ddd = sock.sendMessage(sock.user.id, { text: e });
                            let desc = `*Don't Share with anyone this code use for deploy ℚ𝕌𝔼𝔼ℕ 𝕊𝔸𝕂𝕌ℕ𝕀-𝕄𝔻\n\n ◦ *Github:* https://github.com/CKODTCHANU/QUEEN-SAKUNI-MD`;
                            await sock.sendMessage(sock.user.id, {
text: desc,
contextInfo: {
externalAdReply: {
title: "ℚ𝕌𝔼𝔼ℕ 𝕊𝔸𝕂𝕌ℕ𝕀-𝕄�",
thumbnailUrl: "https://i.ibb.co/Rp1JkMpR/Whats-App-Image-2025-03-04-at-9-27-58-PM.jpg",
sourceUrl: "https://whatsapp.com/channel/0029Vaxfjb1HrDZWrPQZs51Z",
mediaType: 2,
renderLargerThumbnail: true,
showAdAttribution: true
}  
}
},
{quoted:ddd })
                    }
                    await delay(10);
                    await sock.ws.close();
                    await removeFile('./temp/' + id);
                    console.log(`👤 ${sock.user.id} 𝗖𝗼𝗻𝗻𝗲𝗰𝘁𝗲𝗱 ✅ 𝗥𝗲𝘀𝘁𝗮𝗿𝘁𝗶𝗻𝗴 𝗽𝗿𝗼𝗰𝗲𝘀𝘀...`);
                    await delay(10);
                    process.exit();
                } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10);
                    GIFTED_MD_PAIR_CODE();
                }
            });
        } catch (err) {
            console.log("service restated");
            await removeFile('./temp/' + id);
            if (!res.headersSent) {
                await res.send({ code: "❗ Service Unavailable" });
            }
        }
    }
   return await GIFTED_MD_PAIR_CODE();
});/*
setInterval(() => {
    console.log("☘️ 𝗥𝗲𝘀𝘁𝗮𝗿𝘁𝗶𝗻𝗴 𝗽𝗿𝗼𝗰𝗲𝘀𝘀...");
    process.exit();
}, 180000); //30min*/
module.exports = router;
