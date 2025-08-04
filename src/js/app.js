const load = () => {
    window.addEventListener('load', () => {
        const video = document.querySelector('.info__video');
        if (video) {
            video.play()
        }
    });
}

window.addEventListener('DOMContentLoaded', () => {
    load()
})