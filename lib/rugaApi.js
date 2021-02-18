const axios = require('axios')
const { fetchJson, fetchText } = require('../utils/fetcher')
const fs = require('fs-extra')
const link = 'https://arugaz.my.id'
const mehh = 'https://api.i-tech.id/dl/yt?key=eT16a3-P3Gvx4-8JwS8r-N4jEB2-c9VIz4'
const fileyt = 'https://raw.githubusercontent.com/ArugaZ/scraper-results/main/20201111_230923.jpg'
const eroryt = 'https://raw.githubusercontent.com/ArugaZ/scraper-results/main/20201111_234624.jpg'

const setting = JSON.parse(fs.readFileSync('./settings/setting.json'))
let { 
    vhtearkey,
    apiKey,
    keepSave,
     iTechApi
    } = setting


const instagram = async (query) => new Promise((resolve, reject) => {
   axios.get(`https://api.vhtear.com/igstory?query=${query}&apikey=${vhtearkey}`)
    .then((res) => {
        resolve(res.data.result)
    })
    .catch((err) => {
        reject(err)
    })
})

const ymp3 = async (url) => new Promise((resolve, reject) => {
    axios.get(`http://docs-jojo.herokuapp.com/api/ytmp3?url=${url}`)
    .then((res) => {
		resolve(res.data.result)
    })
    .catch((err) =>{
        reject(err)
    })
})


const tiktok = async (url) => new Promise((resolve, reject) => {
    axios.get(`https://api.arugaz.my.id/api/media/tiktok?url=${url}`)
    .then(res => {
        resolve(res.data.result)
      })
      .catch(err => {
        reject(err)
      })
})

const facebook = async (url) => new Promise((resolve, reject) => {
    axios.get(`http://docs-jojo.herokuapp.com/api/fb?url=${url}`)
    .then(res => {
        resolve(res.data)
    })
    .catch(err => {
        reject(err)
    })
})
const nhpdf = async (query) => new Promise((resolve, reject) => {
    axios.get(`https://api.vhtear.com/nhentaipdfdownload?query=${query}&apikey=${vhtearkey}`)
    .then(res => {
        resolve(res.data.result)
    })
    .catch(err => {
        reject(err)
    })
})
const story = async (url) => new Promise((resolve, reject) => {
    axios.get(`https://api.vhtear.com/igstory?query=${url}&apikey=${vhtearkey}`)
    .then((res) => {
        resolve(res.data.result)
    })
    .catch((err) => {
        reject(err)
    })
})
const ingfo = async (query) => new Promise((resolve, reject) => {
    axios.get(`https://api.vhtear.com/infoalamat?query=${query}&apikey=${vhtearkey}`)
    .then((res) =>{
        resolve(res.data)
    })
    .catch(err => {
        reject(err)
    })
})
const cuttly = async (query) => new Promise((resolve, reject) => {
    axios.get(`http://docs-jojo.herokuapp.com/api/cuttly?url=${query}`)
    .then((res) =>{
        resolve(res.data)
    })
    .catch(err => {
        reject(err)
    })
})
const baik = async (query) => new Promise((resolve, reject) => {
    axios.get(`https://api.vhtear.com/branly?query=${query}&apikey=${vhtearkey}`)
    .then((res) =>{
        resolve(res.data)
    })
    .catch(err => {
        reject(err)
    })
})
const ggle = async (query) => new Promise((resolve, reject) => {
    axios.get(`https://api.vhtear.com/googlesearch?query=${query}&apikey=${vhtearkey}`)
    .then((res) =>{
        resolve(res.data)
    })
    .catch(err => {
        reject(err)
    })
})
const resepmsk = async (query) => new Promise((resolve, reject) => {
    axios.get(`https://api.vhtear.com/resepmasakan?query=${query}&apikey=${vhtearkey}`)
    .then((res) =>{
        resolve(res.data)
    })
    .catch(err => {
        reject(err)
    })
})
const whter = async (query) => new Promise((resolve, reject) => {
    axios.get(`https://api.vhtear.com/weather?city=${query}&apikey=${vhtearkey}`)
    .then((res) =>{
        resolve(res.data)
    })
    .catch(err => {
        reject(err)
    })
})
const virgin = async (nama,psg) => new Promise((resolve, reject) => {
    axios.get(`https://api.vhtear.com/primbonjodoh?nama=${nama}&pasangan=${psg}&apikey=${vhtearkey}`)
    .then((res) =>{
                resolve(res.data)
    })
    .catch(err => {
        reject(err)
    })
})
const name = async (nama) => new Promise((resolve, reject) => {
    axios.get(`https://api.vhtear.com/artinama?nama=${nama}&apikey=${vhtearkey}`)
    .then((res) =>{
                resolve(res.data)
    })
    .catch(err => {
        reject(err)
    })
})
const putus = async (tgl,bln,thn) => new Promise((resolve, reject) => {
    axios.get(`https://api.vhtear.com/harijadian?tgl=${tgl}&bln=${bln}&thn=${thn}&apikey=${vhtearkey}`)
    .then((res) => {
        const textqf = `Hasil: ${res.data.result.hasil}\n\nBy : ZeusXz`
        resolve(textqf)
    })
    .catch((err) =>{
        reject(err)
    })
})
const local = async (ip) => new Promise((resolve, reject) => {
    axios.get(`https://api.vhtear.com/ipwhois?ipaddr=${ip}&apikey=${vhtearkey}`)
    .then((res) =>{
                resolve(res.data)
    })
    .catch(err => {
        reject(err)
    })
})
const lirik2 = async (query) => new Promise((resolve, reject) => {
    axios.get(`https://api.vhtear.com/liriklagu?query=${query}&apikey=${vhtearkey}`)
    .then((res) =>{
                resolve(res.data)
    })
    .catch(err => {
        reject(err)
    })
})
const film = async (query) => new Promise((resolve, reject) => {
    axios.get(`https://tobz-api.herokuapp.com/api/film2?q=${query}&apikey=BotWeA`)
    .then((res) =>{
                resolve(res.data)
    })
    .catch(err => {
        reject(err)
    })
})
const chord = async (query) => new Promise((resolve, reject) => {
    axios.get(`https://api.vhtear.com/chordguitar?query=${query}&apikey=${vhtearkey}`)
    .then((res) =>{
                resolve(res.data)
    })
    .catch(err => {
        reject(err)
    })
})

