// - Types
    // -   Concept
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
const myStr = 'Meeka';

let myVarStr = 'Dog name';

myVarStr = 'Meekapup';

// Invalid
// myVarStr = false;
// myVarStr = 24;

//------------------------ Arrays ------------------------//
//------ "Any" arrays - untyped arrays ------//
const myAnyArr = [];

myAnyArr.push(1);
myAnyArr.push('some string');

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

savingsAccountData.push('Meeka Faulkner');
console.log(`savingsAccountData:`, savingsAccountData);

// Invalid
// savingsAccountData.push(false);

