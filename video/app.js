const playVideo = () => {
  if (video.paused) {
    video.play();
    btn.innerHTML = "pause";
  } else {
    video.pause();
    btn.innerHTML = "play";
  }
};

const video = document.getElementById("bg-video");
const btn = document.getElementById("bg-video-control-btn");
btn.addEventListener("click", playVideo);
