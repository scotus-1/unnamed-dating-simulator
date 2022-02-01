let images = {};
let audio = {};
function preload() {
    images.hallway = loadImage('assets/images/backgrounds/hallway.jpg');
    images.classroom = loadImage('assets/images/backgrounds/classroom.jpg');
    images.transition = loadImage('assets/images/backgrounds/transition.jpg');
    images.hPatricia = loadImage('assets/images/characters/hPatricia.png');
    images.sPatricia = loadImage('assets/images/characters/sPatricia.png');
    images.nPatricia = loadImage('assets/images/characters/nPatricia.png');
    images.nTeacher = loadImage('assets/images/characters/nTeacher.png');
    images.aTeacher = loadImage('assets/images/characters/aTeacher.png');
    images.hAmi = loadImage('assets/images/characters/hAmi.png');
    images.sAmi = loadImage('assets/images/characters/sAmi.png');
    images.nAmi = loadImage('assets/images/characters/nAmi.png');
    images.hThomas = loadImage('assets/images/characters/hThomas.png');
    images.sThomas = loadImage('assets/images/characters/sThomas.png');
    images.nThomas = loadImage('assets/images/characters/nThomas.png');
    images.will = loadImage('assets/images/characters/Will.png');
    images.empty = loadImage('assets/images/blank.png');
    images.sBody = loadImage('assets/images/characters/sBody.png');
    images.gym = loadImage('assets/images/backgrounds/gym.png');
    images.backstage = loadImage('assets/images/backgrounds/GreenRoom.jpg');
    images.stage = loadImage('assets/images/backgrounds/stage.jpg');
    images.sCharacter = loadImage('assets/images/characters/sideCharacter.png');
    images.script = loadImage('assets/images/backgrounds/script.png');
    images.clapping = loadImage('assets/images/backgrounds/clapping.jpg')
    images.menuBG = loadImage('assets/images/backgrounds/menuBackground.gif');


    soundFormats('mp3');
    audio.menubgm = loadSound('assets/audio/bgm.mp3');

    audio.click = loadSound('assets/audio/btn_click_audio.mp3');
    

    audio.ch1_1_audio = loadSound('assets/audio/chapter1/ch1_1_audio.mp3');
    audio.ch1_2_audio = loadSound('assets/audio/chapter1/ch1_2_audio.mp3');
    audio.ch1_2_1_audio = loadSound('assets/audio/chapter1/ch1_2_1_audio.mp3');
    audio.ch1_2_2_audio = loadSound('assets/audio/chapter1/ch1_2_2_audio.mp3');
    audio.ch1_2_3_audio = loadSound('assets/audio/chapter1/ch1_2_3_audio.mp3');
    audio.ch1_3_audio = loadSound('assets/audio/chapter1/ch1_3_audio.mp3');
    audio.ch1_4_audio = loadSound('assets/audio/chapter1/ch1_4_audio.mp3');
    audio.ch1_5_audio = loadSound('assets/audio/chapter1/ch1_5_audio.mp3');
    audio.ch1_6_audio = loadSound('assets/audio/chapter1/ch1_6_audio.mp3');
    audio.ch1_7_audio = loadSound('assets/audio/chapter1/ch1_7_audio.mp3');
    audio.ch1_9_audio = loadSound('assets/audio/chapter1/ch1_9_audio.mp3');
    audio.ch1_11_audio = loadSound('assets/audio/chapter1/ch1_11_audio.mp3');
    audio.ch1_12_audio = loadSound('assets/audio/chapter1/ch1_12_audio.mp3');
    audio.ch1_13_audio = loadSound('assets/audio/chapter1/ch1_13_audio.mp3');
    audio.ch1_16_1_audio = loadSound('assets/audio/chapter1/ch1_16_1_audio.mp3');
    audio.ch1_16_2_audio = loadSound('assets/audio/chapter1/ch1_16_2_audio.mp3');
    audio.ch1_16_3_audio = loadSound('assets/audio/chapter1/ch1_16_3_audio.mp3');
    audio.ch1_16_audio = loadSound('assets/audio/chapter1/ch1_16_audio.mp3');
    audio.ch1_17_audio = loadSound('assets/audio/chapter1/ch1_17_audio.mp3');
    audio.ch1_18_audio = loadSound('assets/audio/chapter1/ch1_18_audio.mp3');
    audio.ch1_19_audio = loadSound('assets/audio/chapter1/ch1_19_audio.mp3');
    audio.ch1_19_1_audio = loadSound('assets/audio/chapter1/ch1_19_1_audio.mp3');
    audio.ch1_19_2_audio = loadSound('assets/audio/chapter1/ch1_19_2_audio.mp3');
    audio.ch1_19_3_audio = loadSound('assets/audio/chapter1/ch1_19_3_audio.mp3');
    audio.ch1_20_audio = loadSound('assets/audio/chapter1/ch1_20_audio.mp3');
}