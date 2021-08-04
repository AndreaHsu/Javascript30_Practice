//Get elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress')
const progressBar = player.querySelector('.progress__filled')
const toggle = player.querySelector('.toggle')
const skipButtons = player.querySelectorAll('[data-skip]')
const ranges = player.querySelectorAll('.player__slider')
const fullscreenButton = player.querySelector('.fullScreen')

function togglePlay(){
    // console.log(video.paused)
    const method = video.paused ?'play' :'pause'
    // this line won't affect,becuase when toggle.addEventListener call it,
    // "this" is "toggle" rather than "video"
    // const method = this.paused ? 'play' :'pause'
    video[method]();
}

function handleButtonChange(){
    const icon = this.paused ? '►' : '❚ ❚';
    toggle.textContent = icon
    // console.log(toggle.textContent)
}
function skip(){
    // console.log(video.currentTime)
    video.currentTime += parseFloat(this.dataset.skip)
}
function handleRangeUpdate(){
    // console.log(this.name)
    video[this.name] = this.value;
}
function handleProgress(){
    const percent = (video.currentTime/video.duration)*100;
    progressBar.style.flexBasis = `${percent}%`;
}
function handleScrubChange(e){
    // console.log(e)
    const scrubTime = (e.offsetX/progress.offsetWidth)*video.duration;
    video.currentTime = scrubTime
}
function handleFullScreen(){
    // console.dir(video.requestFullscreen)
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen();
    } else if (video.mozRequestFullScreen) {
        video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
    } 
}
video.addEventListener('click',togglePlay)
video.addEventListener('play',handleButtonChange)
video.addEventListener('pause',handleButtonChange)
video.addEventListener('timeupdate',handleProgress)

toggle.addEventListener('click',togglePlay)
skipButtons.forEach(button => button.addEventListener('click',skip))
ranges.forEach(range => range.addEventListener('change',handleRangeUpdate))
ranges.forEach(range => range.addEventListener('mousemove',handleRangeUpdate))

let mousedown = false;
progress.addEventListener('click',handleScrubChange)
progress.addEventListener('mousedown',() => mousedown = true)
progress.addEventListener('mouseup',() => mousedown = false)
progress.addEventListener('mousemove',(e) => mousedown && handleScrubChange(e))

fullscreenButton.addEventListener('click',handleFullScreen)