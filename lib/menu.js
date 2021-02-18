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

\n*✪[ Grup Menu ]✪ :*
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
*┃➥ #autosticker*
*┃➥ #peluk*
*┃➥ #cakep*
*┃➥ #pelet*
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
*┃➥ #xnxxapp*
*┃➥ #nekopoiapp*
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
*┃➥ #kisahnabi*
*┃➥ #translate2*
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
*┃➥ #cersex2*
*┃➥ #waifusticker*
*┃➥ #lolisticker*
*┃➥ #nekosticker*
*┃➥ #animequotes*
*┃➥ #randomcat*
*┃➥ #fiersa*
*┃➥ #chika*
*┃➥ #lord*
*┃➥ #puisirandom*
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
*┃➥ #trumptweet*
*┃➥ #valentine*
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
*┃➥ #indohot*
*┃➥ #neko18*
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
*┃➥ #sspc*
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
*┃➥ #listpremium*
*┃➥ #prank*
*┃➥ #kuntilanak*
*┃➥ #bocil*
*┃➥ #sketch*
*┃➥ #pale*
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



*✪[ Tutorial Menu ]✪ :*
*┏━──────────────────╮*
*┃➥ #hapusiklan*
*┃➥ #hematkuota*
*┃➥ #ytdownload*
*┃➥ #themegoogle*
*┃➥ #gombalin*
*┃➥ #sadapwa*
*┃➥ #lacakhp*
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
*┃➥ #prem*
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


_Thanksss..!_`
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
1.bisa gunain menu yang khusus premium,
2.no limit,
3.bebas gunain,
4.download lagu bebas mb,
5.download vidio bebas mb,
6.menikmati fitur" premium lain,
Dll

Daftar harga premium :
20k(1bulan),
35k(2bulan),
50k(3bulan),
100K(6bulan),
190k(1 tahun),
dan seterusnya..

+ bonus bot masuk 1 grup whatsapp member dibawah 180!!

Suport pembayaran :
1.pulsa telkomsel/simpati
2.gopay

Jika anda minat/mau order bisa langsung chat owner bot dengan command *#owner*

Terimakasih..`
}



exports.textIklan = () => {
    return `
1.Buka aplikasi Google Chrome dan pilih 3 titik vertikal yang berlokasi di sebelah kanan atas...
2.Pilih ‘Settings’.
3.Cari opsi ‘Site Settings’ dan klik opsi ‘Pop-ups and redirects’.
4.Pilih toggle sehingga tampilannya berubah menjadi abu-abu dan iklan pop-up pun akan terblokir.
Selain itu, kamu juga bisa memblokir iklan pop-up pada situs tertentu dengan mengikuti langkah-langkah di bawah:

5.ilih opsi ‘Ads’ yang dapat ditemukan di bawah opsi ‘Pop-ups and redirects’.
6.Klik toggle hingga warnanya berubah menjadi abu-abu dan iklan pun berhasil diblokir.
Untuk menghilangkan notifikasi dari situs tertentu yang tidak diinginkan, gunakan cara-cara di bawah ini:

1.Cari opsi ‘Notifications’ di menu ‘Site Settings’.
2.Klik toggle hingga warnanya berubah menjadi abu-abu dan iklan pun berhasil diblokir.\n\nBy : ZeusXz`}