const movie2 = async (query) => new Promise((resolve, reject) => {
    axios.get(`https://api.vhtear.com/xxxsearch?query=${query}&apikey=${vhtearkey}`)
    .then((res) =>{
                resolve(res.data)
    })
    .catch(err => {
        reject(err)
    })
})
const anoboy = () => new Promise((resolve, reject) => {
    console.log('Get Anoboy on-going...')
    fetchJson(`https://api.vhtear.com/ongoinganoboy&apikey=${vhtearkey}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})
const darkjokes = async () => new Promise((resolve, reject) => {
    axios.get(`https://api.zeks.xyz/api/darkjokes?apikey=apivinz`)
    .then((res) => {
        resolve(res.data.result)
    })
    .catch((err) =>{
        reject(err)
    })
})
const zimg = async () => new Promise((resolve, reject) => {
    axios.get(`http://itsmeikygans.my.id/randomimage?apikey=itsmeiky633`)
    .then((res) => {
        resolve(res.data.result)
    })
    .catch((err) =>{
        reject(err)
    })
})

const memeindo = async () => new Promise((resolve, reject) => {
    axios.get(`https://api.zeks.xyz/api/memeindo?apikey=apivinz`)
    .then((res) => {
        resolve(res.data.result)
    })
    .catch((err) =>{
        reject(err)
    })
})
const memeindo2 = async () => new Promise((resolve, reject) => {
    axios.get(`http://api-melodicxt-2.herokuapp.com/api/random/meme/indo?apiKey=administrator`)
    .then((res) => {
        resolve(res.data.result)
    })
    .catch((err) =>{
        reject(err)
    })
})

const fml = async () => new Promise((resolve, reject) => {
    axios.get(`https://docs-jojo.herokuapp.com/api/fml`)
    .then((res) => {
        const fmlxxx = `*F MY LIFE:* ${res.data.result.fml}\n\nby : ZeusXz`
        resolve(fmlxxx)
    })
    .catch((err) =>{
        reject(err)
    })
})



/**
 * Get TikTok video from URL.
 * @param {String} url 
 */
/**
 * Get fresh videos from TikTok.
 */
const asupan = () => new Promise((resolve, reject) => {
    console.log('Fetching video...')
    fetchText('http://sansekai.my.id/sansekai.txt')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})
const stickerfire = (url) => new Promise((resolve, reject) => {
    console.log('Creating sticker GIF...')
    fetchJson(`${link}/api/burning_fire?link=${url}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})
const trend = () => new Promise((resolve, reject) => {
	console.log('Getting Trending Twitter')
	fetchJson(`https://docs-jojo.herokuapp.com/api/trendingtwitter`)
	.then((result) => resolve(result))
	.catch((err) => reject(err))
})

const kusonime = async (judul) => new Promise((resolve, reject) => {
    axios.get(`https://st4rz.herokuapp.com/api/kuso?q=${judul}`)
    .then((res) => {
        const initext = `*Judul :* ${res.data.title}\n*Sinopsis :* ${res.data.sinopsis}\n*Info :* ${res.data.info}\n\n*Link Download* : _${res.data.link_dl}_\n\nBy : Zeus`
        resolve({link: res.data.thumb, text: initext})
    })
    .catch((err) => {
        reject(err)
    })
})
const kusonime2 = async (judul) => new Promise((resolve, reject) => {
    axios.get(`https://tobz-api.herokuapp.com/api/kuso?q=${judul}&apikey=BotWeA`)
    .then((res) => {
        const initext = `*info :* ${res.data.info}\n*link_dl :* ${res.data.link_dl}\n*sinopsis :* ${res.data.sinopsis}\n\n*title* : _${res.data.title}_\n\nBy : Zeus`
        resolve({link: res.data.thumb, text: initext})
    })
    .catch((err) => {
        reject(err)
    })
})


const dewabatch = async (judul) => new Promise((resolve, reject) => {
	axios.get(`${link}/api/dewabatch?q=${judul}`)
	.then((res) => {
		const textdew = `${res.data.result}\n\nSinopsis: ${res.data.sinopsis}\n\nBy : ZeusXz`
		resolve({link: res.data.thumb, text: textdew})
	})
	.catch((err) => {
		reject(err)
	})
})

const simi = (chat) => new Promise((resolve, reject) => {
	console.log('Get Response from Simsumi!')
	fetchJson(`http://simsimi.herokuapp.com/api?text=${chat}&lang=id`)
	.then((result) => resolve(result))
	.catch((err) => reject(err))
})
const maps = async (jalan) => new Promise((resolve, reject) => {
axios.get(`https://api.vhtear.com/maps?search=${jalan}&apikey=${vhtearkey}`)
.then((res) => {
	resolve(res.data.gambar)
	})
	.catch((err) => {
		reject(err)
		})
		})
const bokep2 = async () => new Promise((resolve, reject) => {
    axios.get(`https://tobz-api.herokuapp.com/api/hentai?apikey=BotWeA`)
    .then((res) => {
        resolve(res.data.result)
    })
    .catch((err) =>{
        reject(err)
    })
})


const cekzodiak = async (nama,tgl,bln,thn) => new Promise((resolve, reject) => {
    axios.get(`${link}/api/getzodiak?nama=${nama}&tgl-bln-thn=${tgl}-${bln}-${thn}`)
    .then((res) => {
        const text = `Nama: ${res.data.nama}\nUltah: ${res.data.ultah}\nZodiak: ${res.data.zodiak}\n\nBy : ZeusXz`
        resolve(text)
    })
    .catch((err) =>{
        reject(err)
    })
})

const cooltext = async (teks) => new Promise((resolve, reject) => {
	axios.get(`https://api.vhtear.com/randomcooltext?text=${teks}&apikey=${vhtearkey}`)
	.then((res) => {
		const textc = `Teks: ${res.data.text}\nGambar: ${res.data.image}\n\nBy : ZeusXz`
		resolve({link: res.data.image, text: textc})
	})
	.catch((err) => {
		reject(err)
	})
})


const life = async () => new Promise((resolve, reject) => {
	axios.get(`https://tobz-api.herokuapp.com/api/randomfmylife?apikey=BotWeA`)
	.then((res) => {
		resolve(res.data)
	})
	.catch((err) => {
		reject(err)
	})
})
const bucin2 = async () => new Promise((resolve, reject) => {
	axios.get(`https://docs-jojo.herokuapp.com/api/katacinta`)
	.then((res) => {
		resolve(res.data)
	})
	.catch((err) => {
		reject(err)
	})
})

const cersex = async () => new Promise((resolve, reject) => {
	const ransex = Math.floor(Math.random() * 2) + 1
	axios.get(`https://api.vhtear.com/cerita_sex&apikey=${vhtearkey}`)
	.then((res) => {
		resolve(res.data)
	})
	.catch((err) => {
		reject(err)
	})
})

const puisi = async () => new Promise((resolve, reject) => {
	const puiti = ['1','3']
	const ranisi = puiti[Math.floor(Math.random() * puiti.length)]
	axios.get(`https://api.vhtear.com/puisi_image&apikey=${vhtearkey}`)
	.then((res) => {
		resolve(res.data)
	})
	.catch((err) => {
		reject(err)
	})
})

const ytmp3 = async (url) => new Promise((resolve, reject) => {
    axios.get(`https://st4rz.herokuapp.com/api/yta2?url=${url}`)
    .then((res) => {
		resolve(res.data)
    })
    .catch((err) =>{
        reject(err)
    })
})
const ytmp4 = async (url) => new Promise((resolve, reject) => {
    axios.get(`http://hujanapi.xyz/api/ytdl?url=${url}&apikey=vWI9FfcmTlL2yx8`)
    .then((res) => {
		resolve(res.data.result)
    })
    .catch((err) =>{
        reject(err)
    })
})

const filmapik = async (url) => new Promise((resolve, reject) => {
    console.log('Get Filmapik From Query')
    fetchJson(`https://tobz-api.herokuapp.com/api/film?q=${url}&apikey=BotWeA`)
    .then((data) => resolve(data))
    .catch((err) => reject(err))
})
const filmapikdwn = async (url) => new Promise((resolve, reject) => {
    console.log('Get Filmapik From Query')
    fetchJson(`https://api.vhtear.com/downloadfilm?judul=${url}&apikey=${vhtearkey}`)
    .then((result,data) => resolve(result,data))
    .catch((err) => reject(err))
})
const neon = async (url) => new Promise((resolve, reject) => {
    console.log('Get neon From Query')
    fetchJson(`https://tobz-api.herokuapp.com/api/neonime?q=${url}&apikey=BotWeA`)
    .then((result) => resolve(result,data))
    .catch((err) => reject(err))
})
const githubpict = async (url) => new Promise((resolve, reject) => {
	axios.get(`https://tobz-api.herokuapp.com/api/githubprofile?username=${url}&apikey=BotWeA`)
	.then((res) => {
        if (res.data.error) resolve('https://c4.wallpaperflare.com/wallpaper/976/117/318/anime-girls-404-not-found-glowing-eyes-girls-frontline-wallpaper-preview.jpg')
        resolve(`${res.data.result.avatar}`)
    })
    .catch((err) => {
        reject(err)
    })
})

const github = async (url) => new Promise((resolve, reject) => {
	axios.get(`https://tobz-api.herokuapp.com/api/githubprofile?username=${url}&apikey=BotWeA`)
	.then((res) => {
	const ahaha = `- *Username :* ${res.data.result.username}\n- *Name :* ${res.data.result.name}\n- *Followers :* ${res.data.result.follower}\n- *Following :* ${res.data.result.following}\n- *Location :* ${res.data.result.location}\n- *Twitter Username :* ${res.data.result.twitter_username}\n- *Company :* ${res.data.result.company}\n- *Email :* ${res.data.result.email}\n- *Public Repository :* ${res.data.result.public_repository}\n- *Public Gists :* ${res.data.result.public_gists}\n\n- *Bio :* ${res.data.result.biography}\n- *URL Profile :* ${res.data.result.url}\n\nBy : ZeusXz`
        resolve(ahaha)
    })
    .catch((err) => {
        reject(err)
    })
})


const kbbi = async (query) => new Promise((resolve, reject) => {
    axios.get(`http://api.vhtear.com/kbbi?kata=${query}&apikey=${vhtearkey}`)
    .then((res) => {
        resolve(res.data.result)
    })
    .catch((err) =>{
        reject(err)
    })
})


/**
 * Get media from Facebook.
 * @param {String} query
 */


const stalkig = async (url) => new Promise((resolve, reject) => {
    axios.get(`https://api.zeks.xyz/api/igstalk?username=${url}&apikey=apivinz`)
    .then((res) => {
		if (res.data.error) resolve(res.data.error)
        const text = `User: ${res.data.username}\nfullname: ${res.data.fullname}\nBio: ${res.data.bio}\nFollowers: ${res.data.follower}\nFollowing: ${res.data.following}\nis_private: ${res.data.is_private}\n\nBY : ZeusXz`
        resolve(text)
    })
    .catch((err) =>{
        reject(err)
    })
})

const stalkigpict = async (url) => new Promise((resolve, reject) => {
    axios.get(`https://api.zeks.xyz/api/igstalk?username=${url}&apikey=apivinz`)
    .then((res) => {
		if (res.data.error) resolve('https://c4.wallpaperflare.com/wallpaper/976/117/318/anime-girls-404-not-found-glowing-eyes-girls-frontline-wallpaper-preview.jpg')
        resolve(`${res.data.profile_pic}`)
    })
    .catch((err) =>{
        reject(err)
    })
})
const dilan = async () => new Promise((resolve, reject) => {
    axios.get(`http://api.itsmeikyxsec404.xyz/bacotandilan?apikey=itsmeiky633`)
    .then((res) => {
        const text = `*Dilan berkata:* ${res.data.result}\n\nBy : ZeusXz`
        resolve(text)
    })
    .catch((err) =>{
        reject(err)
    })
})
const cinta = async () => new Promise((resolve, reject) => {
    axios.get(`http://api.itsmeikyxsec404.xyz/katacinta?apikey=itsmeiky633`)
    .then((res) => {
        const text = `*Kata*: ${res.data.result}\n\nBy : ZeusXz`
        resolve(text)
    })
    .catch((err) =>{
        reject(err)
    })
})
const quote = async () => new Promise((resolve, reject) => {
    axios.get(`https://st4rz.herokuapp.com/api/randomquotes`)
    .then((res) => {
        const text = `Author: ${res.data.author}\n\nQuote: ${res.data.quotes}\n\nBy : ZeusXz`
        resolve(text)
    })
    .catch((err) =>{
        reject(err)
    })
})
const cerpen = async () => new Promise((resolve, reject) => {
    axios.get(`http://docs-jojo.herokuapp.com/api/cerpen`)
    .then((res) => {
        const textcer = `Judul: ${res.data.result.title}\n\nCerita: ${res.data.result.cerpen}\n\nBy : ZeusXz`
        resolve(textcer)
    })
    .catch((err) =>{
        reject(err)
    })
})
const zeus = async () => new Promise((resolve, reject) => {
    axios.get(`https://videfikri.com/api/randomquotes`)
    .then((res) => {
        const text = `${res.data.result.quotes} -kata ZeusXz`
        resolve(text)
    })
    .catch((err) =>{
        reject(err)
    })
})
const hemker = async () => new Promise((resolve, reject) => {
    axios.get(`http://api.itsmeikyxsec404.xyz/bacotanhacker?apikey=itsmeiky633`)
    .then((res) => {
        const text = `*Kata:* ${res.data.result}\n\nBy : ZeusXz`
        resolve(text)
    })
    .catch((err) =>{
        reject(err)
    })
})
const ham = async () => new Promise((resolve, reject) => {
    axios.get(`http://api.itsmeikyxsec404.xyz/bacotanilham?apikey=itsmeiky633`)
    .then((res) => {
        const text = `*Kata:* ${res.data.result}\n\nBy : ZeusXz`
        resolve(text)
    })
    .catch((err) =>{
        reject(err)
    })
})
const hame = async () => new Promise((resolve, reject) => {
    axios.get(`http://api.itsmeikyxsec404.xyz/kodenegara?apikey=itsmeiky633`)
    .then((res) => {
        const text = `*Negara/Kode:* ${res.data.result}\n\nBy : ZeusXz`
        resolve(text)
    })
    .catch((err) =>{
        reject(err)
    })
})


const bucin = async () => new Promise((resolve, reject) => {
    axios.get(`https://st4rz.herokuapp.com/api/randomquotes`)
    .then((res) => {
        const textd = `*Author:* ${res.data.author}\n\n*teks:* ${res.data.result.quote}\n\nBy : ZeusXz`
        resolve(textd)
    })
    .catch((err) =>{
        reject(err)
    })
})

const wiki = async (url) => new Promise((resolve, reject) => {
    axios.get(`https://tobz-api.herokuapp.com/api/wiki?q=${url}&apikey=BotWeA`)
    .then((res) => {
        resolve(res.data.result)
    })
    .catch((err) =>{
        reject(err)
    })
})
const wikien = async (url) => new Promise((resolve, reject) => {
    axios.get(`https://videfikri.com/api/wikieng/?query=${url}`)
    .then((res) => {
        resolve(res.result.desc)
    })
    .catch((err) =>{
        reject(err)
    })
})

const jam = async (url) => new Promise((resolve, reject) => {
    axios.get(`https://st4rz.herokuapp.com/api/yta2?url=${url}`)
    .then((res) => {
		resolve(res.data)
    })
    .catch((err) =>{
        reject(err)
    })
})
const daerah = async (url) => new Promise(async (resolve, reject) => {
    const api = `https://api.vhtear.com/music?query=${url}&apikey=${vhtearkey}`
    axios.get(api).then(async(res) => {
        const st = res.data.result[0]
        if(st.status === false){
            resolve(`Media Tidak Di Temukan`)
       }else{
                resolve(st)
        }
    }).catch(err => {
        console.log(err)
        resolve(`Maaf, Server Sedang Error`)
    })
})
const jadwaldaerah = async (query) => new Promise((resolve, reject) => {
    axios.get(`https://api.vhtear.com/jadwalsholat?daerah=${query}&apikey=${vhtearkey}`)
    .then((res) => {
		if (res.data.error) resolve(res.data.error)
        const text = `Jadwal Sholat ${query}\n\nImsyak: ${res.data.Imsyak}\nSubuh: ${res.data.Subuh}\nDzuhur: ${res.data.Dzuhur}\nAshar: ${res.data.Ashar}\nMaghrib: ${res.data.Maghrib}\nIsya: ${res.data.Isya}`
        resolve(text)
    })
    .catch((err) =>{
        reject(err)
    })
})

const cuaca = async (url) => new Promise((resolve, reject) => {
    axios.get(`https://rest.farzain.com/api/cuaca.php?id=${url}&apikey=O8mUD3YrHIy9KM1fMRjamw8eg`)
    .then((res) => {
		if (res.data.respon.cuaca == null) resolve('Maaf daerah kamu tidak tersedia')
        const text = `Cuaca di: ${res.data.respon.tempat}\n\nCuaca: ${res.data.respon.cuaca}\nAngin: ${res.data.respon.angin}\nDesk: ${res.data.respon.deskripsi}\nKelembapan: ${res.data.respon.kelembapan}\nSuhu: ${res.data.respon.suhu}\nUdara: ${res.data.respon.udara}\n\nBy : ZeusXz`
        resolve(text)
    })
    .catch((err) =>{
        reject(err)
    })
})

const tulis = async (teks) => new Promise((resolve, reject) => {
    axios.get(`https://api.vhtear.com/write?text=${teks}&apikey=${vhtearkey}`)
    .then((res) => {
        resolve(`${res.data.image}`)
    })
    .catch((err) => {
        reject(err)
    })
})
const tulis3 = async (teks) => new Promise((resolve, reject) => {
    axios.get(`https://api.zeks.xyz/api/nulis?text=${teks}&apikey=apivinz`)
    .then((res) => {
        resolve(`${res.data}`)
    })
    .catch((err) => {
        reject(err)
    })
})

const artinama = async (nama) => new Promise((resolve, reject) => {
	axios.get(`http://api.itsmeikyxsec404.xyz/artinama?apikey=itsmeiky633&name=${nama}`)
	.then((res) => {
		resolve(res.data)
	})
	.catch((err) => {
		reject(err)
	})
})
const joox = async (url) => new Promise(async (resolve, reject) => {
    const api = `https://api.vhtear.com/music?query=${url}&apikey=${vhtearkey}`
    axios.get(api).then(async(res) => {
        const st = res.data.result[0]
        if(st.status === false){
            resolve(`Media Tidak Di Temukan`)
       }else{
                resolve(st)
        }
    }).catch(err => {
        console.log(err)
        resolve(`Maaf, Server Sedang Error`)
    })
})

const cekjodoh = async (nama,pasangan) => new Promise((resolve, reject) => {
	axios.get(`${link}/api/jodohku?nama=${nama}&pasangan=${pasangan}`)
	.then((res) => {
		const textc = `Nama : ${res.data.nama}\nPasangan : ${res.data.pasangan}\nPositif: ${res.data.positif}\nNegatif : ${res.data.negatif}`
		resolve({link: res.data.gambar, text: textc})
	})
	.catch((err) => {
		reject(err)
	})
})

const covidindo = async () => new Promise((resolve, reject) => {
	axios.get(`https://coronavirus-19-api.herokuapp.com/countries/indonesia`)
	.then((res) => {
		const textv = `Info Covid-19 ${res.data.country}\n\nKasus Baru: ${res.data.casesPerOneMillion}\nTotal Kasus: ${res.data.cases}\nSembuh: ${res.data.recovered}\nPenanganan: ${res.data.active}\nMeninggoy: ${res.data.deaths}\n\nUpdate rapid: ${res.data.totalTests}`
		resolve(textv)
	})
	.catch((err) => {
		reject(err)
	})
})
const bapakfont = async (kalimat) => new Promise((resolve, reject) => {
	axios.get(`https://api.zeks.xyz/api/alaymaker?kata=${kalimat}&apikey=apivinz`)
	.then((res) => {
		resolve(res.data.result)
	})
	.catch((err) => {
		reject(err)
	})
})

const back = async (kalimat) => new Promise((resolve, reject) => {
	axios.get(`https://videfikri.com/api/hurufterbalik/?query=${kalimat}`)
	.then((res) => {
		resolve(res.data.result.kata)
	})
	.catch((err) => {
		reject(err)
	})
})
const huruf = async (kalimat) => new Promise((resolve, reject) => {
	axios.get(`https://videfikri.com/api/jumlahhuruf/?query=${kalimat}`)
	.then((res) => {
		resolve(res.data.result.jumlah)
	})
	.catch((err) => {
		reject(err)
	})
})

const lirik = async (judul) => new Promise((resolve, reject) => {
	axios.get(`${link}/api/lirik?judul=${judul}`)
	.then((res) => {
		resolve(res.data.result)
	})
	.catch((err) => {
		reject(err)
	})
})
/**
 * Get Instagram Metadata
 *
 * @param  {String} url
 */
const insta = (url) => new Promise((resolve, reject) => {
    console.log('Get metadata from =>', url)
    const uri = url.replace(/\?.*$/g, '')
    igGetInfo(uri, {})
        .then((result) => resolve(result))
        .catch((err) => {
            console.error(err)
            reject(err)
        })
})


const movie = async (url) => new Promise((resolve,reject) => {
	console.log('Get Movie from Query')
	fetchJson(`https://api.zeks.xyz/api/film?q=${url}&apikey=apivinz`)
	.then((result) => resolve(result))
	.catch((err) => reject(err))
})

const nowm = async (url) => new Promise((resolve, reject) => {
    axios.get(`http://api.kocakz.xyz/api/media/tiktok?url=${url}`)
    .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err)
      })
})

