let now_playing = document.querySelector('.now-playing');
let track_art = document.querySelector('.track-art');
let track_name = document.querySelector('.track-name');
let track_artist = document.querySelector('.track-artist');
let lyrics = document.querySelector('.lyrics');
let songList = document.getElementById('song-list-wrapper');

let playpause_btn = document.querySelector('.playpause-track');
let next_btn = document.querySelector('.next-track');
let prev_btn = document.querySelector('.prev-track');

let seek_slider = document.querySelector('.seek_slider');
let volume_slider = document.querySelector('.volume_slider');
let curr_time = document.querySelector('.current-time');
let total_duration = document.querySelector('.total-duration');
let wave = document.getElementById('wave');
let randomIcon = document.querySelector('.fa-random');
let curr_track = document.createElement('audio');

let track_index = 0;
let isPlaying = false;
let isRandom = false;
let updateTimer;

curr_track.volume = volume_slider.value / 100;
let boxHeight = document
    .getElementById('track-wrapper')
    .offsetHeight;

lyrics.style.maxHeight = boxHeight + 'px';

const music_list = [
    {
        index: 0,
        img: 'images/tabas.png',
        name: 'Nicht mehr zurück',
        artist: 'DJ Tabas, Felix Pirs',
        music: 'music/nmz.wav',
        lyrics: "Nimmermehr <br> \
        Nimmermehr zu mir zurück zu mir Baby <br> \
        Kann dich hier nimmer seh'n <br> \
        "
    }, {
        index: 1,
        img: 'images/gold-rush-kid.jpg',
        name: 'Gold Rush Kid',
        artist: 'George Ezra',
        music: 'https://github.com/nocontent06/nocontent06.github.io/blob/main/music/Gold-Rush' +
                '-Kid_George-Ezra.mp3?raw=true',
        lyrics: "Rock, paper, scissor, I play against the mirror <br> \
        There hasn't been a winner for nine days straight <br> \
        I went to see the doctor, she cut open my head <br> \
        Took a look inside and this is what she said <br> \
        Boy, you're not alone, although you feel alone <br> \
        You're just like everyone <br> \
        You're holding on  <br> \
        Gold rush kid, robbing the bank <br> \
        Making a run for it and learning to dance <br> \
        I'm the gold rush kid, robbing the bank <br> \
        Making a run for it and learning to dance <br> \
        Watching me now, now, now <br> \
        I see you watching me now, I'm dancing <br> \
        Watching me now, now, now <br> \
        I see you watching me now, I'm dancing <br> \
        She said, You don't need money to build a swimming pool <br> \
        I'm running all my taps, gonna flood the bathroom <br> \
        All my friends are queuing up, they wanna dive in <br> \
        They wanna figure out if they will sink or swim <br> \
        You're not alone, although you feel alone <br> \
        You're just like everyone <br> \
        You're holding on <br> \
        I'm the gold rush kid, robbing the bank <br> \
        Making a run for it and learning to dance <br> \
        I'm the gold rush kid, robbing the bank <br> \
        Making a run for it and learning to dance <br> \
        Watching me now, now, now <br> \
        I see you watching me now, I'm dancing <br> \
        Watching me now, now, now <br> \
        I see you watching me now, I'm dancing <br> \
        I, I want a vacant mind <br> \
        Wanna dance 'til my shoes fall apart <br> \
        And moon falls out of the sky <br> \
        It's just a little dream of mine <br> \
        I'm the gold rush kid, robbing the bank <br> \
        Making a run for it and learning to dance <br> \
        I'm the gold rush kid, robbing the bank <br> \
        Making a run for it and learning to dance <br> \
        Watching me now, now, now <br> \
        I see you watching me now I'm dancing <br> \
        Watching me now, now, now <br> \
        I see you watching me now I'm dancing <br> \
        Watching me now, now, now <br> \
        I see you watching me now I'm dancing <br> \
        Watching me now, now, now <br> \
        I see you watching me now I'm dancing <br> "
    }, {
        index: 2,
        img: 'images/down-under.jpg',
        name: 'Down Under',
        artist: 'Flip Capella, [...], Leines',
        music: 'https://github.com/nocontent06/nocontent06.github.io/blob/main/music/down-unde' +
                'r-ft-leines.mp3?raw=true',
        lyrics: "Travelin' in a fried-out Kombi <br> \
        On a hippie trail, head full of zombie <br> \
        I met a strange lady, she made me nervous <br> \
        She took me in and gave me breakfast <br> \
        And she said <br> \
        Do you come from a land down under? <br> \
        Where women glow and men plunder <br> \
        Can't you hear, can't you hear the thunder? <br> \
        You better run, you better take cover <br> \
        Do you come from a land down under? <br> \
        Where women glow and men plunder <br> \
        Can't you hear, can't you hear the thunder? <br> \
        You better run, you better take cover <br> \
        Buyin' bread from a man in Brussels <br> \
        He was six-foot-four and full of muscle <br> \
        I said, 'Do you speak-a my language?' <br> \
        He just smiled and gave me a Vegemite sandwich <br> \
        He said <br> \
        I come from a land down under <br> \
        Where beer does flow and men chunder <br> \
        Can't you hear, can't you hear the thunder? <br> \
        You better run, you better take cover, yeah <br> \
        I come from a land down under <br> \
        Where beer does flow and men chunder <br> \
        Can't you hear, can't you hear the thunder? <br> \
        You better run, you better take cover, yeah <br> \
        Lyin' in a den in Bombay <br> \
        With a slack jaw, and not much to say <br> \
        I said to the man, 'Are you tryin' to tempt me? <br> \
        Because I come from the land of plenty' <br> \
        Do you come from a land down under? <br> \
        Where women glow and men plunder <br> \
        Can't you hear, can't you hear the thunder? <br> \
        You better run, you better take cover <br> \
        'Cause we are <br> \
        Livin' in a land down under <br> \
        Where women glow and men plunder <br> \
        Can't you hear, can't you hear the thunder? <br> \
        You better run, you better take cover, yeah <br> "
    },
    {
        index: 3,
        img: 'images/geronimo.jpg',
        name: 'Geronimo',
        artist: 'Sheppard',
        music: 'https://github.com/nocontent06/nocontent06.github.io/blob/main/music/geronimo-sheppard.mp3?raw=true',
        lyrics: "Can you feel it? <br>"
    }
];
let songs_in_array = [];
let artists_in_array = [];
let images_in_array = [];