exports.textKuota = () => {
    return `
1. Batasi Penggunaan Data di Masing-Masing Aplikasi
Cara Menghemat Kuota yang pertama adalah Anda harus membatasi penggunaan data di masing-masing Aplikasi, artinya Anda harus membuat pembatasan penggunaan data pada masing-masing aplikasi atau layanan yang ada untuk membuat pengematan kuota. 

Bagaimana Cara Pengaturannya ?

Adapun Cara pengaturannya adalah silahkan Anda mengaksesnya menu "SETTING" pada aplikasi yang ingin Anda atur, di sini saya akan memberikan contoh dalam pengaturan Aplikasi Google Photos. Silahkan Anda Masuk ke Settings ==> Back Up & Sync untuk melihat opsi penghematan data dan di sana akan terlihat Opsi penghemat data, silahkan anda sesuaikan saja.

2. Batasi Penggunaan Data di Background (Restrict Background Data)
Cara Menghemat Kuota yang kedua adalah Batasi Penggunaan Data di Background (Restrict Background Data) artinya Aplikasi yang anda gunakan/install pada handphone anda membutuhkan data untuk menjalankannya dan walaupun aplikasi tersebut tidak dijalankan tetapi aplikasi tetap akan memakan kuota.

Bagaimana Cara Pengaturannya Agar tidak Memakan Kuota ?

Nah... inilah yang harus kita perhatikan dalam menggunaka handphone canggih di era globalisasi ini. Pertama silahkan Anda mematikan penggunaan data pada background handphone Anda dengan cara silahkan Anda masuk ke menu Settings ==> Data Usage ==> Tap tiga garis vertikal di kanan atas ==> Restrict Background Data ==> Kemudian Klik OK. 

Saya rasa Tips Kedua ini sangat ampuh dalam Menghemat Kuota Internet Anda, tetapi langkah ini mempunyai kekurangan dalam menerima notifikasi secara otomatis.

3. Non-aktifkan Opsi Sinkronisasi yang Tidak Diinginkan
Cara Menghemat Kuota yang ketiga adalah Non-aktifkan Opsi Sinkronisasi yang Tidak Diinginkan artinya bahwa Aplikasi yang ada dalam smarphone anda akan melakukan sinkronisasi data dan itu akan memakan kuota yang sangat besar, artinya kuota anda akan terasa cepat ketika akun-akun aplikasi yang terpasang dalam smarphone anda melakukan sinkronisasi.

Bagaimana Cara Mengatasinya ?

Adapun Cara Mengatasi/Menghemat Kuota, silahkan Anda mematikan atau menonaktifkan sinkronisasi otomatis ini pada beberapa akun yang ada yang jarang digunakan. 

Pertama silahkan Anda masuk ke Menu Settings ==> Accounts ==> Kemudian pilih akun yang tidak ingin kamu sinkronisasikan. Dengan cara inilah Kota Anda akan terasa sangat hemat sekali.

4. Ubah fitur Maps Anda ke Mode Offline
Langkah ke Empat Cara Menghemat Kuota adalah dengan Cara Mengubah fitur Maps Anda ke Mode Offline, silahkan anda lakukan dari penggunaan Aplikasi Maps Anda dalam pengaturan Maps pada smartphone dari mode online ke mode offline. 

Adapun ntuk platform Android, Anda bisa menyentuh Search Bar di atas aplikasi Maps. Setelah itu Anda bisa menggesernya kebawah sampai bertemu pilihan "Save map to use offline". Dari sini Anda bisa memilih pilihan save untuk berpindah ke mode offline. Untuk platfom iOS, Anda hanya perlu mengubah mode ke flight mode.

5. Batasi Update Aplikasi
Langkah terakhir adalah untuk menghemat kota dengan cara membatasi update aplikasi, hal ini bisa menghemat kuota anda, bahkan jangan lakukan Update Aplikasi secara Otomatis Kecuali Jika Smartphone Anda Terhubung dengan WiFi.


Itulah 5 Cara Menghemat Kuota Internet anda yang bisa kami bagikan kembali, mungkin tips ini sudah banyak di bahas di internet tetapi kami mengambil 3 Cara ini saja, sebab yang lainnya akan mengikuti dalam Menghemat Kuota Internet, jangan lupa bagikan kembali ke jaringan sosial agar teman-teman kita bisa melakukan 3 Cara Menghemat Kuota Internet ini.\n\nBy : ZeusXz`
}

exports.textYt = () => {
    return `
1.Kunjungi video di Youtube, yang ingin kamu download.
2.Tambahkan “ss” pada url atau link dari video Youtube yang akan kamu download, lalu tekan enter. Kamu akan ter-redirect ke halaman lain untuk download videonya.
3. Setelah itu kamu akan dapat mendownload videonya sesuai format dan kualitas yang kamu inginkan. Perlu kamu ketahui, bahwa kualitas maksimumnya pasti tidak akan sebagus yang terdapat di Youtube nya langsung.

Mudah kan? hehe. Ya demikianlah tutorial cara download video dari Youtube.

Silahkan di coba ya!\n\nBy : ZeusXz`}

