function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('active')
}


function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;
    key.classList.add('active');
    audio.currentTime = 0;
    audio.play()
    // console.log(audio, key)
}





const keys = Array.from(document.querySelectorAll('.key'))
keys.forEach(key => key.addEventListener('transitionend', removeTransition));



window.addEventListener('keydown', playSound)