const gsm = async (url) => new Promise((resolve, reject) => {
    axios.get(`https://api.vhtear.com/gsmarena?query=${url}&apikey=${vhtearkey}`)
    .then(res => {
        if (res.data.error) resolve(res.data.error)
        const swdkp = `*Type Handphone : ${res.data.result.title}*\n\n${res.data.result.spec}`
        resolve(swdkp)
    })
    .catch(err => {
        reject(err)
    })
})

const ssweb = async (url) => new Promise((resolve, reject) => {
    axios.get(`https://api.zeks.xyz/api/ssweb?url=${url}&apikey=apivinz`)
    .then(res => {
        resolve(res)
    })
    .catch(err => {
        reject(err)
    })
})

const twit = async (url) => new Promise((resolve, reject) => {
    axios.get(`https://arugaz.my.id/api/media/twvid?url=${url}`)
    .then(res => {
        resolve(res.data)
    })
    .catch(err => {
        reject(err)
    })
})
const stalktt = async (query) => new Promise ((resolve, reject) => {
    axios.get(`https://api.vhtear.com/tiktokprofile?query=${query}&apikey=${vhtearkey}`)
    .then((res) => {
        if (res.data.error) resolve(res.data.error)
        const ttxt = `*username :* ${res.data.result.username}\n*bio :* ${res.data.result.bio}\n*description :* ${res.data.result.description}\n*follower :* ${res.data.result.follower}\n*like_count :* ${res.data.result.like_count}\n*video_post :* ${res.data.result.video_post}\n*title :* ${res.data.result.title}\n*picture :* ${res.data.result.picture}\n*url_accoun :* ${res.data.result.url_accoun}`
        resolve(ttxt)
    })
    .catch((err) => {
        reject(err)
    })
})
const ttpict = async (query) => new Promise((resolve, reject) => {
    axios.get(`https://api.vhtear.com/tiktokprofile?query=${query}&apikey=${vhtearkey}`)
    .then((res) => {
        if (res.data.error) resolve('https://c4.wallpaperflare.com/wallpaper/976/117/318/anime-girls-404-not-found-glowing-eyes-girls-frontline-wallpaper-preview.jpg')
        resolve(`${res.data.result.picture}`)
    })
    .catch((err) => {
        reject(err)
    })
})