let li;
function log(log) {
    console.log(log);
}
loadTrack(track_index);

function loadTrack(track_index) {
    // lyrics.innerHTML = "Keine Lyrics vorhanden";
    clearInterval(updateTimer);
    reset();

    curr_track.src = music_list[track_index].music;
    curr_track.load();

    track_art.style.backgroundImage = "url(" + music_list[track_index].img + ")";
    track_name.textContent = music_list[track_index].name;
    track_artist.textContent = music_list[track_index].artist;
    now_playing.textContent = "Playing music " + (
        track_index + 1
    ) + " of " + music_list.length;
    console.log(track_name.textContent);
    lyrics.innerHTML = music_list[track_index].lyrics;
    // if (music_list[0].name == "Gold Rush Kid") {     lyrics.innerHTML =
    // fetch('lyrics/gold-rush-kid.txt')         .then(             response =>
    // response.text()         )         .then(text => lyrics.innerHTML = text); }

    updateTimer = setInterval(setUpdate, 1000);

    curr_track.addEventListener('ended', nextTrack);
    random_bg_color();
}
function getCountOfSongs() {
    let count = 0;
    for (let i = 0; i < music_list.length; i++) {
        count++;
    }
    for (let index = 0; index < music_list.length; index++) {
        songs_in_array.push(music_list[index].name);
        artists_in_array.push(music_list[index].artist);
        images_in_array.push(music_list[index].img);

        console.log(songs_in_array);
        console.log(artists_in_array);
        console.log(images_in_array);

        li = document
            .querySelector('.song-list')
            .innerHTML = artists_in_array
            .map(
                    (artist, index) => `<img class="cover-image-small" src="${images_in_array[index]}"> ${artist} - <br> ${songs_in_array[index]}`
                )
            .map((i => `<li onclick = getloadTrack()>${i}</li>`))
            .join('');
        li.innerText = songs_in_array[index];
       

        // songList.appendChild(li);
    }

    return count;

}
getCountOfSongs()
function getloadTrack() {
    g = document.querySelector('.song-list')
    for (var i = 0, len = g.children.length; i < len; i++) {

        (function (index) {
            g.children[i].onclick = 
            function () {
                track_index = index
                loadTrack(index);
                playTrack();
                }
        })(i);

    }

}
console.log(li)
function random_bg_color() {
    let hex = [
        '0',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        'a',
        'b',
        'c',
        'd',
        'e'
    ];
    let a;

    function populate(a) {
        for (let i = 0; i < 6; i++) {
            let x = Math.round(Math.random() * 14);
            let y = hex[x];
            a += y;
        }
        return a;
    }
    let Color1 = populate('#');
    let Color2 = populate('#');
    var angle = 'to right';

    let gradient = 'linear-gradient(' + angle + ',' + Color1 + ', ' + Color2 + ")";
    document.body.style.background = gradient;
}
function reset() {
    curr_time.textContent = "00:00";
    total_duration.textContent = "00:00";
    seek_slider.value = 0;
}
function randomTrack() {
    isRandom
        ? pauseRandom()
        : playRandom();
}
function playRandom() {
    isRandom = true;
    randomIcon
        .classList
        .add('randomActive');
}
function pauseRandom() {
    isRandom = false;
    randomIcon
        .classList
        .remove('randomActive');
}
function repeatTrack() {
    let current_index = track_index;
    loadTrack(current_index);
    playTrack();
}
function playpauseTrack() {
    isPlaying
        ? pauseTrack()
        : playTrack();
}
function playTrack() {
    curr_track.play();
    isPlaying = true;
    track_art
        .classList
        .add('rotate');
    wave
        .classList
        .add('loader');
    playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';

}
function pauseTrack() {
    curr_track.pause();
    isPlaying = false;
    track_art
        .classList
        .remove('rotate');
    wave
        .classList
        .remove('loader');
    playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
}
function nextTrack() {
    if (track_index < music_list.length - 1 && isRandom === false) {
        track_index += 1;
    } else if (track_index < music_list.length - 1 && isRandom === true) {
        let random_index = Number.parseInt(Math.random() * music_list.length);
        track_index = random_index;
    } else {
        track_index = 0;
    }
    loadTrack(track_index);
    playTrack();
}
function prevTrack() {
    if (track_index > 0) {
        track_index -= 1;
    } else {
        track_index = music_list.length - 1;
    }
    loadTrack(track_index);
    playTrack();
}
function seekTo() {
    let seekto = curr_track.duration * (seek_slider.value / 100);
    curr_track.currentTime = seekto;
}
function setVolume() {
    curr_track.volume = volume_slider.value / 100;
}
function setUpdate() {
    let seekPosition = 0;
    if (!isNaN(curr_track.duration)) {
        seekPosition = curr_track.currentTime * (100 / curr_track.duration);
        seek_slider.value = seekPosition;

        let currentMinutes = Math.floor(curr_track.currentTime / 60);
        let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
        let durationMinutes = Math.floor(curr_track.duration / 60);
        let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

        if (currentSeconds < 10) {
            currentSeconds = "0" + currentSeconds;
        }
        if (durationSeconds < 10) {
            durationSeconds = "0" + durationSeconds;
        }
        if (currentMinutes < 10) {
            currentMinutes = "0" + currentMinutes;
        }
        if (durationMinutes < 10) {
            durationMinutes = "0" + durationMinutes;
        }

        curr_time.textContent = currentMinutes + ":" + currentSeconds;
        total_duration.textContent = durationMinutes + ":" +
                durationSeconds;
    }
}
let j = 1;
function backToSongList() {
    j++;
    console.log(j);
    log('backToSongList');
    if (j%2 == 0){
        document.getElementById('song-list-wrapper').className = 'animated-song-out wrapper';
        document.getElementById('song-list-wrapper').style.display = 'block'
    }
    else{
        document.getElementById('song-list-wrapper').className = 'animated wrapper';
        document.getElementById('song-list-wrapper').style.display = 'none'
    }
    }
let i = 1;
function hideLyrics() {
    i++;
    // document.getElementById('lyrics-wrapper').className = 'animated-right wrapper';
    // document.getElementById('lyrics-wrapper').style.display = 'block'
    console.log(i);
    log('hideLyrics');
    if (i%2 == 1){
        document.getElementById('lyrics-wrapper').className = 'animated-lyrics-out wrapper';
        document.getElementById('lyrics-wrapper').style.display = 'block'
        console.log('even')
    }
    else{
        document.getElementById('lyrics-wrapper').className = 'animated-right wrapper';
        document.getElementById('lyrics-wrapper').style.display = 'block'
        console.log('odd')
        // document.getElementById('song-list-wrapper').style.display = 'none'
    }

}