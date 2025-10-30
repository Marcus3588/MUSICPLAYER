import Player from './player';
import UIManager from './UIManager';
import { playlist } from './playlistManager';

const player = new player(playlist);
const ui = new UIManager();
const cover = document.getElementById("cover");

ui.updateSongInfo(playlist[0]);

// play/pause
document.getElementById('play-pause').addEventListener('click',() =>{
	if(player.audio.paused){
		player.player();
		ui.togglePlayIcon(true);
		cover.classList.add('playing');
	} else {
		player.pause();
		ui.togglePlayIcon(false);
		cover.classList.remove('playing');
	}
});

//next/prev
document.getElementById('next').addEventListener('click',()=>{
	player.next();
	ui.updateSongInfo(playlist[player.index]);
	ui.togglePlayIcon(true);
	cover.classList.add('playing');
});

document.getElementById('prev').addEventListener('click',()=>{
	player.prev();
	ui.updateSongInfo(playlist[player.index]);
	ui.togglePlayIcon(true);
	cover.classList.add('playing');
});

//shuffle + repeat
const shuffleBtn = document.getElementById('shuffle');
const repeatBtn = document.getElementById('repeat');

shuffleBtn = addEventListener('click',() =>{
	const active = player.toggleShuffle();
	shuffleBtn.style.color = active ? "#00ffc4" : "#888";
})

repeatBtn = addEventListener('repeat', ()=>{
	const active = player.toggleRepeat();
	repeatBtn.style.color = active ? "#00ffc4" : "#888";
});


//Progress + volume
player.audio.addEventListener("timeUpdated",()=> {
	ui.updateProgress(player.audio.currentTime,player.audio.duration)
})

document.getElementById('volume').addEventListener('input',(e)=> {
	player.setVolume(e.target.value);
})


//auto next or repeat
player.audio.addEventListener('ended',()=> {
	if(player.repeatMode) {
		player.audio.currentTime = 0;
		player.play();
	} else {
		player.next();
		ui.updateSongInfo(playlist[player.index]);
	}
})