const gsmpict = async (url) => new Promise((resolve) => {
    axios.get(`https://api.vhtear.com/gsmarena?query=${url}&apikey=${vhtearkey}`)
    .then((res) => {
        resolve(`${res.data.result.image}`)
    })
    .catch((err) => {
        reject(err)
    })
})
const stalktwit = async (url) => new Promise((resolve, reject) => {
    axios.get(`https://api.vhtear.com/twittprofile?username=${url}&apikey=${vhtearkey}`)
    .then((res) => {
        if (res.data.error) resolve(res.data.error)
        const ttas = `*Username :* ${res.data.result.username}\n*name :* ${res.data.result.name}\n*status_count :* ${res.data.result.status_count}\n*followers_count :* ${res.data.result.followers_count}\n*Bio :* ${res.data.result.description}\n*media_count :* ${res.data.result.media_count}\n\nBy :ZeusXz`
        resolve(ttas)
    })
    .catch((err) => {
        reject(err)
    })
})
const missing = (text1, text2, text3, url) => new Promise((resolve, reject) => {
    console.log('Creating image...')
    fetchJson(`https://api.vhtear.com/missingperson?text1=${text1}&text2=${text2}&text3=${text3}&link=${url}&apikey=${vhtearkey}`)
        .then((result) => resolve(result))
        .catch((err) =>  reject(err))
})
const zodiak2 = (zodiac) => new Promise((resolve, reject) => {
    console.log(`Get weekly zodiac fortune for ${zodiac}...`)
    fetchJson(`https://api.vhtear.com/zodiak?query=${zodiac}&apikey=${vhtearkey}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})
const qrcode = async (url, size) => new Promise((resolve, reject) => {
	axios.get(`http://api.qrserver.com/v1/create-qr-code/?data=${url}&size=${size}x${size}`)
		.then((res) => {
			resolve(`http://api.qrserver.com/v1/create-qr-code/?data=${url}&size=${size}x${size}`)
		})
		.catch((err) => {
            reject(err)
        })
})

const qrread = async (url) => new Promise((resolve, reject) => {
	axios.get(`http://api.qrserver.com/v1/read-qr-code/?fileurl=${url}`)
		.then((res) => {
			if (res.data[0].symbol[0].data == null) return resolve(`Link yang anda masukan salah`)
			const textqr = `Hasil : ${res.data[0].symbol[0].data}`
			resolve(textqr)
		})
		.catch((err) => {
            reject(err)
        })
})

const spamcall = async (notlp) => new Promise((resolve, reject) => {
	axios.get(`https://videfikri.com/api/call/?nohp=${notlp}`)
	.then((res) => {
		resolve(res.data.result.logs)
	})
	.catch((err) => {
		reject(err)
	})
})
const spamsms = async (notlp) => new Promise((resolve, reject) => {
	axios.get(`https://mhankbarbar.herokuapp.com/api/spamsms?no=${notlp}&jum=10`)
	.then((res) => {
		resolve(res.result.logs)
	})
	.catch((err) => {
		reject(err)
	})
})
const spamgmail = async (gmail) => new Promise((resolve, reject) => {
	axios.get(`https://tobz-api.herokuapp.com/api/spamgmail?target=${gmail}&jum=10&apikey=BotWeA`)
	.then((res) => {
		resolve(res.data.logs)
	})
	.catch((err) => {
		reject(err)
	})
})

const sticker = (query) => new Promise((resolve, reject) => {
    console.log('Searching for sticker...')
    fetchJson(`https://api.vhtear.com/wasticker?query=${query}&apikey=${vhtearkey}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

                    
const stickerlight = (imageUrl) => new Promise((resolve, reject) => {
    fetch(`https://api.vhtear.com/lightning?link=${encodeURIComponent(imageUrl)}&apikey=${vhtearkey}`, {
        method: 'GET',
    })
    .then(async res => {
        const text = await res.json()

        resolve(text)
        
     })
    .catch(err => reject(err))
});
const listnek = () => new Promise((resolve,reject) => {
	console.log('Getting Nekopoi List')
	fetchJson(`https://api.vhtear.com/nekojavlist&apikey=${vhtearkey}`)
	.then((result) => resolve(result))
	.catch((err) => reject(err))
})
const hentai = () => new Promise((resolve,reject) => {
	console.log('Getting Hentai List')
	fetchJson(`https://api.vhtear.com/nekohentai&apikey=${vhtearkey}`)
	.then((result) => resolve(result))
	.catch((err) => reject(err))
})