exports.textCh = () => {
    return `
Ini dia cara paling praktis dan mudah ganti tema background pada new tab atau tab baru google Chrome. Memang bukan hal baru bahwa chrome memungkinkan penggunanya untuk merubah tema atau tampilan browser serta memodifikasi browser sesuai selera penggunanya. Tapi kebanyakan atau cara klasik cenderung ribet, misalnya harus dengan menambahkan ekstensi atau aplikasi pendukung lainnya. Tema tampilan browser memang tidak akan mempengaruhi performa chrome, tapi dari sisi keindahan dan keunikan tentu akan memberi kesan tersendiri. Tampilan browser Anda tidak lagi membosankan seperti kebanyakan pengguna lainnya, bahkan Anda bisa memilih sendiri tampilan gambar sepuasnya. Terlebih lagi, jika mengganti tema background chrome ini sangat mudah dilakukan, maka tidak ada salahnya Anda coba sendiri.

Mengganti Background New Tab Chrome Secara Praktis
Semudah apa sih mengganti background new tab chrome itu? Jawabnya sangat mudah, praktis dan gak bikin ribet, bahkan tak perlu lagi ekstensi atau aplikasi theme lainnya. Hanya saja syaratnya fitur mengganti background pada tab baru / new tab ini ada pada aplikasi Google Chrome yang baru. Saat ini sudah bisa saya terapkan pada Chrome versi 69.0.xxx dan versi terbaru lainnya. Bagi Anda yang kurang tahu cara cek versi chrome silahkan coba dulu saja langkah-langkah di bawah, jika memang tidak sesuai maka silahkan update dulu dengan Chrome baru. Adapun berikut cara tahapan mengganti tema background new tab pada Chrome:

Langkah Ganti Tema Background New Tab Chrome Tanpa
Cara Ganti Tema Background New Tab Chrome Tanpa Ribet

Pada browser Chrome klik tanda “+” atau dengan menekan tombol shorcut Control + T, untuk menambahkan tab baru (lihat gambar angka 1).
Selanjutnya klik ikon Gear yang letaknya di bagian bawah kanan, lihat gambar angka 2.
Akan muncul menu “Customize this page”, pilih Upload an image.
Cari gambar yang ingin dijadikan background sesuai keinginan Anda, klik open dan selesai.

 
Gampang sekali kan?? Siapapun bisa melakukannya dengan mudah termasuk Anda. Anda bisa sepuasnya mengganti gambar background pada new tab ini kapan saja. Namun beberapa catatan yang perlu diketahui, jenis gambar yang bisa dijadikan background adalah JPG atau PNG. Adapun untuk posisi gambarnya hendaknya menggunakan gambar dengan posisi landscape atau memanjang ke samping. Jika menggunakan gambar dengan posisi potrait maka gambar akan pecah dan terpaksa dizoom untuk mengikuti dan menutupi background chrome.\n\nBy : ZeusXz`}

exports.textGombal = () => {
    return `
1. "Jepang bikin robot. Jerman bikin mobil. Kamu bikin kangen".

2. "Katanya kalau sering hujan itu bisa bikin seseorang terhanyut, kalau aku sekarang sedang terhanyut di dalam cintamu".

3. "Sejak kenal kamu, bawaannya pingin belajar terus. Belajar jadi yang terbaik".

4. "Kalau kamu jadi senar gitar, aku nggak mau jadi gitarisnya karena aku nggak mau mutusin kamu".

5. "Aku tahu kita tak seumuran, tapi aku ingin seumur hidup dengan kamu".

6. "Ngemil apa yang paling enak? Ngemilikin kamu sepenuhnya".

7. "Sayangku, tadi pagi aku gak bisa makan karena merindukanmu. Siangnya juga nggak makan karena mikirin kamu. Dan malamnya aku juga nggak bisa tidur karena kelaparan".

8. "Hari Minggu itu weekend, tapi kalau cinta kita will never end".

9. "Cintaku padamu seperti utang. Awalnya kecil, didiemin, tau-tau gede sendiri".

10. "Yang kamu lihat di kulkas, itu bukan hati sapi. Itu hatiku yang beku karena ditinggal kamu".\n\nBy : ZeusXz`}


exports.textIg = () => {
    return `
1.Pilih salah satu feed yang ingin di download, tekan titik 3
2.Cari menu “Copy Link”, Salin Tautan atau menu serupa.
3.Masuk website https://en.savefrom.net/download-from-instagram
4.Paste atau tempel link tersebut pada kolom download.
5.Tunggu sebentar sampai isinya terlihat, lalu download dan simpan.
Adapun untuk cara download konten Instagram dengan savefrom.net Anda hanya butuh link saja. Link ini adalah link dari feed video atau gambar status instagram.
Cara ini bisa dilakukan dari HP atau dari PC juga. Atau lihat juga cara download video youtube di Android.\n\nBy : ZeusXZ`}

