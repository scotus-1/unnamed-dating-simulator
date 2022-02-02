let ch2 = new Chapter('Chapter Two', ch3);

let ch2_18 = new Scene('Yessir.', 'will', 'backstage', ch2, [], 'ch2_18_audio');
let ch2_17 = new Scene("Go gather up the theater kids instead of wasting air, would you?", 'sThomas', 'backstage', ch2, [ch2_18], 'ch2_17_audio')
let ch2_16 = new Scene("You were too busy thinking about something else. Or should I say, someone else. By the way, nice to meet you, $n. I’ve heard so much about you. Thomas told me he—", 'will', 'backstage', ch2, [ch2_17], 'ch2_16_audio');
let ch2_15 = new Scene("O-oh, yeah, you’re totally right, Will. Why didn’t I think of that?",'hThomas','backstage', ch2, [ch2_16], 'ch2_15_audio');
let ch2_14 = new Scene('*blushing*','hThomas','backstage', ch2, [ch2_15]);
let ch2_13 = new Scene('Why don’t we put it to a vote? This play ain’t just about you two lovebirds.','empty','backstage', ch2, [ch2_14], 'ch2_13_audio');
let ch2_12 = new Scene('I-I like both of them, though.','nThomas','backstage', ch2, [ch2_13]);
let ch2_11 = new Scene("I’d prefer to let you decide. I wanna know more about you— I mean, your, uh, tastes.",'hThomas','backstage', ch2, [ch2_12],'ch2_11_audio');
let ch2_10 = new Scene("I’ve got two potential plots so far. A modern murder mystery and a period romance. Which one is more your taste?",'hThomas','backstage', ch2, [ch2_11]);
let ch2_9 = new Scene("How's it coming?",'hThomas','backstage', ch2, [ch2_10], 'ch2_9_audio');
let ch2_8 = new Scene('...','empty','transition', ch2, [ch2_9], null,  'black', 'white', 'white');
let ch2_7 = new Scene('Ok! I’ll set up some rough plots, then. Brb.','hThomas','backstage', ch2, [ch2_8]);
let ch2_6 = new Scene("Y-yeah, tubular, man. I'm totally down for that.",'nThomas','backstage', ch2, [ch2_7], 'ch2_6_audio');
let ch2_5 = new Scene("*blushing*",'nThomas','backstage', ch2, [ch2_6]);
let ch2_4 = new Scene("Ooh! My favorite! I’ve got tons of ideas for that. Um… theyre all romance stories. Is that ok?",'hThomas','backstage', ch2, [ch2_5]);
let ch2_3 = new Scene('It’s going to be some flavor of fantasy.','hThomas','backstage', ch2, [ch2_4], 'ch2_3_audio');
let ch2_2 = new Scene('What’s the genre of the play?','hThomas','backstage', ch2, [ch2_3]);
let ch2_1 = new Scene('$n! So glad to see you again! Let’s get started.','hThomas','backstage', ch2, [ch2_2], 'ch2_1_audio');