const cosplay = () => new Promise((resolve,reject) => {
	console.log('Getting Cosplay')
	fetchJson(`https://api.vhtear.com/nekojavcosplay&apikey=${vhtearkey}`)
	.then((result) => resolve(result))
	.catch((err) => reject(err))
})
const nick = () => new Promise((resolve,reject) => {
	console.log('Getting Cosplay')
	fetchJson(`https://api.zeks.xyz/api/nickepep?apikey=apivinz`)
	.then((result) => resolve(result))
	.catch((err) => reject(err))
})
const japan = () => new Promise((resolve,reject) => {
	console.log('Getting japan')
	fetchJson(`https://api.vhtear.com/xxxsearch?query=japan&apikey=${vhtearkey}`)
	.then((result) => resolve(result))
	.catch((err) => reject(err))
})
const korea = () => new Promise((resolve,reject) => {
	console.log('Getting korea')
	fetchJson(`https://api.vhtear.com/xxxsearch?query=korea&apikey=${vhtearkey}`)
	.then((result) => resolve(result))
	.catch((err) => reject(err))
})
const indo = () => new Promise((resolve,reject) => {
	console.log('Getting Indo')
	fetchJson(`https://api.vhtear.com/xxxsearch?query=indonesia&apikey=${vhtearkey}`)
	.then((result) => resolve(result))
	.catch((err) => reject(err))
})
const news = () => new Promise((resolve,reject) => {
	console.log('Getting NEws')
	fetchJson(`https://api.zeks.xyz/api/tribunews?apikey=apivinz`)
	.then((result) => resolve(result))
	.catch((err) => reject(err))
})
const liputan = () => new Promise((resolve,reject) => {
	console.log('Getting Liputan')
	fetchJson(`https://api.zeks.xyz/api/liputan6?apikey=apivinz`)
	.then((result) => resolve(result))
	.catch((err) => reject(err))
})
const fox = () => new Promise((resolve,reject) => {
	console.log('Getting NEws')
	fetchJson(`https://api.zeks.xyz/api/foxnews?apikey=apivinz`)
	.then((result) => resolve(result))
	.catch((err) => reject(err))
})
const tikus = () => new Promise((resolve,reject) => {
	console.log('Getting NEws')
	fetchJson(`https://api.xteam.xyz/news/jalantikus?APIKEY=test`)
	.then((result) => resolve(result))
	.catch((err) => reject(err))
})
const togel = () => new Promise((resolve,reject) => {
	console.log('Getting Cosplay')
	fetchJson(`https://api.vhtear.com/togel&apikey=${vhtearkey}`)
	.then((result) => resolve(result))
	.catch((err) => reject(err))
})
const cars = () => new Promise((resolve,reject) => {
	console.log('Getting cars')
	fetchJson(`https://api.vhtear.com/downloadfilm?judul=cars&apikey=${vhtearkey}`)
	.then((result) => resolve(result))
	.catch((err) => reject(err))
})
const hm = () => new Promise((resolve,reject) => {
	console.log('Getting cars')
	fetchJson(`https://api.vhtear.com/mlherolist?apikey=${vhtearkey}`)
	.then((result) => resolve(result))
	.catch((err) => reject(err))
})
const joker = () => new Promise((resolve,reject) => {
	console.log('Getting cars')
	fetchJson(`https://api.vhtear.com/downloadfilm?judul=joker&apikey=${vhtearkey}`)
	.then((result) => resolve(result))
	.catch((err) => reject(err))
})
const war = () => new Promise((resolve,reject) => {
	console.log('Getting cars')
	fetchJson(`https://api.vhtear.com/downloadfilm?judul=star wars&apikey=${vhtearkey}`)
	.then((result) => resolve(result))
	.catch((err) => reject(err))
})
const men = () => new Promise((resolve,reject) => {
	console.log('Getting cars')
	fetchJson(`https://api.vhtear.com/downloadfilm?judul=wonder woman&apikey=${vhtearkey}`)
	.then((result) => resolve(result))
	.catch((err) => reject(err))
})
const spider = () => new Promise((resolve,reject) => {
	console.log('Getting cars')
	fetchJson(`https://api.vhtear.com/downloadfilm?judul=spider man&apikey=${vhtearkey}`)
	.then((result) => resolve(result))
	.catch((err) => reject(err))
})
const krik = () => new Promise((resolve,reject) => {
	console.log('Getting cars')
	fetchJson(`https://api.vhtear.com/downloadfilm?judul=dunkirk&apikey=${vhtearkey}`)
	.then((result) => resolve(result))
	.catch((err) => reject(err))
})
const gers = () => new Promise((resolve,reject) => {
	console.log('Getting cars')
	fetchJson(`https://api.vhtear.com/downloadfilm?judul=avengers&apikey=${vhtearkey}`)
	.then((result) => resolve(result))
	.catch((err) => reject(err))
})
const gaf = () => new Promise((resolve,reject) => {
	console.log('Getting cars')
	fetchJson(`https://api.vhtear.com/downloadfilm?judul=1917&apikey=${vhtearkey}`)
	.then((result) => resolve(result))
	.catch((err) => reject(err))
})
const mane = () => new Promise((resolve,reject) => {
	console.log('Getting cars')
	fetchJson(`https://api.vhtear.com/downloadfilm?judul=iron man&apikey=${vhtearkey}`)
	.then((result) => resolve(result))
	.catch((err) => reject(err))
})
const word = () => new Promise((resolve,reject) => {
	console.log('Getting covid')
	fetchJson(`https://api.vhtear.com/corona&apikey=${vhtearkey}`)
	.then((result) => resolve(result))
	.catch((err) => reject(err))
})
const kopi = () => new Promise((resolve,reject) => {
	console.log('Getting Kopi')
	fetchJson(`https://api.vhtear.com/nekonewepisode&apikey=${vhtearkey}`)
	.then((result) => resolve(result))
	.catch((err) => reject(err))
})
const corona = () => new Promise((resolve, reject) => {
    axios.get(`https://api.terhambar.com/negara/World`)
    .then((res) => {
        const sushi = `Info Covid-19 ${res.data.negara}\n\n*Kasus Baru :* ${res.data.kasus_baru}\n*Total Kasus :* ${res.data.total}\n*Sembuh :* ${res.data.sembuh}\n*Penanganan :* ${res.data.penanganan}\n*Meninggoy :* ${res.data.meninggal}\n*Meninggal Baru :* ${res.data.meninggal_baru}\n\n*Update :* ${res.data.terakhir}`
        resolve(sushi)
    })
    .catch((err) => {
        reject(err)
    })
})
const wp = async (url) => new Promise((resolve, reject) => {
    console.log('Get Story from Wattpad!')
    fetchJson(`http://docs-jojo.herokuapp.com/api/wattpad_search?q=${url}`)
    .then((result) => resolve(result))
    .catch((err) => reject(err))
})
const nulis7 = async (teks) => new Promise((resolve, reject) => {
    axios.get(`https://alfians-api.herokuapp.com/nulis?text=${teks}`)
    .then((res) => {
        resolve(`${res.data.result}`)
    })
    .catch((err) => {
        reject(err)
    })
})
const quran = () => new Promise((resolve, reject) => {
	axios.get('https://api.zeks.xyz/api/randomquran')
		.then(res => {
		resolve(res.data.result)
	})
	.catch((err) => {
		reject(err)
	})
	})
