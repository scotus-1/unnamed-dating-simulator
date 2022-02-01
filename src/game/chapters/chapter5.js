let ch5 = new Chapter('Game');

//The End
let ch5_9 = new Scene("Let’s do it.","hThomas","backstage",ch5,[]);
let ch5_8 = new Scene("—to study for those finals. You down, $n?","hThomas","backstage",ch5,[ch5_9]);
let ch5_7 = new Scene("You two should totally go out—","will","backstage",ch5,[ch5_8]);
let ch5_6 = new Scene("O-oh, uh, thanks.","hThomas","backstage",ch5,[ch5_7]);
let ch5_5 = new Scene("No, I mean… you pulled it off. Improv is part of theater. You did really well.","hThomas","backstage",ch5,[ch5_6]);
let ch5_4 = new Scene("... was it that obvious?","hThomas","backstage",ch5,[ch5_5]);
let ch5_3 = new Scene("‘I’ll put an end to him once and for all.’ You didn’t look at the script, did you?","hThomas","backstage",ch5,[ch5_4]);
let ch5_2 = new Scene("Brava! Brava! Bravissima! We’re making big bucks now.","will","backstage",ch5,[ch5_3]);
let ch5_1 = new Scene("The curtains came down as the audience applauded. The play was a total success!", 'empty', 'transition', ch5, [ch5_2]);