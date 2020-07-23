const btn = document.querySelector('.switch-btn')
const video = document.querySelector('.video-container')

// let user pause/play background video
btn.addEventListener('click', function() {
    if(!btn.classList.contains('slide')) {
        btn.classList.add('slide')
        video.pause()
    } else {
        btn.classList.remove('slide')
        video.play()
    }
})

// setup preloader
//  use load event - fired when the whole page has loaded, 
// not DOMContentLoaded because it fires after initial html document is loaded and parsed, will interrupt js/css/images/video/etc

const preloader = document.querySelector('.preloader')

window.addEventListener('load', function() {
    preloader.classList.add('hide-preloader')
})