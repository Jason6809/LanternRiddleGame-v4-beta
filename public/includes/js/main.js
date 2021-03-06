async function startGame() {
    const TAG = 'startGame: ';

    // Remove Click Event Listener
    $('#App').off('click');

    // Show Loader
    // Parse HTML
    $('#App').html(loaderScene);

    var count = 0;
    while (count < 9) {
        await addRiddleToPrepared();
        count++;
    }

    setTimeout(() => {
        $("#Loader").animate({
            opacity: 0
        }, "linear", () => {
            loadGameScene();
        });
    }, 1000);
}

function loadGameScene() {
    const TAG = 'loadGameScene: ';

    $('#App').html(mainScene);
    console.log(TAG);

    showRiddle();
}

async function showRiddle() {
    const TAG = 'showRiddle: ';

    updateProgressBar();

    if (currentLevel < 9) {
        if (preparedRiddles.length > 0) {
            await showPreparation();
            showQuestionAndOptions();

            console.log(TAG);
        } else {
            alert('No more question');
            init();
        }
    } else {
        showSuccess();
    }
}

function showPreparation() {
    const TAG = 'showPreparation: ';
    console.log(TAG);

    bgmSFX.volume(0.5);

    //init
    $('#Question').html('');
    $('#Timer').html('9');
    $('.btn-label').html('');
    $('.option-btn').val('');
    $('.option-btn').prop('disabled', true);

    return new Promise((resolve, reject) => {

        // Show Ready Text
        $('#ReadyText').show(() => {

            // readySFX.volume = 0.1;
            readySFX.play();

            $('#ReadyText').animate({
                display: "block",
                opacity: 1,
                fontSize: "4rem"
            }, 'swing', () => {

                setTimeout(() => {
                    // Hide Ready Text
                    $('#ReadyText').css({
                        display: "none",
                        opacity: 0,
                        fontSize: "8rem"
                    });

                    // Show Start Text
                    $('#StartText').show(() => {

                        // goSFX.volume = 0.1;
                        goSFX.play();

                        $('#StartText').animate({
                            display: "block",
                            opacity: 1,
                            fontSize: "4rem"
                        }, 'swing', () => {
                            setTimeout(() => {
                                // Hide Start Text
                                $('#StartText').css({
                                    display: "none",
                                    opacity: 0,
                                    fontSize: "8rem"
                                });

                                resolve();
                            }, 600);
                        });
                    });
                }, 600);
            });
        });
    });
}

function updateProgressBar() {
    const TAG = 'updateProgressBar: ';

    switch (currentLevel) {
        case 0:
            $('#ProgressBar').css(
                "width", "0%"
            );
            $('#ProgressBar').html('');
            $('#Level').html('0');
            break;
        case 1:
            $('#ProgressBar').css(
                "width", "11%"
            );
            $('#ProgressBar').html('1');
            $('#Level').html('1');
            break;
        case 2:
            $('#ProgressBar').css(
                "width", "22%"
            );
            $('#ProgressBar').html('2');
            $('#Level').html('2');
            break;
        case 3:
            $('#ProgressBar').css(
                "width", "33%"
            );
            $('#ProgressBar').html('3');
            $('#Level').html('3');
            break;
        case 4:
            $('#ProgressBar').css(
                "width", "44%"
            );
            $('#ProgressBar').html('4');
            $('#Level').html('4');
            break;
        case 5:
            $('#ProgressBar').css(
                "width", "55%"
            );
            $('#ProgressBar').html('5');
            $('#Level').html('5');
            break;
        case 6:
            $('#ProgressBar').css(
                "width", "66%"
            );
            $('#ProgressBar').html('6');
            $('#Level').html('6');
            break;
        case 7:
            $('#ProgressBar').css(
                "width", "77%"
            );
            $('#ProgressBar').html('7');
            $('#Level').html('7');
            break;
        case 8:
            $('#ProgressBar').css(
                "width", "88%"
            );
            $('#ProgressBar').html('8');
            $('#Level').html('8');
            break;
        case 9:
            $('#ProgressBar').css(
                "width", "100%"
            );
            $('#ProgressBar').html('9');
            $('#Level').html('9');
            break;
        default:
            break;
    }

    console.log(TAG);
}

function showQuestionAndOptions() {
    const TAG = 'showQuestionAndOptions: ';

    var riddle = preparedRiddles[0];
    var options = riddle.options;
    var buttons = document.querySelectorAll('.option-btn');

    // document.getElementById('ID').innerHTML = riddle.id;
    document.getElementById('Question').innerHTML = riddle.question;
    // document.getElementById('Hint').innerHTML = riddle.hint;

    options.forEach((option, index) => {
        buttons[index].firstElementChild.innerHTML = option.option;
        buttons[index].value = option.value;
    });

    // Start Timer
    countdownTimer(document.getElementById('Timer'));

    $('#Question').fadeIn();
    $('.option-btn').prop('disabled', false);
    $('.btn-label').animate({
        opacity: 1
    });

    $('#ExitButton').prop('disabled', false);

    console.log(TAG);
}

