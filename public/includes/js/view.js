const PATH_TO_SCENE = 'includes/';

var loaderScene;
var menuScene;
var mainScene;
var successScene;
var failedScene;
var luckydrawScene;

load_Scene();

async function load_Scene() {
    const TAG = 'load_Scene: ';

    loaderScene = await load_LoaderScene();
    menuScene = await load_MenuScene();
    mainScene = await load_MainScene();
    successScene = await load_SuccessScene();
    failedScene = await load_FailedScene();
    luckydrawScene = await load_LuckydrawScene();

    console.log(TAG + 'Success. ');
}

function load_LoaderScene() {
    const TAG = 'load_LoaderScene: ';

    return new Promise((resolve) => {
        $.ajax({
            url: PATH_TO_SCENE + "loader-scene.html",
            type: "GET",
            dataType: "text",
            isLocale: true,
            success: (data) => {
                resolve(data);
                console.log(TAG + 'Success to load loader-scene.html. ');
            },
            error: function(jqXHR, textStatus, errorThrown) {
                alert(TAG + 'Error, unable to load loader-scene.html. ');

                console.log(TAG + 'Error, unable to load loader-scene.html. ');
                console.log('jqXHR:');
                console.log(jqXHR);
                console.log('textStatus:');
                console.log(textStatus);
                console.log('errorThrown:');
                console.log(errorThrown);
            }
        });
    });
}

function load_MenuScene() {
    const TAG = 'load_MenuScene: ';

    return new Promise((resolve) => {
        $.ajax({
            url: PATH_TO_SCENE + "menu-scene.html",
            type: "GET",
            dataType: "text",
            isLocale: true,
            success: (data) => {
                resolve(data);
                console.log(TAG + 'Success to load menu-scene.html. ');
            },
            error: function(jqXHR, textStatus, errorThrown) {
                alert(TAG + 'Error, unable to load menu-scene.html. ');

                console.log(TAG + 'Error, unable to load menu-scene.html ');
                console.log('jqXHR:');
                console.log(jqXHR);
                console.log('textStatus:');
                console.log(textStatus);
                console.log('errorThrown:');
                console.log(errorThrown);
            }
        });
    });
}

function load_MainScene() {
    const TAG = 'load_MainScene: ';

    return new Promise((resolve) => {
        $.ajax({
            url: PATH_TO_SCENE + "main-scene.html",
            type: "GET",
            dataType: "text",
            isLocale: true,
            success: (data) => {
                resolve(data);
                console.log(TAG + 'Success to load main-scene.html. ');
            },
            error: function(jqXHR, textStatus, errorThrown) {
                alert(TAG + 'Error, unable to load main-scene.html. ');

                console.log(TAG + 'Error, unable to load main-scene.html ');
                console.log('jqXHR:');
                console.log(jqXHR);
                console.log('textStatus:');
                console.log(textStatus);
                console.log('errorThrown:');
                console.log(errorThrown);
            }
        });
    });
}

function load_SuccessScene() {
    const TAG = 'load_SuccessScene: ';
    return new Promise((resolve) => {
        $.ajax({
            url: PATH_TO_SCENE + "success-scene.html",
            type: "GET",
            dataType: "text",
            isLocale: true,
            success: (data) => {
                resolve(data);
                console.log(TAG + 'Success to load success-scene.html. ');
            },
            error: function(jqXHR, textStatus, errorThrown) {
                alert(TAG + 'Error, unable to load success-scene.html. ');

                console.log(TAG + 'Error, unable to load success-scene.html ');
                console.log('jqXHR:');
                console.log(jqXHR);
                console.log('textStatus:');
                console.log(textStatus);
                console.log('errorThrown:');
                console.log(errorThrown);
            }
        });
    });
}

function load_FailedScene() {
    const TAG = 'load_FailedScene: ';

    return new Promise((resolve) => {
        $.ajax({
            url: PATH_TO_SCENE + "failed-scene.html",
            type: "GET",
            dataType: "text",
            isLocale: true,
            success: (data) => {
                resolve(data);
                console.log(TAG + 'Success to load failed-scene.html. ');
            },
            error: function(jqXHR, textStatus, errorThrown) {
                alert(TAG + 'Error, unable to load failed-scene.html. ');

                console.log(TAG + 'Error, unable to load failed-scene.html ');
                console.log('jqXHR:');
                console.log(jqXHR);
                console.log('textStatus:');
                console.log(textStatus);
                console.log('errorThrown:');
                console.log(errorThrown);
            }
        });
    });
}

function load_LuckydrawScene() {
    const TAG = 'load_LuckydrawScene: ';

    return new Promise((resolve) => {
        $.ajax({
            url: PATH_TO_SCENE + "luckydraw-scene.html",
            type: "GET",
            dataType: "text",
            isLocale: true,
            success: (data) => {
                resolve(data);
                console.log(TAG + 'Success to load luckydraw-scene.html. ');
            },
            error: function(jqXHR, textStatus, errorThrown) {
                alert(TAG + 'Error, unable to load luckydraw-scene.html. ');

                console.log(TAG + 'Error, unable to load luckydraw-scene.html ');
                console.log('jqXHR:');
                console.log(jqXHR);
                console.log('textStatus:');
                console.log(textStatus);
                console.log('errorThrown:');
                console.log(errorThrown);
            }
        });
    });
}