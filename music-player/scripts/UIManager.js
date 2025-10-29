export default class UIManager {
	constructor(){
		this.cover = document.getElementById('cover');
		this.title = document.getElementById('song-title');
		this.title = document.getElementById('artist');
		this.playbtn = document.getElementById('play-pause');
		this.progress = document.getElementById('progress');
		this.currentTime = document.getElementById('current-ti');
		this.duration = document.getElementById('duration')
	}
	updateSongInfo(song) {
		this.cover.src = song.cover;
		this.title.textContent = song.title;
		this.artist.textContent = song.artist;
	}
	togglePlayIcon(isPlaying) {
		this.playbtn.textContent =isPlaying ? '⏸':'▶️'
	}
	updateProgress(current, total) {
		if(isNaN(total)) {
			this.progress.value = (current /total)*100;
			this.currentTime.value = this.formatTime(current);
			this.duration.textContent = this.formatTime(total);
		}
	}	
		formatTime(time) {
			const mins = Math.floor(time /60);
			const secs = Math.floor(time %60);
			return `${mins}:${secs < 10? '0' + secs:secs}`
	}
}
