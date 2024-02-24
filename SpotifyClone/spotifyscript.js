// console.log("Welcome to spotify");
let songIndex = 0;
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar')
let gif = document.getElementById('gif')
let songItem = Array.from(document.getElementsByClassName('songItem'))
let songs = [
    { songsName: 'Ae dil hai mushkil', filePath: 'https://pagalnew.com/download128/4097', coverPath: 'https://pagalnew.com/coverimages/Ae-Dil-Hai-Mushkil-Title-Track-Pritam-500-500.jpg' },
    { songsName: 'Bulleya', filePath: 'https://pagalnew.com/download128/4098', coverPath: 'https://pagalnew.com/coverimages/Bulleya-Ae-Dil-Hai-Mushkil-500-500.jpg' },
    { songsName: 'Sunn raha hai na', filePath: 'https://pagalnew.com/download128/6025', coverPath: 'https://pagalnew.com/coverimages/Sunn-Raha-Hai-Male-Aashiqui-2-500-500.jpg' },
    { songsName: 'Dil mera muft ka', filePath: 'https://pagalnew.com/download128/6494', coverPath: 'https://pagalnew.com/coverimages/Dil-Mera-Muft-Ka-Agent-Vinod-500-500.jpg' },
    { songsName: 'Daav laga', filePath: 'https://pagalnew.com/download128/8369', coverPath: 'https://pagalnew.com/coverimages/Daav-Laga-Aagey-Se-Right-500-500.jpg' },
    { songsName: 'King shit', filePath: 'https://p320.djpunjab.is/data/48/54902/303590/King%20Shit%20-%20Shubh.mp3', coverPath: 'https://cover.djpunjab.is/54902/300x700/leo-ep-shubh.webp' }
]

songItem.forEach((element, i) => {
    // console.log(element, i);
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songsName;
    element.getElementsByClassName('songItemPlay')[0].src = songs[i].filePath;
})

let audioElement = new Audio('https://pagalnew.com/download128/4097')

// Listen to events
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-solid fa-play')
        masterPlay.classList.add("fa-solid fa-pause")
        gif.style.opacity = 1;

    } else {
        audioElement.pause();
        masterPlay.classList.remove("fa-solid fa-pause")
        masterPlay.classList.add("fa-solid fa-play")
        gif.style.opacity = 0;
    }         
})

audioElement.addEventListener('timeupdate', () => {
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100)
    myProgressBar.value = progress
})
myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle')
        element.classList.add('fa-solid fa-play')
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        //console.log(e.target);
        makeAllPlays();
        index = parseInt(e.target.id);
        e.target.classList.remove('fa-solid fa-play');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `${index + 1}https://pagalnew.com/download128/4097`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-solid fa-play')
        masterPlay.classList.add('fa-pause-circle')
    })
})