const tiktokdwn2 = async (url) => new Promise((resolve, reject) => {
	axios.get(`http://hujanapi.xyz/api/tiktokdl?url=${url}&apikey=vWI9FfcmTlL2yx8`)
	.then(res => {
	resolve(res.data)
})
.catch(err => {
	reject(err)
})
})

const valentine = (nama, pasangan, fotoMu, fotoPasangan) => new Promise((resolve, reject) => {
    console.log('Creating image...')
    fetchJson('https://api.vhtear.com/valentine?t1=' + nama + '&t2=' + pasangan + '&l1=' + fotoMu + '&l2=' + fotoPasangan + '&apikey=' + vhtearkey)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})
const indohot = async () => new Promise((resolve, reject) => {
    axios.get(`https://arugaz.herokuapp.com/api/indohot`)
    .then((res) => {
        const text = ` *Nakal jangan Sange boleh..* \n\n *Judul* _${res.data.result.judul}_ \n\n *Status* _${res.data.result.genre}_ \n\n *Durasi* _${res.data.result.durasi}_ \n\n *Link Bosq* _${res.data.result.url}_\n\nBy : ZeusXz`
        resolve(text)
    })
    .catch((err) =>{
        reject(err)
    })
})
const ymp4 = async (url) => new Promise((resolve, reject) => {
    axios.get(`https://st4rz.herokuapp.com/api/yta2?url=${url}`)
    .then((res) => {
		resolve(res.data)
    })
    .catch((err) =>{
        reject(err)
    })
})

