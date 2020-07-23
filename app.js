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

