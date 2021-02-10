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

exports.textMenu = (pushname, waver) => {
    return `
_Hi/Halo/Hai, *${pushname}!*_


Berikut adalah beberapa fitur yang ada pada *ZeusXz-Bot* ini!✨\n\n*Ingfo! :*\n_New fiture akan selalu dibawah sesuai katagory!._

\n*✪[ Admin Menu ]✪ :*
*┏━──────────────────╮*
*┃➥ #kick*
*┃➥ #add*
*┃➥ #klasemen*
*┃➥ #linkgrup*
*┃➥ #ownergrup*
*┃➥ #adminlist*
*┃➥ #me*
*┃➥ #katakasar*
*┃➥ #groupinfo*
*┃➥ #read*
*┃➥ #santet*
*┃➥ #promote*
*┃➥ #jadian*
*┃➥ #mystat*
*┃➥ #promote*
*┃➥ #demote*
*┃➥ #tagall*
*┃➥ #del*
*┃➥ #mutegrup*
*┃➥ #setprofile*
*┃➥ #revoke*
*┃➥ #setgroupname*
*┃➥ #antilik*
*┃➥ #edotensei*
*┃➥ #resend*
*┃➥ #kickall*
*┃➥ #maluser*
*┃➥ #getpic*
*┗━──────────────────╯*



*✪[ Downloader Menu ]✪ :*
*┏━──────────────────╮*
*┃➥ #igdwn*
*┃➥ #fbdwn*
*┃➥ #tiktokdwn*
*┃➥ #joox*
*┃➥ #ytmp3*
*┃➥ #ytmp4*
*┃➥ #play*
*┃➥ #msc*
*┃➥ #lagu*
*┃➥ #playvid*
*┃➥ #twitter*
*┃➥ #nhpdf*
*┃➥ #filmapikdownload*
*┃➥ #wattpad*
*┃➥ #wattpadstory*
*┃➥ #starwarsfilm*
*┃➥ #wonderwomanfilm*
*┃➥ #spidermanfilm*
*┃➥ #dunkirkfilm*
*┃➥ #1917film*
*┃➥ #ironmanfilm*
*┃➥ #jokerfilm*
*┃➥ #carsfilm*
*┃➥ #avengersfilm*
*┃➥ #ytdl*
*┃➥ #tiktokvid [link vidio tiktod]*
*┗━──────────────────╯*



*✪[ Search Menu ]✪ :*
*┏━──────────────────╮*
*┃➥ #artinama*
*┃➥ #cekjodoh*
*┃➥ #howgay*
*┃➥ #images*
*┃➥ #resep*
*┃➥ #wiki*
*┃➥ #cuaca*
*┃➥ #chord*
*┃➥ #lirik*
*┃➥ #movie*
*┃➥ #wait*
*┃➥ #google*
*┃➥ #googlesearch*
*┃➥ #infoalamat*
*┃➥ #pinterest*
*┃➥ #heroml*
*┃➥ #kbbi*
*┃➥ #nomorhoki*
*┃➥ #checkip*
*┃➥ #myzodiak*
*┃➥ #ceksange*
*┃➥ #moddroid*
*┃➥ #happymod*
*┃➥ #images2*
*┃➥ #brainly*
*┃➥ #weather*
*┃➥ #harijadi*
*┃➥ #brainly2*
*┃➥ #wikien*
*┃➥ #prediksicuaca*
*┃➥ #userig*
*┃➥ #translate*
*┃➥ #namemc*
*┃➥ #pinterest2*
*┃➥ #resepmasakan*
*┃➥ #apkpure*
*┃➥ #mapz*
*┃➥ #detail*
*┃➥ #stalktik*
*┃➥ #alkitab*
*┃➥ #kusonime*
*┃➥ #neonime*
*┃➥ #distance*
*┃➥ #matauang*
*┃➥ #kusonime2*
*┃➥ #stalktwit*
*┃➥ #dewabatch*
*┃➥ #iplocation*
*┃➥ #filmapik*
*┃➥ #lirik2*
*┃➥ #jadwaltv*
*┗━──────────────────╯*



*✪[ Random Menu ]✪ :*
*┏━──────────────────╮*
*┃➥ #memes*
*┃➥ #kpop*
*┃➥ #aiquote*
*┃➥ #doggo*
*┃➥ #fakta*
*┃➥ #bucin2*
*┃➥ #katabijak*
*┃➥ #quote*
*┃➥ #puisi*
*┃➥ #anime*
*┃➥ #bucin*
*┃➥ #wallpaper*
*┃➥ #wallpaper2*
*┃➥ #ameliandani*
*┃➥ #pictcogan*
*┃➥ #pictcecan*
*┃➥ #aesthetic*
*┃➥ #motivasi*
*┃➥ #fakboy*
*┃➥ #fml*
*┃➥ #memeindo*
*┃➥ #darkjokes*
*┃➥ #fotocewek*
*┃➥ #patrickgif*
*┃➥ #randomstiker*
*┃➥ #quotesen*
*┃➥ #kodenegara*
*┃➥ #katailham*
*┃➥ #katadilan*
*┃➥ #katahacker*
*┃➥ #katazeus*
*┃➥ #cerpen*
*┃➥ #randomgif*
*┃➥ #cersex*
*┃➥ #fucklife*
*┃➥ #zeusimg*
*┃➥ #fakta2*
*┃➥ #renungan*
*┃➥ #randomquran*
*┃➥ #retasidentitas*
*┃➥ #nickff*
*┃➥ #memeindo2*
*┗━──────────────────╯*



*✪[ Anime Random Menu ]✪ :*
*┏━──────────────────╮*
*┃➥ #wpanime*
*┃➥ #neko*
*┃➥ #animeavatar*
*┃➥ #baka*
*┃➥ #waifu*
*┃➥ #slap*
*┃➥ #rhug*
*┃➥ #doggo*
*┃➥ #pokegif*
*┃➥ #rwink*
*┃➥ #randompat*
*┃➥ #trapnime*
*┃➥ #tickle*
*┗━──────────────────╯*



*✪[ Text Maker Menu ]✪ :*
*┏━──────────────────╮*
*┃Note : Masih adaa menu yang error!*
*┃➥ #gneontext*
*┃➥ #tintatext*
*┃➥ #lovekayutext*
*┃➥ #textlight*
*┃➥ #screedtext*
*┃➥ #narutotext*
*┃➥ #floweartext*
*┃➥ #textcsgo*
*┃➥ #textcroos*
*┃➥ #textkayu*
*┃➥ #textwarace*
*┃➥ #textpubg*
*┃➥ #textkopi*
*┃➥ #textwater*
*┃➥ #textmetal*
*┃➥ #googletext*
*┃➥ #doublelovetext*
*┃➥ #textgrafity*
*┃➥ #textamerika*
*┃➥ #textfoil*
*┃➥ #textsummer*
*┃➥ #textwhite*
*┃➥ #textgplay*
*┃➥ #textjoker*
*┃➥ #galaxytext*
*┃➥ #blackpink*
*┃➥ #marvel*
*┃➥ #pornhub*
*┃➥ #wolf*
*┃➥ #lion*
*┃➥ #mascotlogo*
*┃➥ #hartatahta*
*┃➥ #tahta*
*┃➥ #partytext*
*┃➥ #silktext*
*┃➥ #romancetext*
*┃➥ #glowtext*
*┃➥ #slidingtext*
*┃➥ #thundertext*
*┃➥ #glitch*
*┃➥ #logoml*
*┃➥ #stikertext*
*┃➥ #logoff*
*┃➥ #goldpb*
*┃➥ #silverpb*
*┃➥ #stickmatrix*
*┃➥ #stickdarcula*
*┃➥ #sticklava*
*┃➥ #tickequal*
*┃➥ #zeusff*
*┃➥ #keytext*
*┃➥ #raingif*
*┃➥ #triggered*
*┃➥ #raingifimg*
*┃➥ #triggeredimg*
*┃➥ #wetglastext*
*┃➥ #styletext*
*┗━──────────────────╯*



*✪[ 18+ Menu ]✪ :*
*┏━──────────────────╮*
*┃➥ #anal*
*┃➥ #feetgif*
*┃➥ #lesbian*
*┃➥ #analimg*
*┃➥ #feetgifimg*
*┃➥ #lesbianimg*
*┃➥ #bindo*
*┃➥ #bkorea*
*┃➥ #bjapan*
*┃➥ #listhentai*
*┃➥ #nekopoinew*
*┃➥ #stikerhentai*
*┃➥ #bjanime*
*┃➥ #rhentai*
*┃➥ #kissgif*
*┃➥ #cumgif*
*┃➥ #bjgif*
*┃➥ #nsfwgif*
*┃➥ #18+*
*┃➥ #18+2*
*┃➥ #sologif*
*┃➥ #cuddle*
*┃➥ #kuni*
*┃➥ #classic*
*┃➥ #spank*
*┃➥ #ttgif*
*┗━──────────────────╯*



*✪[ Other Menu ]✪ :*
*┏━──────────────────╮*
*┃➥ #stiker*
*┃➥ #stikernobg*
*┃➥ #ping*
*┃➥ #stikergif*
*┃➥ #stickergiphy*
*┃➥ #toimg*
*┃➥ #join*
*┃➥ #meme*
*┃➥ #antivirtex*
*┃➥ #nulis*
*┃➥ #quotemaker*
*┃➥ #rate*
*┃➥ #kapan*
*┃➥ #bisakah*
*┃➥ #apakah*
*┃➥ #infosurah*
*┃➥ #tafsir*
*┃➥ #alaudio*
*┃➥ #game*
*┃➥ #sreddit*
*┃➥ #tts*
*┃➥ #resi*
*┃➥ #covidindo*
*┃➥ #shortlink*
*┃➥ #zeusfont*
*┃➥ #listban*
*┃➥ #listblock*
*┃➥ #howmuch*
*┃➥ #mtk*
*┃➥ #grupbot*
*┃➥ #saylist*
*┃➥ #addsay*
*┃➥ #listbacot*
*┃➥ #delbacot*
*┃➥ #addbacot*
*┃➥ #infobmkg*
*┃➥ #botstat*
*┃➥ #ownerbot*
*┃➥ #family100*
*┃➥ #tebakgambar2*
*┃➥ #citacita*
*┃➥ #emojisticker*
*┃➥ #jadwalbola*
*┃➥ #caklontong*
*┃➥ #asupan*
*┃➥ #nulis2*
*┃➥ #spamcall*
*┃➥ #spamcall2*
*┃➥ #qrcode*
*┃➥ #qrread*
*┃➥ #koin*
*┃➥ #dadu*
*┃➥ #tomp3*
*┃➥ #ttp2*
*┃➥ #pastebin*
*┃➥ #nhview*
*┃➥ #nhder*
*┃➥ #ssphone*
*┃➥ #butly*
*┃➥ #tinyurl*
*┃➥ #missing*
*┃➥ #findsticker*
*┃➥ #wa.me*
*┃➥ #infoloker*
*┃➥ #trendtwit*
*┃➥ #bot2*
*┃➥ #bot3*
*┃➥ #us*
*┃➥ #iri*
*┃➥ #jadwaltvnow*
*┃➥ #emojiimg*
*┃➥ #javcosplay*
*┃➥ #covid19*
*┃➥ #infotogel*
*┃➥ #convertduit*
*┃➥ #nulis3*
*┃➥ #nulis4*
*┃➥ #nulis5*
*┃➥ #nulis6*
*┃➥ #nulis7*
*┃➥ #covidword*
*┃➥ #slot*
*┃➥ #hitunghuruf*
*┃➥ #zeusback*
*┃➥ #foliokiri*
*┃➥ #foliokanan*
*┃➥ #quotemaker2*
*┃➥ #newstickerline*
*┃➥ #reportbug*
*┃➥ #hasilcarding*
*┃➥ #tr*
*┃➥ #premium*
*┗━──────────────────╯*



*✪[ Berita Menu ]✪ :*
*┏━──────────────────╮*
*┃➥ #cnn*
*┃➥ #liputan6*
*┃➥ #jalantikus*
*┃➥ #news*
*┃➥ #tribunews*
*┃➥ #foxnews*
*┗━──────────────────╯*



*✪[ Owner Menu ]✪ :*
*┏━──────────────────╮*
*┃➥ #ban*
*┃➥ #ban del*
*┃➥ #clearall*
*┃➥ #leaveall*
*┃➥ #bc*
*┃➥ #setstatus*
*┃➥ #setpic*
*┃➥ #screen*
*┗━──────────────────╯*

=_=_=_=_=_=_=_=_=_=_=_=_=
*┏━━━━━━━━━━━━━━━━━┓*
*┃➥Owner BOT  : ZeusXz*
*┃➥Channel  : ZEUS FITURE OFFICIAL*
*┃➥Github  : github.com/ZeusFtrOfc*
*┃➥GrupBot  : #grupbot*
*┗━━━━━━━━━━━━━━━━━┛*
=_=_=_=_=_=_=_=_=_=_=_=_=

//////////////////////////////////////////////////////////
*┏━━━━━━━━━━━━━━━━━┓*
*┃➥Please help me share this bot whatsapp number!*
*┗━━━━━━━━━━━━━━━━━┛*
//////////////////////////////////////////////////////////


Thanksss..!`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textDonasi = () => {
    return `
Hai, terimakasih telah menggunakan bot ini, ga usah donasi gan bot ini gratis kok..
Doakan aja agar project bot ini bisa terus berkembang
Doakan agar author bot ini dapat ide-ide yang kreatif lagi\ntapi klo mau donasi gapapa si gan buat perkembangan bot ini..
kalau mau donasi hubungi owner aja.Bisa via pulsa dan gopay\nbisa cukup subscribe channel saya saja..
bantu share supaya banyak orng diluar sana yang menikmati bot ini.

Terimakasih. ~Zeus`
}
exports.textMp4 = () => {
    return `
Cara membuka file ytmp4

setelah file selesai dikirim,silahkan ikuti langkah-langkah berikut!
1.masuk ke folder penyimpanan whatsapp ke bagian media terus next ke folder documents
2.cari file vidio yang di kirim tadi
3.jika sudah ketemu klik lama lalu pilih ubah nama/rename lalu ubah nama file tadi bagian belakang menjadi .mp4

contoh : namafile.enc
ubah .enc jadi .mp4
jadinya : namafile.mp4

*SEKIAN TUTORIAL DARI SAYA TERIMAKASIH..*`
}

exports.textLoker = () => {
    return `
"perusahaan": "PT Exel Integrasi Solusindo",\n 
      "link": "https://m.karir.com/opportunities/1301913",\n 
      "profesi": "Sales Business Representative",\n 
      "gaji": "IDR 4.000.000 - 7.000.000",\n 
      "lokasi": "head office - Jakarta Barat",\n 
      "pengalaman": "Setidaknya 2 tahun",\n
      "jobFunction": "Penjualan dan Pemasaran",\n 
      "levelKarir": "Pemula / Staf",\n 
      "edukasi": "Sarjana/S1",\n 
      "desc": "Job Qualification:\u00a0Bachelor or Master degree.Have a quantitative skills and negotiation skill.Responsible for Sales, Business Development, and also Revenue Stream efforts for our company, seeking, overseeing and managing new potential clients.Tasks will include research into new opportunities and markets, updating and maintaining an organised clients of business development and marketing materials.Write, prepare, layout and produce qualifications and proposals, presentation materials upon deadlines.First point of contact for new potential client, collaborators and partners, and to evaluate and pursue new potential projects.Responsible for managing business and marketing on a day-to-day basis, organize and overseeing workflow.",\n 
      "syarat": "Requirements:Female, 18-25 years old.Bachelor or Master DegreePassionate in music industry.Fluently in English.Have a quantitative and negotiation skills.Comfortable working with team, evaluating the data, and applying creative techniques to business problems"\n\nBy : Zeus`
}




exports.textPrem = (pushname) => {
    return `Halo *${pushname}!...*

Mau daftar premium?
Silahkan hubungi owner bot untuk mendaftar premium...

kelebihan fitur premium :
1.bisa gunain menu yang khusus premium
2.no limit
3.bebas gunain
Dll

daftar harga premium :
20k(1bulan)
35k(2bulan)
50k(3bulan)
dan seterusnya..

Suport pembayaran :
1.pulsa telkomsel/simpati
2.gopay

Jika anda minat/mau order bisa langsung chat owner bot dengan command *#owner*

Terimakasih..`
}




















exports.textZeus = () => {
    return `
_Hi, my name is Zeus_ ..\nmy genitals are female\n_I live in Surabaya, East Java, I am 14 years old, my position is as a Zeus bot autor / devoloper bot, I started to enter the Cyber ​​world in March 2020, my profession in the Cyber ​​world as a devoloper, Cyber ​​security, and pentesting. Here I made this bot just to help people out there who need it_ .. \n_Although this is not much, but I sincerely give up my time, energy, thoughts, money just to help you .._ \n_Hopefully with this. You can help this bot.._ \n_Amin.._ \n\n_Thanks_`}
