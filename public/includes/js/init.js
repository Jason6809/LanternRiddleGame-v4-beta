const PATH_TO_JSON = 'asset/json/';

var db;

var currentLevel;
var riddleID = [];
var preparedRiddles = [];
var answeredRiddles = [];
var timer;

function init() {
    const TAG = 'init: ';

    // tapSFX.play();
    bgmSFX.volume(1.0);
    // countdownSFX.pause();
    // countdownSFX.currentTime = 0;
    // countdownfastSFX.pause();
    // countdownfastSFX.currentTime = 0;


    //initialise variables
    currentLevel = 0;
    riddleID = [];
    preparedRiddles = [];
    answeredRiddles = [];
    stopTimer();

    console.log(currentLevel);
    console.log(riddleID);
    console.log(preparedRiddles);
    console.log(answeredRiddles);
    console.log(stopTimer());

    // Check IndexedDB support
    window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
    // DON'T use "var indexedDB = ..." if you're not in a function.
    if (!window.indexedDB) {
        alert('Your browser doesn\'t support a stable version of IndexedDB. Such and such feature will not be available. ');
        console.warn('Your browser doesn\'t support a stable version of IndexedDB. Such and such feature will not be available. ');

    } else {
        $(() => {
            // Show Loader & Open Database
            $('#App').html(loaderScene);
            openDatabase();
        });
    }
}

function openDatabase() {
    const TAG = 'openDatabase: ';

    // Open DB
    var openRequest = indexedDB.open('riddles', 1);

    openRequest.onupgradeneeded = (event) => {
        db = event.target.result;

        if (!db.objectStoreNames.contains('riddles')) {
            console.log(TAG + 'ObjectStore is not exist. ');

            // Create ObjectStore 
            var objectStore = db.createObjectStore(
                'riddles', {
                    keyPath: 'id',
                    autoIncrement: true
                }
            );
            console.log(TAG + 'Create ObjectStore = riddles. Successful.');
        }
    };

    // Error
    openRequest.onerror = () => {
        console.error(TAG + 'Error, cannot open DB.' + openRequest.error);
    };

    // Success
    openRequest.onsuccess = (event) => {
        db = event.target.result;

        console.log(TAG + db);
        console.log(TAG + 'Success, DB opened successful. ');
        importRiddles();
    };
}

function importRiddles() {
    const TAG = 'importRiddles: ';

    $.ajax({
        url: PATH_TO_JSON + "riddles.json",
        type: 'GET',
        dataType: 'json',
        isLocale: true,
        success: (data) => {
            console.log(TAG + 'Success to load riddles.json. ');

            //Open Transaction
            var transaction = db.transaction(['riddles'], 'readwrite');

            // Get Target ObjectStore
            var objectStore = transaction.objectStore('riddles');

            var request;

            //Loop to Import Riddles
            data['riddles'].forEach((riddle) => {
                // Adding Records Request
                request = objectStore.put(riddle);
                riddleID.push(riddle.id);

                console.log(riddleID);
                console.log(TAG + 'Success, Riddle_ID = ' + riddle.id + ' imported succesfully. ');
            });

            //Error
            request.onerror = () => {
                console.error(TAG + 'Error, Riddle_ID = ' + riddle.id + ' import fail. ' + request.error);
            };

            //Success
            request.onsuccess = () => {
                console.log(TAG + 'Success, All Riddle imported succesfully. ');

                if (!audioPermission) {

                    askAudioPermission();

                    document.getElementById('AllowAudioButton').addEventListener('click', (event) => {
                        event.preventDefault;

                        allowAudio();

                        bgmSFX.play();

                        setTimeout(() => {
                            $("#Loader").animate({
                                opacity: 0
                            }, "linear", () => {
                                showMenu();
                            });
                        }, 1000);
                    });

                } else {

                    setTimeout(() => {
                        $("#Loader").animate({
                            opacity: 0
                        }, "linear", () => {
                            showMenu();
                        });
                    }, 1000);
                }
            };
        },
        error: (jqXHR, textStatus, errorThrown) => {
            alert(TAG + 'An error occurred... Look at the console (F12 or Ctrl+Shift+I, Console tab) for more information!');

            console.log(TAG + 'An error occurred... Look at the console (F12 or Ctrl+Shift+I, Console tab) for more information!');
            console.log('jqXHR:');
            console.log(jqXHR);
            console.log('textStatus:');
            console.log(textStatus);
            console.log('errorThrown:');
            console.log(errorThrown);
        }
    });
}

function showMenu() {
    const TAG = 'showMenu: ';

    $('#App').html(menuScene);

    $('#App').on('click', (event) => {
        event.preventDefault;

        startGame();
    });

    console.log(TAG);
}