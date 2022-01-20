let test, school;
let ch1_1;


let ch1 = [];

function preload() {
  test = loadImage('assets/images/characters/664971.png');
  school = loadImage('assets/images/backgrounds/BasisTucson_North-2-facade.jpg')
  ch1_1 = new Scene('this is not going great at please find help. this project sucks please call 911 at any moment or any thing i dont know i keep'
  , test, school, ch1, [
    {
      "text": "monke1",
      "nextScene": null
    },
    {
      "text": "monke2",
      "nextScene": null
    },
    {
      "text": "monke3",
      "nextScene": null
    }
]);
}