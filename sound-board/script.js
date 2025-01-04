const sounds = ["applause", "boo", "gasp", "meow", "dogbark"];
const audios = document.querySelectorAll("audio");

sounds.forEach((sound) => {
  // get the current button
  const btn = document.getElementById(sound);
  // get the current audio
  const audio = document.getElementById(`${sound}-sound`);

  btn.addEventListener("click", () => {
    stopAudios();
    // play the current audio
    audio.play();
  });
});

function stopAudios() {
  // stop all audios
  audios.forEach((audioElement) => {
    audioElement.pause();
    // reset the audio time
    audioElement.currentTime = 0;
  });
}