exports.textHp = () => {
    return `
Cara Melacak HP Hilang Modal Link Google
Yang perlu diingat bahwa pelacakan akan mudah dilakukan ketika smartphone masih terhubung dengan internet, supaya akurat lokasinya. Jika internetnya mati, lokasi masih bisa dilacak tapi merujuk pada lokasi terakhir ketika internetnya aktif. Makanya, usahakan agar secepat mungkin untuk melacaknya ketika merasa sedang kehilangan.
Caranya sendiri bisa ditempuh dengan memanfaatkan PC atau browser di smartphone lain. Namun untuk mempermudahnya, cukup manfaatkan PC atau smartphone dengan mengunjungi halaman di internet.
Langkahnya dimulai dengan mengetikkan url https://android.com/find atau https://www.google.com/android/find. Setelah itu, masukkan alamat email (akun google) yang terpasang di smartphone yang akan dicari. Dari sini, map akan langsung memperlihatkan keberadaan smartphone Anda.

Cara Melacak HP Hilang - Menemukan Lokasinya
Cara Melacak HP Hilang – Menemukan Lokasinya dengan Google
Silahkan bergegas untuk mengunjungi titik koordinat yang ditunjukan oleh map tersebut. Karena dipastikan bahwa smartphone Anda masih di tempat tersebut. Pelacakan akan membuahkan hasil bila Anda sedari awal melakukan pelacakan segera. Perhatikan gambar yang dilingkari merah, di situlah lokasi hp yang hilang. Anda bisa melakukan panggilan dengan menekan menu “Putar Suara” ketika sudah di lokasi. Hp akan berbunyi walaupun disilent atau dibisukan. (lihat juga mencari ponsel lupa simpan dengan bersiul)
Sampai sini pelacakan bisa dilakukan walaupun tanpa aplikasi khusus, namun fiturnya terbatas. Supaya melacak hp hilang lebih maksimal Anda bisa mengaktifkan dan memasang aplikasi Find My Device. Dengan aplikasi ini Anda akan memiliki kontrol lebih seperti mengunci dan menghapus data jarak jauh, supaya jika tercuri si pencuri tidak bisa membuka hp Anda.
Setelah diunduh, silahkan diinstal ke dalam perangkat seluler. Proses pengaktifannya terbilang sangat mudah. Langkahnya dimulai dengan masuk ke menu pengaturan (setting). Pada menu tersebut, silahkan cari menu security & location. Apabila tidak ditemukan, carilah menu google dan tekan security. Baru kemudian ketuk menu find my device, dan aktifkan fitur lokasi. Jika tidak diaktifkan, Anda tidak bisa melacaknya. Untuk mengaktifkannya, masuk ke menu setting. Cari menu security & location, dan tekan sampai dibawa masuk ke menu access to my location, menu inilah yang perlu diaktifkan.\n\nBy : ZeusXz`}

exports.textWa = () => {
    return `
Cara Iseng Bajak Whatsapp Teman
Menu Tampilan WhatsApp Web
Langkah selanjutnya ialah kunjungi halaman whatsApp web. Silahkan masuk, maka Anda akan mendapati halaman utamanya. Pada langkah ini, pastikan Anda mencentang menu tetap masuk di bawah barcode. Barcode ini berada di bagian kanan layar halaman.
Setelah PC atau laptop dipersiapkan, langkah lanjutannya adalah merayu terlebih dahulu pemilik smartphone yang ditargetkan. Anda butuh smartphonenya agar bisa diakses melalui internet nantinya.
Jika sudah, bukalah aplikasi whatsapp di smartphone. Cari menu whatsapp web. Beberapa smartphone memiliki perbedaan tempat. Rata-rata smartphone terbaru cukup mudah untuk menemukannya. Cukup tekan titik tiga yang berada di atas layar sebelah kanan smartphone. Dari situ, Anda akan menjumpai menu whatsapp web.
Silahkan ketuk dan pindaikan barcode yang terdapat pada layar PC. Otomatis, Anda sudah bisa membajak dan melihat segala aktifitas yang terdapat di dalam whatsapp target.
Yang perlu dipahami jika menggunakan cara ini, Anda perlu memanfaatkan layanan internet. Pastikan laptop terhubung dengan internet untuk memastikan Anda tetap masuk di dalam WA.
Selain itu, Anda wajib meminjam smartphone target terlebih dahulu. Fungsinya untuk membuat duplikasi layanan WA di dalam smartphone.\n\nBy : ZeusXz`}





exports.textZeus = () => {
    return `
_Hi, my name is Zeus_ ..\nmy genitals are female\n_I live in Surabaya, East Java, I am 14 years old, my position is as a Zeus bot autor / devoloper bot, I started to enter the Cyber ​​world in March 2020, my profession in the Cyber ​​world as a devoloper, Cyber ​​security, and pentesting. Here I made this bot just to help people out there who need it_ .. \n_Although this is not much, but I sincerely give up my time, energy, thoughts, money just to help you .._ \n_Hopefully with this. You can help this bot.._ \n_Amin.._ \n\n_Thanks_`}
