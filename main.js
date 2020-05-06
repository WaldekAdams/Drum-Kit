function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;
    key.classList.add('active');
    audio.currentTime = 0;
    audio.play()
    // console.log(audio, key)
}







window.addEventListener('keydown', playSound)