module.exports = {
    ytmp3,
    wp,
      valentine,
    indohot,
    quran,
    hm,
    ymp4,
     fox,
    insta,
    ytmp4,
    stalkig,
    resepmsk,
    zeus,
   liputan,
    war,
    men,
    spider,
    krik,
    gers,
    gaf,
    mane,
    cars,
    wikien,
    joker,
   filmapikdwn,
    stalktwit,
    anoboy,
    korea,
    indo,
    dilan,
    nick,
    memeindo2,
    hemker,
    ham,
    hentai,
    tiktokdwn2,
    japan,
    corona,
    zodiak2,
    stalkigpict,
    quote,
    kopi,
    zimg,
    togel,
    listnek,
    cosplay,
    wiki,
    kusonime2,
    daerah,
    jadwaldaerah,
    cuaca,
    baik,
    movie2,
    tiktok,
    spamsms,
    spamgmail,
    chord,
    tulis,
   local,
    whter,
    tulis3,
    stickerlight,
    stalktt,
    ttpict,
	artinama,
	cekjodoh,
        putus,
	covidindo,
	bapakfont,
	lirik,
    movie,
    gsm,
    gsmpict,
    twit,
   cinta,
    virgin,
    trend,
	cerpen,
	cersex,
	puisi,
        hame,
       back,
        huruf,
        cuttly,
	cooltext,
	cekzodiak,
	dewabatch,
	bokep2,
sticker,
filmapik,
github,
	githubpict,
	kbbi,
	maps,
        ingfo,
        story,
        nhpdf,
        jam,
        ymp3,
        neon,
        word,
        ggle,
       news,
        name,
        instagram,
        facebook,
    nowm,
    asupan,
    ssweb,
lirik2,
nulis7,
bucin,
bucin2,
tikus,
life,
qrcode,
	qrread,
	spamcall,
	film,
        joox,
        kusonime, 
        missing,
        darkjokes,
	memeindo,
	fml
}
