let ch1 = [];
let last = new Scene('last', test, school, ch1, []);
let test1_2 = new Scene('one', test, school, ch1, [last]);
let test1_3 = new Scene('two', test, school, ch1, [last]);
let test1_4 = new Scene('three', test, school, ch1, [last]);
let test1_1 = new Scene('this is not going gmoment or any thing i dont know i keep', test, school, ch1, [
{
    "text": "One",
    "nextScene": test1_2
},
{
    "text": "Two",
    "nextScene": test1_3
},
{
    "text": "Three",
    "nextScene": test1_4
}
]);


let ch1_15 = new Scene('...', null, transition, ch1, []);
//inner dialouge
let ch1_14 = new Scene('Theater club? What theater club?', null, transition, ch1, [ch1_15], 'white', 'black');
//test = students
let ch1_13 = new Scene('OMG! Isn’t Thomas in that club?” “You mean the most prominent actor in this school’s history? Of course!” “Oh, please, you give him too much credit. He’s cute, though.', test, classroom, ch1, [ch1_14]);
let ch1_12 = new Scene('Nice to meet you, Ami. You might want to consider joining drama club. I hear they’re putting a play together.', nTeacher, classroom, ch1, [ch1_13]);
let ch1_11 = new Scene('Hello, I’m Ami~~~~~~~~. Pink is the new black, I love socializing, and my goal for this year is to get the lead role in a play.', hAmi, classroom, ch1, [ch1_12]);
let ch1_10 = new Scene('*giggling obnoxiously*', hAmi, classroom, ch1, [ch1_11]);
let ch1_9 = new Scene('Hmm… what an interesting goal. Nice to meet you, YN. Next up is Ami.', nTeacher, classroom, ch1, [ch1_10]);
let ch1_8 = new Scene('Uh… Hi… I’m YN. I don’t have a favorite color. I love reading, especially mythology. My goal for this year is to graduate with no regrets.', nTeacher, classroom, ch1, [ch1_9]);
//add + username
let ch1_7 = new Scene('Now, now, settle down. *username* why don’t we start with you?', nTeacher, classroom, ch1, [ch1_8]);
//ALAN PIC OF STUDENT BODY NEEDED - test = students
let ch1_6 = new Scene('I don’t have a name, bro.', test, classroom, ch1, [ch1_7]);
let ch1_5 = new Scene('I don’t have a favorite color, bro.', test, classroom, ch1, [ch1_6]);
let ch1_4 = new Scene('WHYY!” “This is, like, the twelfth time now.', test, classroom, ch1, [ch1_5]);
let ch1_3 = new Scene('What a lovely group of students. Okay, class. We’re going to start off with a little ice breaker. When I call on you, introduce yourself and tell us your favorite color, hobby, and goal for this year. Got it?', nTeacher, classroom, ch1, [ch1_4]);
let ch1_2_3 = new Scene('No way! Isn’t it exciting? It’s gonna be sOOoOOOOO exciting.', hPatricia, hallway, ch1, [ch1_3]);
let ch1_2_2 = new Scene('That’s the spirit!', hPatricia, hallway, ch1, [ch1_3]);
let ch1_2_1 = new Scene('Hey, hey, hey, turn that frown upside down! It’ll be fun, you’ll see!', hPatricia, hallway, ch1, [ch1_3]);
let ch1_2 = new Scene('First day of senior year! How are you feeling?', hPatricia, hallway, ch1,[
    {
        'text': 'I wanna go home.', 
         'nextScene': ch1_2_1
    },
    {
        'text': 'I’m so pumped!', 
        'nextScene': ch1_2_2
    },
    {
        'text': 'Eh, same as always.', 
        'nextScene': ch1_2_3
    }
]);
//add + username
let ch1_1 = new Scene('Hey username!', null, hallway, ch1, [ch1_2]);
