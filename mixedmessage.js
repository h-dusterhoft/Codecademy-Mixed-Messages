// random number generator
const generateRanNum = num => {
    return Math.floor(Math.random() * num);
}

// message options
const moodBoard = {
    mood: ['happy', 'sad', 'angry', 'anxious', 'sleepy'],
    wear: ['a weighted blanket', 'fuzzy socks', 'a face mask', 'an oversized hoodie', 'absolutely nothing'],
    movie: ['Legally Blonde', 'Jaws', 'Titanic', 'Spirited Away'],
    drink: ['a glass of red wine', 'a cup of hot tea', 'a glass of whole milk', 'an iced latte'],
    food: ['Kraft Mac and Cheese', 'a box of Girl Scout Cookies', 'a bowl of Cocoa Pebbles', 'instant ramen', 'a homemade charcuterie board']
}

//store the collective mood board 
let personalMoodBoard = [];

// iterate through the object
for (let prop in moodBoard) {
    let optionId = generateRanNum(moodBoard[prop].length);
    switch(prop) {
        case 'mood':
          personalMoodBoard.push(`You are currently feeling ${moodBoard[prop][optionId]}. `);
          break;
        case 'wear':
            personalMoodBoard.push(`You should wear ${moodBoard[prop][optionId]} `);
            break;
        case 'movie':
            personalMoodBoard.push(`and watch ${moodBoard[prop][optionId]}, `);
            break;
        case 'drink':
            personalMoodBoard.push(`while drinking ${moodBoard[prop][optionId]} `);
            break;
        case 'food':
            personalMoodBoard.push(`and eating ${moodBoard[prop][optionId]}.`);
            break;
        default: 
            personalMoodBoard.push(`Inconclusive.`);
    }
}

// join the message
function joinMoodBoard(personalMoodBoard) {
    const join = personalMoodBoard.join('');
    console.log(join);
}

joinMoodBoard(personalMoodBoard);