window.addEventListener('keydown', playSound);

const keys = document.querySelectorAll('.key');
keys.forEach(key => {
  key.addEventListener('transitionend', endTransition);
});

function endTransition(e) {
  this.classList.remove('playing');
}

function playSound(e) {
  const audioEl = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const keyEl = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  console.log(audioEl);
  if (!audioEl) return;

  audioEl.currentTime = 0;
  audioEl.play();
  keyEl.classList.add('playing');
}
