const fs = require('fs-extra')
const { 
    prefix
} = JSON.parse(fs.readFileSync('./settings/setting.json'))

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textTnC = () => {
    return `
Source code / bot ini merupakan program open-source (gratis) yang ditulis menggunakan Javascript, kamu dapat menggunakan, menyalin, memodifikasi, menggabungkan, menerbitkan, mendistribusikan, mensublisensikan, dan atau menjual salinan dengan tanpa menghapus author utama dari source code / bot ini.

`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textMenu = (pushname) => {
    return `
Hi, *${pushname}!*


Berikut adalah beberapa fitur yang ada pada bot ini!✨
+=======================+    
| *${prefix}sticker*
| *${prefix}ping*
| *${prefix}slightning*
| *${prefix}stickerfire*
| *${prefix}stickergif*
| *${prefix}stickergiphy*
| *${prefix}toimg*
| *${prefix}meme*
| *${prefix}nulis*
| *${prefix}quotemaker*
| *${prefix}rate*
| *${prefix}kapan*
| *${prefix}apakah*
| *${prefix}bisakah*
| *${prefix}infosurah*
| *${prefix}tafsir*
| *${prefix}ALaudio*
| *${prefix}katakasar*
| *${prefix}klasmen*
| *${prefix}artinama*
| *${prefix}cekjodoh*
| *${prefix}game*
| *${prefix}howgay*
| *${prefix}images*
| *${prefix}sreddit*
| *${prefix}resep*
| *${prefix}wiki*
| *${prefix}cuaca*
| *${prefix}chord*
| *${prefix}lirik*
| *${prefix}movie*
| *${prefix}wait*
| *${prefix}aiquote*
| *${prefix}doggo*
| *${prefix}fakta*
| *${prefix}katabijak*
| *${prefix}quote*
| *${prefix}puisi*
| *${prefix}anime*
| *${prefix}kpop*
| *${prefix}memes*
| *${prefix}tts*
| *${prefix}resi*
| *${prefix}covidindo*
| *${prefix}shortlink*
| *${prefix}zeusfont*
| *${prefix}linkgrup*
| *${prefix}adminList*
| *${prefix}ownergrup*
| *${prefix}me*
| *${prefix}listban*
| *${prefix}listblock*
| *${prefix}groupinfo*
| *${prefix}dewabatch*
| *${prefix}howmuch*
| *${prefix}mtk*
| *${prefix}google*
| *${prefix}ptl*
| *${prefix}grupbot*
| *${prefix}read*
| *${prefix}getpic @tagmember*
| *${prefix}santet*
| *${prefix}saylist*
| *${prefix}addsay*
| *${prefix}say*
| *${prefix}delsay*
| *${prefix}listbacot*
| *${prefix}addbacot*
| *${prefix}bacot*
| *${prefix}delbacot*
| *${prefix}jadian*
| *${prefix}mystat*
| *${prefix}kbbi*
| *${prefix}logopornhub*
| *${prefix}infobmkg*
| *${prefix}bucin*
| *${prefix}rhug*
| *${prefix}slap*
| *${prefix}waifu*
| *${prefix}nsfwgif*
| *${prefix}bjgif*
| *${prefix}cumgif*
| *${prefix}kissgif*
| *${prefix}rhentai*
| *${prefix}bjanime*
| *${prefix}gifhentai*
| *${prefix}baka*
| *${prefix}animeavatar*
| *${prefix}neko*
| *${prefix}loli*
| *${prefix}wallpaper*
| *${prefix}wallpaper2*
| *${prefix}wpanime*
| *${prefix}nekonsfw*
| *${prefix}ameliandani*
| *${prefix}pictcogan*
| *${prefix}pictcecan*
| *${prefix}aesthetic*
| *${prefix}donasi*
| *${prefix}motivasi*
| *${prefix}fakboy*
| *${prefix}botstat*
| *${prefix}ownerbot*
| *${prefix}join*
| *${prefix}ban* - banned
| *${prefix}bc* - promosi
| *${prefix}leaveall* - keluar semua grup
| *${prefix}clearall* - hapus semua chat
| *${prefix}setstatus*
| *${prefix}setpic*
| *${prefix}screen*
| *${prefix}add*
| *${prefix}kick* @tag
| *${prefix}promote* @tag
| *${prefix}demote* @tag
| *${prefix}tagall*
| *${prefix}del*
| *${prefix}mutegrup on/off*
| *${prefix}setprofile*
| *${prefix}revoke link gc*
| *${prefix}setgroupname*
| *${prefix}resend*
| *${prefix}18+*
| *${prefix}18+2*
| *${prefix}antilink on/off*
| *${prefix}edotensei*
| *${prefix}kickall*
| *${prefix}fb*
| *${prefix}logoml*
| *${prefix}kpop*
| *${prefix}ig*
| *${prefix}sandwriting*
| *${prefix}tiktokpic*
| *${prefix}tahta*
| *${prefix}artimimpi*
| *${prefix}family100*
| *${prefix}playstore*
| *${prefix}shopee*
| *${prefix}kusonime*
| *${prefix}xxxsearch*
| *${prefix}glitch*
| *${prefix}distance*
| *${prefix}citacita*
| *${prefix}emojisticker*
| *${prefix}jadwalbola*
| *${prefix}caklontong*
| *${prefix}tebakgambar*
| *${prefix}tiktok*
| *${prefix}asupan*
| *${prefix}thundertext*
| *${prefix}slidingtext*
| *${prefix}text3d*
| *${prefix}glowtext*
| *${prefix}romancetext*
| *${prefix}silktext*
| *${prefix}partytext*
| *${prefix}kutuk*
| *${prefix}stickertext*
| *${prefix}hartatahta*
| *${prefix}mascotlogo*
| *${prefix}lovemessagetext*
| *${prefix}nulis2*
| *${prefix}ytmp3*
| *${prefix}ytmp4*
| *${prefix}lion*
| *${prefix}wolf2*
| *${prefix}wolf*
| *${prefix}mapz*
| *${prefix}ninja*
| *${prefix}alkitab*
| *${prefix}marvel*
| *${prefix}twitter*
| *${prefix}ssweb*
| *${prefix}gsmarena*
| *${prefix}stalktik*
| *${prefix}quotesen*
| *${prefix}logoff*
| *${prefix}spamcall*
| *${prefix}spamcall2*
| *${prefix}qrcode*
| *${prefix}qrread*
| *${prefix}koin*
| *${prefix}dadu*
| *${prefix}blackpink*
| *${prefix}galaxytext*
| *${prefix}tomp3*
| *${prefix}detail*
| *${prefix}nhpdf*
| *${prefix}infoalamat*
| *${prefix}igstory*
+====================+
*JOIN GRUP BOT*
https://chat.whatsapp.com/CtFJ2onIGU47020JQZGsyp
_*Bot agak slow respon jadi sabar aja sampai selesai proses.*_\n*No spam ya!!!!!.*
_owner number_ : wa.me/6282139549692


`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textDonasi = () => {
    return `
Hai, terimakasih telah menggunakan bot ini, ga usah donasi gan bot ini gratis kok..
Doakan aja agar project bot ini bisa terus berkembang
Doakan agar author bot ini dapat ide-ide yang kreatif lagi

bantu share supaya banyak orng diluar sana yang menikmati bot ini.

Terimakasih. ~Zeus`
}
