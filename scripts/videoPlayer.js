export const videoPlayerInit = () => {
  const videoPlayer = document.querySelector('.video-player');
  const videoButtonPlay = document.querySelector('.video-button__play');
  const videoButtonStop = document.querySelector('.video-button__stop');
  const videorogress = document.querySelector('.video-progress');
  const videoTimePassed = document.querySelector('.video-time__passed');
  const videoTimeTotal = document.querySelector('.video-time__total');

  const toggleIcon = () => {
    if (videoPlayer.paused) {
      videoButtonPlay.classList.remove('fa-pause');
      videoButtonPlay.classList.add('fa-play');
    } else {
      videoButtonPlay.classList.add('fa-pause');
      videoButtonPlay.classList.remove('fa-play');
    }
  }

  const togglePlay = () => {
    if (videoPlayer.paused){
      videoPlayer.play();
    } else {
      videoPlayer.pause();
    }
  };

  const stopPlay = () => {
    videoPlayer.pause();
    videoPlayer.currentTime = 0;
  }

  videoPlayer.addEventListener('click', togglePlay);
  videoButtonPlay.addEventListener('click', togglePlay);

  videoPlayer.addEventListener('play', toggleIcon);
  videoPlayer.addEventListener('pause', toggleIcon);

  videoButtonStop.addEventListener('click', stopPlay);
};