const PATH_TO_AUDIO = 'asset/audio/';

var audioPermission = false;

var tapSFX = new Audio();
tapSFX.src = PATH_TO_AUDIO + 'tap.mp3';
tapSFX.preload = 'auto';

var bgmSFX = new Audio();
bgmSFX.src = PATH_TO_AUDIO + 'bg-music.mp3';
bgmSFX.preload = 'auto';
bgmSFX.loop = true;
bgmSFX.volume = 0.0;

var countdownSFX = new Audio();
countdownSFX.src = PATH_TO_AUDIO + 'tick-tock.mp3';
countdownSFX.preload = 'auto';
countdownSFX.loop = true;
countdownSFX.volume = 0.0;

var countdownfastSFX = new Audio();
countdownfastSFX.src = PATH_TO_AUDIO + 'tick-tock-fast.mp3';
countdownfastSFX.preload = 'auto';
countdownfastSFX.volume = 0.0;

var readySFX = new Audio();
readySFX.src = PATH_TO_AUDIO + 'ready.mp3';
readySFX.preload = 'auto';
readySFX.volume = 0.0;

var goSFX = new Audio();
goSFX.src = PATH_TO_AUDIO + 'go.mp3';
goSFX.preload = 'auto';
goSFX.volume = 0.0;

var correctSFX = new Audio();
correctSFX.src = PATH_TO_AUDIO + 'correct.mp3';
correctSFX.preload = 'auto';
correctSFX.volume = 0.0;

var successSFX = new Audio();
successSFX.src = PATH_TO_AUDIO + 'success.mp3';
successSFX.preload = 'auto';
successSFX.volume = 0.0;

var gameoverSFX = new Audio();
gameoverSFX.src = PATH_TO_AUDIO + 'game-over.mp3';
gameoverSFX.preload = 'auto';
gameoverSFX.volume = 0.0;

function askAudioPermission() {
    const TAG = 'askAudioPermission: ';

    $('#Permission').modal({
        backdrop: "static"
    });

    console.log(TAG);
}

function allowAudio() {
    const TAG = 'allowAudio: ';

    tapSFX.play();
    tapSFX.pause();
    tapSFX.volume = 1.0;

    bgmSFX.play();
    bgmSFX.pause();
    bgmSFX.volume = 1.0;

    countdownSFX.play();
    countdownSFX.pause();
    countdownSFX.volume = 1.0;

    countdownfastSFX.play();
    countdownfastSFX.pause();
    countdownfastSFX.volume = 1.0;

    readySFX.play();
    readySFX.pause();
    readySFX.volume = 0.5;

    goSFX.play();
    goSFX.pause();
    goSFX.volume = 0.5;

    correctSFX.play();
    correctSFX.pause();
    correctSFX.volume = 0.5;

    successSFX.play();
    successSFX.pause();
    successSFX.volume = 0.5;

    gameoverSFX.play();
    gameoverSFX.pause();
    gameoverSFX.volume = 0.5;

    audioPermission = true;

    console.log(TAG + 'success. ');
}