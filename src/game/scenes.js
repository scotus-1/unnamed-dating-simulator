let test, school;
let ch1_1, ch1_2, ch1_3, ch1_4, last;


let ch1 = [];

function preload() {
  test = loadImage('assets/images/characters/664971.png');
  school = loadImage('assets/images/backgrounds/BasisTucson_North-2-facade.jpg')
  last = new Scene('last', test, school, ch1, [last]);
  ch1_2 = new Scene('one', test, school, ch1, [last]);
  ch1_3 = new Scene('two', test, school, ch1, [last]);
  ch1_4 = new Scene('three', test, school, ch1, [last]);
  ch1_1 = new Scene('this is not going gmoment or any thing i dont know i keep', test, school, ch1, [
    {
      "text": "One",
      "nextScene": ch1_2
    },
    {
      "text": "Two",
      "nextScene": ch1_3
    },
    {
      "text": "Three",
      "nextScene": ch1_4
    }
  ]);
}