function countdownTimer(element) {
    const TAG = 'countdownTimer: ';

    countdownSFX.play();

    var el = element;
    var counter = 9;

    timer = setInterval(() => {
        console.log(TAG + 'counter = ' + counter);

        counter--;
        el.innerHTML = counter;

        if (counter === 5) {
            countdownfastSFX.play();
            countdownSFX.stop();
        }

        if (counter <= 0) {
            stopTimer();

            addRiddleToAnswered(preparedRiddles[0]);

            if (preparedRiddles.length > 0) {
                reloadRiddle();
            }
            showFailure();
        }
    }, 800);
}

function stopTimer() {
    const TAG = 'stopTimer: ';
    //Stop Timer
    clearInterval(timer);

    countdownSFX.stop();
    countdownfastSFX.stop();

    console.log(TAG + 'stopped timer = ' + timer);
}

function checkAnswer(value) {
    const TAG = 'checkAnswer: ';

    stopTimer();

    addRiddleToAnswered(preparedRiddles[0]);

    if (preparedRiddles.length > 0) {
        reloadRiddle();
    }

    if (value === 'true') {
        console.log(TAG + value);

        currentLevel++;
        updateProgressBar();

        if (currentLevel < 9) {
            correctSFX.play();

            $('#Modal').modal({
                backdrop: "static"
            });

        } else {
            correctSFX.play();

            $('#Modal').modal({
                backdrop: "static"
            });
        }

    } else {
        console.log(TAG + value);

        showFailure();
    }
}

async function reloadRiddle() {
    const TAG = 'reloadRiddle: ';

    removeRiddleFromPrepared();
    var result = await addRiddleToPrepared();

    console.log(TAG);
    console.log(result);
}

function addRiddleToAnswered(riddle) {
    const TAG = 'addRiddleToAnswered: ';

    answeredRiddles.push(riddle);

    console.log(TAG + 'answeredRiddles, ');
    console.log(answeredRiddles);
}

function removeRiddleFromPrepared() {
    const TAG = 'removeRiddleFromPrepared: ';

    preparedRiddles.shift();

    console.log(TAG + 'preparedRiddles, ');
    console.log(preparedRiddles);
}

function addRiddleToPrepared() {
    const TAG = 'addRiddleToPrepared: ';

    return new Promise((resolve, reject) => {

        var index = Math.floor(Math.random() * riddleID.length);
        var id = riddleID[index];
        if (id == null || id == '') {
            reject(TAG + 'Error, no more question to fetch. ');
        }

        var transaction = db.transaction(['riddles'], 'readonly');
        var objectStore = transaction.objectStore('riddles');
        var request = objectStore.get(id);

        // Error
        request.onerror = () => {
            reject(TAG + 'Error, failed to push question to preload. ' + request.error);
        };
        // Success
        request.onsuccess = () => {
            var riddle = request.result;

            preparedRiddles.push(riddle);
            console.log(TAG + 'preparedRiddles, ');
            console.log(preparedRiddles);

            riddleID.splice(index, 1);
            console.log(TAG + 'after splice, ');
            console.log(riddleID);

            resolve(TAG + 'Success, added Riddle_ID = ' + id + ' to the Prepared. ');
        };
    });
}

function showSuccess() {
    const TAG = 'showSuccess: ';

    successSFX.play();

    $('#App').html(successScene);
    console.log(TAG);
}

function showFailure() {
    const TAG = 'showFailure: ';

    gameoverSFX.play();

    $('#App').html(failedScene);

    document.getElementById('ContinueButton').addEventListener('click', (event) => {
        event.preventDefault;

        $('#Continue').modal();
    });

    console.log(TAG);
}

function continueProgress() {
    const TAG = 'continueProgress: ';

    if (preparedRiddles.length > 0) {
        loadGameScene();
    } else {
        alert('No more question');
        console.warn(TAG + 'No more question');
        init();
    }

    console.log(TAG);
}

function askGiveUp() {
    $('#GiveUp').modal();
}

function giveUpProgress() {
    const TAG = 'giveupProgress: ';

    init();

    console.log(TAG);
}

function showLuckydraw() {
    const TAG = 'showLuckydraw: ';

    $('#App').html(luckydrawScene);

    var prizeList = [
        'RM 5', 'RM 5', 'RM 5',
        'RM 5', 'RM 10', 'RM 10',
        'RM 10', 'RM 10', 'RM 50'
    ];
    var prizeLabels = document.querySelectorAll('.prize-label');

    prizeLabels.forEach((prizeLabel) => {
        var index = Math.floor(Math.random() * prizeList.length);
        var prize = prizeList[index];
        prizeLabel.innerHTML = prize;

        console.log(TAG + prizeLabel.innerHTML);

        prizeList.splice(index, 1);
        console.log(TAG + 'after splice, ');
        console.log(prizeList);
    });
}

function luckydraw(element) {
    const TAG = 'luckydraw: ';

    $('.card').off('click');

    correctSFX.play();

    $(element).addClass('flipped');
    $('.card').prop('onclick', null);

    var prize = $(element).find('.prize-label').html();
    $('#PrizeLabel').html(prize);

    setTimeout(() => {
        $('#Prize').modal({
            backdrop: "static"
        });
    }, 2000);
}

function showAll() {
    const TAG = 'showAll: ';

    $('.card').addClass('flipped');

    $('#ExitButton').prop('disabled', false);

    console.log(TAG);
}