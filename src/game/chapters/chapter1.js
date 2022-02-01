let ch1 = new Chapter('Chapter One', ch2);

// scene("text character is saying", "characterimg", "backgroundimg", chapter, choices[])
let ch1_21 = new Scene('What can I say? My stories are superb. What I read, what I write. It’s all in good taste.', 'hPatricia', 'gym', ch1, [],);
let ch1_20 = new Scene('$n! $n! $n! I can’t believe he knows who you are. You’re, like, a nobody!', 'hPatricia', 'gym', ch1, [ch1_21],);
let ch1_19_3 = new Scene('Yes! See you there.','hThomas', 'gym', ch1, [ch1_20]);
let ch1_19_2 = new Scene('Okay then… sorry for bothering you. (game ends, player lost)','sThomas', 'gym', ch1, []);
let ch1_19_1 = new Scene('Oh… that’s okay. Maybe next time. (game ends, player lost)','sThomas', 'gym', ch1, []);
let ch1_19 = new Scene('Hey! $n right? It’s kinda sudden, but would you mind joining us this Friday after school in the theater to write a play? I’ve heard a lot about your stories.', 'hThomas', 'gym', ch1, [
    {
        'text': 'I can’t… sorry.', 
        'nextScene': ch1_19_1
    },
    {
        'text': 'No.', 
        'nextScene': ch1_19_2
    },
    {
        'text': 'Sure, I’ll come.', 
        'nextScene': ch1_19_3
    }
],"ch1_19_audio");
let ch1_18 = new Scene('OMG! He’s coming over here!', 'hPatricia', 'gym', ch1, [ch1_19],"ch1_18_audio");
let ch1_17 = new Scene('Look $n, that’s him. The one with the blond hair. Isn’t he beautiful?', 'hPatricia', 'gym', ch1, [
    {
        'text': 'I don’t see what the big deal is about.', 
        'nextScene': ch1_18
    },
    {
        'text': 'I guess he’s okay…', 
        'nextScene': ch1_18
    }
],"ch1_17_audio");
let ch1_16_3 = new Scene('What’s wrong with you? Have you seen him?', 'hPatricia', 'hallway', ch1, [ch1_17]);
let ch1_16_2 = new Scene('That’s ‘cause you have no taste. Your fictional characters set the standard too high. You gotta see him for yourself.', 'hPatricia', 'hallway', ch1, [ch1_17]);
let ch1_16_1 = new Scene('Are you serious?? Only the nicest, handsomest, bestest guy in the school!', 'hPatricia', 'hallway', ch1, [ch1_17]);
let ch1_16 = new Scene('I don’t like theater at all, but I would join for Thomas.', 'hPatricia', 'hallway', ch1, [
    {
        'text': 'Who’s Thomas?', 
        'nextScene': ch1_16_1
    }, 
    {
        'text': 'He can’t be that great.', 
        'nextScene': ch1_16_2
    },
    {
        'text': 'What’s wrong with you?', 
        'nextScene': ch1_16_3
    }
],"ch1_16_audio");
//inner dialouge
let ch1_15 = new Scene('...', 'empty', 'transition', ch1, [ch1_16], null,  'black', 'white', 'white');
let ch1_14 = new Scene('Theater club? What theater club?', 'empty', 'transition', ch1, [ch1_15], null, 'black', 'white', 'white');
let ch1_13 = new Scene('OMG! Isn’t Thomas in that club? You mean the most prominent actor in this school’s history? Of course! Oh, please, you give him too much credit. He’s cute, though.', 'sBody', 'classroom', ch1, [ch1_14],"ch1_13_audio");
let ch1_12 = new Scene('Nice to meet you, Ami. You might want to consider joining drama club. I hear they’re putting a play together.', 'nTeacher', 'classroom', ch1, [ch1_13],"ch1_12_audio");
let ch1_11 = new Scene('Hello, I’m Ami~~~~~~~~. Pink is the new black, I love socializing, and my goal for this year is to get the lead role in a play.', 'hAmi', 'classroom', ch1, [ch1_12],"ch1_11_audio");
let ch1_10 = new Scene('*giggling obnoxiously*', 'hAmi', 'classroom', ch1, [ch1_11],);
let ch1_9 = new Scene('Hmm… what an interesting goal. Nice to meet you, $n. Next up is Ami.', 'nTeacher', 'classroom', ch1, [ch1_10],"ch1_9_audio");
let ch1_8 = new Scene('Uh… Hi… I’m $n. I don’t have a favorite color. I love reading, especially mythology. My goal for this year is to graduate with no regrets.', 'nTeacher', 'classroom', ch1, [ch1_9],);
let ch1_7 = new Scene('Now, now, settle down. $n, why don’t we start with you?', 'nTeacher', 'classroom', ch1, [ch1_8],"ch1_7_audio");
let ch1_6 = new Scene('I don’t have a name, bro.', 'sBody', 'classroom', ch1, [ch1_7],"ch1_6_audio");
let ch1_5 = new Scene('I don’t have a favorite color, bro.', 'sBody', 'classroom', ch1, [ch1_6],"ch1_5_audio");
let ch1_4 = new Scene('WHYY! This is, like, the twelfth time now.', 'sBody', 'classroom', ch1, [ch1_5],"ch1_4_audio");
let ch1_3 = new Scene('What a lovely group of students. Okay, class. We’re going to start off with a little ice breaker. When I call on you, introduce yourself and tell us your favorite color, hobby, and goal for this year. Got it?', 'nTeacher', 'classroom', ch1, [ch1_4],"ch1_3_audio");
let ch1_2_3 = new Scene('No way! Isn’t it exciting? It’s gonna be sOOoOOOOO exciting.', 'hPatricia', 'hallway', ch1, [ch1_3]);
let ch1_2_2 = new Scene('That’s the spirit!', 'hPatricia', 'hallway', ch1, [ch1_3]);
let ch1_2_1 = new Scene('Hey, hey, hey, turn that frown upside down! It’ll be fun, you’ll see!', 'hPatricia', 'hallway', ch1, [ch1_3]);
let ch1_2 = new Scene('First day of senior year! How are you feeling?', 'hPatricia', 'hallway', ch1,[
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
],"ch1_2_audio");
let ch1_1 = new Scene('Hey $n!', 'empty', 'hallway', ch1, [ch1_2],"ch1_1_audio");
