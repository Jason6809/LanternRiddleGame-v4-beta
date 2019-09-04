const PATH_TO_AUDIO = 'asset/audio/';

var audioPermission = false;

var bgmSFX = new Howl({
    src: [PATH_TO_AUDIO + 'bg-music.mp3'],
    preload: true,
    loop: true
});

var tapSFX = new Howl({
    src: [PATH_TO_AUDIO + 'tap.mp3'],
    preload: true,
});

readySFX = new Howl({
	src: [PATH_TO_AUDIO + 'ready.mp3'],
	preload: true,
});

goSFX = new Howl({
	src: [PATH_TO_AUDIO + 'go.mp3'],
	preload: true,
});

var countdownSFX = new Howl({
	src: [PATH_TO_AUDIO + 'tick-tock.mp3'],
	preload: true,
	loop: true
});

var countdownfastSFX = new Howl({
	src: [PATH_TO_AUDIO + 'tick-tock-fast.mp3'],
	preload: true,
	loop: true
});

var correctSFX = new Howl({
	src: [PATH_TO_AUDIO + 'correct.mp3'],
	preload: true
});

var gameoverSFX = new Howl({
	src: [PATH_TO_AUDIO + 'game-over.mp3'],
	preload: true
});

var successSFX = new Howl({
	src: [PATH_TO_AUDIO + 'success.mp3'],
	preload: true
});

function askAudioPermission() {
    const TAG = 'askAudioPermission: ';

    $('#Permission').modal({
        backdrop: "static"
    });

    console.log(TAG);
}


function allowAudio() {
    const TAG = 'allowAudio: ';

    audioPermission = true;

    console.log(TAG + 'success. ');
}