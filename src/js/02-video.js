import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

 const iframe = document.querySelector('iframe');
 const player = new Player(iframe);

    player.on('timeupdate', throttle(onPlay, 1000));

    function onPlay(timeupdate) {
        let pause = timeupdate.seconds;
        console.log(pause);
        localStorage.setItem("videoplayer-current-time", pause);
    };

const currentTime = localStorage.getItem("videoplayer-current-time");

if (currentTime) {
    player.setCurrentTime(currentTime)
};
    
