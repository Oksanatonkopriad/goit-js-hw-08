import Player from '@vimeo/player';
import throttle from 'lodash.throttle'

 const iframe = document.querySelector('iframe');
 const player = new Player(iframe);

    player.on('timeupdate', throttle(onPlay, 1000));

    function onPlay(timeupdate) {
        let pause = timeupdate.seconds;
        console.log(pause);
        localStorage.setItem("videoplayer-current-time", pause);
    };

const currentTime = localStorage.getItem("videoplayer-current-time");

player
    .setCurrentTime(currentTime)
    .then(function (_pause) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});
    
