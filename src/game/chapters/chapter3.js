//climax - danica

let ch3 = [];

let ch3_5_2 = new Scene('end game ig', 'empty', 'transition', ch3, []);
let ch3_5_1 = new Scene("Guess what, Will? We’re not doomed.", 'hThomas', 'backstage', ch3, []);
let ch3_5 = new Scene("$n can do it. Can’t you?", 'hThomas', 'backstage', ch3, [
    {
        'text': 'U-uh, yeah, I guess.', 
        'nextScene': ch3_5_1
    },
    {
        'text': 'Absolutely not. (you lost, game ends)', 
        'nextScene': ch3_5_2
    }
]);
let ch3_4 = new Scene("Figure something out?! Ami has the best chemistry with you. Anyone else would be too awkward.", 'will', 'backstage', ch3, [ch3_5]);
let ch3_3 = new Scene("Why don’t you calm down, Will? We’ll figure something out.", 'sThomas', 'backstage', ch3, [ch3_4]);
let ch3_2 = new Scene("We’re done. We’re done. It was nice knowing you guys. It wasn’t, really. But sentimentals.", 'will', 'backstage', ch3, [ch3_3]);
let ch3_1 = new Scene("In the end, the theater club decided on the modern murder mystery because it fit their edgy tastes. Ami was chosen for the main role, Stella, and Thomas for the love interest, Luke. They rehearsed every day for five months, working hard to perfect the script. However, a terrible tragedy befell their main lead, Ami, the day before the showing.", 'empty', 'transition', ch3, [ch3_2], 'black', 'white', 'black');