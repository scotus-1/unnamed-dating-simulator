let ch4 = new Chapter('Chapter Four', ch5, () => {audio['chbgm'].stop();});

let ch4_17 = new Scene("I’ll find that killer. I’ll put an end to him once and for all.","nThomas","stage",ch4,[]);
let ch4_16 = new Scene("Maybe… in the next life.","hThomas","stage",ch4,[ch4_17],"ch4_16_audio");
let ch4_15 = new Scene("Don’t go, Luke. Please stay with me.","sThomas","stage",ch4,[ch4_16]);
let ch4_14 = new Scene("THE KILLER ESCAPED! AFTER HIM!","will","stage",ch4,[ch4_15],"ch4_14_audio");
let ch4_13 = new Scene("My love!” *sobs*","sThomas","stage",ch4,[ch4_14]);
let ch4_12 = new Scene("DIE, VERMIN!","sCharacter","stage",ch4,[ch4_13],"ch4_12_audio");
let ch4_11 = new Scene("What????","hThomas","stage",ch4,[ch4_12], null,  'black', 'white', 'white');
let ch4_10 = new Scene("You may now kiss the bride.","will","stage",ch4,[ch4_11],"ch4_10_audio");
let ch4_9 = new Scene("I… I do.","will","stage",ch4,[ch4_10],"ch4_9_audio");
let ch4_8 = new Scene("Do you, Stella Archivald, take Luke Vulpin to be your lawfully wedded husband, to have and to hold, from this day forward, for better, for worse, for richer, for poorer, in sickness and in health, until death do you part?","will","stage",ch4,[ch4_9],"ch4_8_audio");
let ch4_7 = new Scene("I do.","hThomas","stage",ch4,[ch4_8],"ch4_7_audio");
let ch4_6 = new Scene("Huuhh???","will","stage",ch4,[ch4_7], null,  'black', 'white', 'white');
let ch4_5 = new Scene("Do you, Luke Vulpin, take Stella Archivald to be your lawfully wedded wife, to have and to hold, from this day forward, for better, for worse, for richer, for poorer, in sickness and in health, until death do us part?","will","stage",ch4,[ch4_6],"ch4_5_audio");
let ch4_4 = new Scene("As you half-remember that you only wrote half of the script and didn't read the rest of the ending that the other writing students had finished, you're pushed out onto the stage.", 'empty', 'transition', ch4, [ch4_5], null,  'black', 'white', 'white');
let ch4_3 = new Scene("Remember this is the most important scene. The ending scene. Break a leg.","will","backstage",ch4,[ch4_4],"ch4_3_audio");
let ch4_2 = new Scene("Yeah, yeah.","will","backstage",ch4,[ch4_3]);
let ch4_1 = new Scene("Here’s the deal, $n. You literally wrote the script, so you know your lines. But you really gotta get into it, okay? You’re his lover, not his business partner.","will","backstage",ch4,[ch4_2],"ch4_1_audio");