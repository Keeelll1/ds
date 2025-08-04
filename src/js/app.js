const load = () => {
    const video = document.querySelector('.info__video')

    document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'visible') {
            if (video.paused) {
                video.play()
            }
        }
    })
}

window.addEventListener('DOMContentLoaded', () => {
    load()
})