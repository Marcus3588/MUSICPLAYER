export default class player {
	constructor(playlist) {
		this.playlist = playlist;
		this.index = 0;
		this.audio = new Audio(playlist[this.index].src);
		this.shuffleMode = false;
		this.repeatMode = false;
	}
	play(){
		this.audio.play();
	}
	pause(){
		this.audio.pause();
	}
	next(){
		if(this.shuffleMode) {
			this.index = Math.floor(Math.random()*this.playlist.length);
		} else{
			this.index = (this.index+1) %this.playlist.length;
		}
		this.loadCurrentSong();
		this.play();
	}
	prev(){
		this.index = (this.index-1 + this.playlist.length)  % this.playlist.length;
		this.loadCurrentSong();
		this.play();
	}
	toggleShuffle(){
		this.shuffleMode = !this.shuffleMode;
		return this.shuffleMode;
	}
	toggleRepeat(){
		this.repeatMode = !this.repeatMode;
		return this.repeatMode;
	}
	loadCurrentSong(){
		this.audio.src = this.playlist[this.index].src;
	}
	setVolume(value) {
		this.audio.volume = value;
	}
}