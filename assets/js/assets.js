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


    soundFormats('mp3');
    audio.click = loadSound('assets/audio/btn_click_audio.mp3');
}