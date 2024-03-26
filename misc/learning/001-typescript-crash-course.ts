// - Types
// -   Concept
// -   boolean
// -   number
// -   string
// -   arrays
// -   objects
// -   null
// - Defining typed variables
// - Classes
// - Type keyword
// - Type unions
// - Explicit casting ("as" keyword)
// - Interfaces

/*-------------------------------------------- TYPES ---------------------------------------------*/
//------------------------ Booleans ------------------------//
// Booleans - "true" and "false" types
const myBool = true;

// "boolean" type
let myVariableBool = true;

myVariableBool = false;

// Invalid
// myVariableBool = 0;

//------------------------ Numbers ------------------------//
const myNum = 1;

let myVarNum = 1;

myVarNum = 5;

// Invalid
// myVarNum = false;

// myVariableBool = 5;

//------------------------ Strings ------------------------//
const myStr = "Meeka";

let myVarStr = "Dog name";

myVarStr = "Meekapup";

// Invalid
// myVarStr = false;
// myVarStr = 24;

//------------------------ Arrays ------------------------//
//------ "Any" arrays - untyped arrays ------//
const myAnyArr = [];

myAnyArr.push(1);
myAnyArr.push("some string");

let myVarAnyArr = [];

myVarAnyArr = [1, 2, 3];

// Invalid
// myVarAnyArr = 5;

//------ Typed arrays ------//
const accountValues: number[] = [];

accountValues.push(233);

// Invalid
// accountValues.push('Joe');

let myVarAnyArr2: number[] = [];

myVarAnyArr2 = [2242, 643, 123];

// Invalid
// myVarAnyArr2 = [231, 'joe'];

//------ "Gradually typed" typed arrays ------//
const savingsAccountBalances = [6241, 546, 123];

// Invalid
// savingsAccountValues.push('joe');

// Explicit typing arrays
const savingsAccountData: (number | string)[] = [754];

savingsAccountData.push("Meeka Faulkner");
console.log(`savingsAccountData:`, savingsAccountData);

// Invalid
// savingsAccountData.push(false);

/*------------------------------------------- OBJECTS --------------------------------------------*/
const accountInfoRaw = {};

accountInfoRaw["name"] = "Brodie Lewis";

const accountInfoTyped: { name: string; balance: number } = {
    name: "Janice Wong",
    balance: 893_478_345_835,
};

/*------------------------------- TYPE KEYWORD -------------------------------*/
type AccountInfo = {
    /**
     * Name of account holder.
     */
    name: string;
    /**
     * Current amount of bling bling in the account.
     */
    balance: number;
    /**
     * How old the account is.
     */
    age: number
};

const brodieAccount: AccountInfo = {
    name: "Brodie Lewis",
    age: 1,
    balance: 654_328_234,
};

const createAccount = (name: string, initialBalance: number) => {
    return {
        name,
        balance: initialBalance,
        age: 0,
    };
};

const meekaAccount = createAccount("Meeka Faulkner", 800);

const createMaybeDogAccount = (
    name: string,
    initialBalance: number,
    isDog: boolean,
): AccountInfo => {
    if (isDog) {
        return {
            name: `${name} the Dog!`,
            balance: initialBalance,
            age: 0,
        }
    }
    return {
        name,
        balance: initialBalance,
        age: 0,
    };
};

const meekaAccount2 = createMaybeDogAccount("Meeka Faulkner", 800, true);

