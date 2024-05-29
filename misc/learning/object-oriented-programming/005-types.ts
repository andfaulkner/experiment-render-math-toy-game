/*============================================ TYPES =============================================*/
type SavingsAccount = {
    name: string,
    balance: number
};

const brodieSavingsAccount: SavingsAccount = {
    name: "Brodie Lewis",
    balance: 400_000,
};

/*------------------------------------------ OPTIONALS -------------------------------------------*/
type GenericAnimal = {
    name: string,
    species: string,
    favFood: string,
    sound?: string,
};

const holly = {
    name: "Holly",
    species: "cat",
    favFood: 'Anything that bleeds',
    sound: 'Meow',
};

const jellyMcJellyface = {
    name: "Jelly McJellyFace",
    species: "Jellyfish",
    favFood: 'Anything alive'
};

/*----------------------------------------- TYPE UNIONS ------------------------------------------*/
type Person = {
    name: string,
    age: number,
};

type GenericAccount = {
    balance: number
};

type PersonalAccount = Person & GenericAccount;

const janiceAccount: PersonalAccount = {
    name: 'Janice Wong',
    age: 37,
    balance: 4_000_000,
};

type Toaster = {
    name: 'toaster',
    purpose: 'Making toast',
    whatYouPutInIt: 'bread' | 'bagel' | ['bread', 'bagel'],
    color: string,
};

type Fridge = {
    name: 'fridge',
    purpose: 'Keeping food cold',
    whatYouPutInIt: 'any food',
    outerColor: string,
    innerColor: string,
    innerTemperature: number;
};

type Appliance = Toaster | Fridge;

const bobTheToaster: Appliance = {
    name: 'toaster',
    purpose: 'Making toast',
    whatYouPutInIt: ['bread', 'bagel'],
    color: 'black'
};

const janeTheFridge: Appliance = {
    name: 'fridge',
    purpose: 'Keeping food cold',
    whatYouPutInIt: 'any food',
    innerColor: 'white',
    outerColor: 'white',
    innerTemperature: 0,
};

/*---------------------------------------- TYPE INFERENCE ----------------------------------------*/
type Refigerator = typeof janeTheFridge;

/*-------------------------------------------- KEYOF ---------------------------------------------*/
const scrabble = {
    name: 'Scrabble',
    gameType: 'word game' as 'word game' | 'eurogame',
    approxMinutes: 50,
    minAge: 10,
    maxAge: 99,
    boardMaterial: 'paper',
};

type BoardGame = typeof scrabble;

const settlersOfCatan: BoardGame = {
    name: 'Settlers of Catan',
    gameType: 'eurogame',
    minAge: 12,
    approxMinutes: 90,
    maxAge: 80,
    boardMaterial: 'paper',
};

const boggle = {
    name: 'Boggle',
    gameType: 'word game',
    approxMinutes: 10,
    minAge: 10,
    maxAge: 99,
    boardMaterial: 'plastic',
};

const gameCloset = [scrabble, settlersOfCatan, boggle] as BoardGame[];

// Grab keys from BoardGame type
type BoardGameKeys = keyof BoardGame;

// Filter it out so only items with gameType 'word game' remain
const wordGames = gameCloset.reduce((acc, curGame: BoardGame) => {
    if (curGame.gameType === 'word game') {
        acc.push(curGame);
    }
    return acc;
    // Entry value: []
    // iteration 1: [scrabble]
    // iteration 2: [scrabble]
    // iteration 3: [scrabble, boggle]
}, [] as BoardGame[]);

console.log(`wordGames:`, wordGames);
