interface Animal {
    name: string;
    numberOfLegs: number;
    favFood: string;
    makeSound: () => string;
}

/*------------------------------- WITH A CLASS -------------------------------*/
class Dog implements Animal {
    public numberOfLegs = 4;
    public makeSound = () => {
        return "Woof";
    };
    constructor(
        public name: string,
        public favFood: string,
        public commandsKnown: string[],
    ) {}
}

/*-------------------------- WITH AN OBJECT LITERAL --------------------------*/
const meeka: Animal = {
    name: "Meeka",
    favFood: "Meat",
    numberOfLegs: 4,
    makeSound: () => {
        return "Woof";
    },
};

/*-------------------------- WITH A FACTORY METHOD ---------------------------*/
const createDog = (
    name: string,
    favFood: string,
    commandsKnown: string[],
): Animal => {
    return {
        name,
        favFood,
        numberOfLegs: 4,
        makeSound: () => "Woof",
    };
};

/*--------------------------------------- FINANCE EXAMPLE ----------------------------------------*/
interface Account {
    balance: number;
    type: "savings" | "chequing";
    monthlyFee: number;
    monthlyInterest: number;
    deposit: (amount: number) => number;
    withdraw: (amount: number) => number;
}

/*------------------------------- WITH A CLASS -------------------------------*/
class RainyDayFund implements Account {
    public type = "savings" as const;
    public balance: number;

    public deposit = (amount: number) => {
        this.balance = this.balance + amount;
        return this.balance;
    };

    public withdraw = (amount: number) => {
        this.balance = this.balance - amount;
        return this.balance;
    };

    constructor(
        initialBalance: number,
        public monthlyFee: number,
        public monthlyInterest: number,
    ) {
        this.balance = initialBalance;
    }
}

const andrewRainyDayFund = new RainyDayFund(5000, 0, 4);

console.log(`Andrew's Rainy Day Fund:`, andrewRainyDayFund);

/*-------------------------- WITH AN OBJECT LITERAL --------------------------*/
const janicePension: Account = {
    type: "savings",
    balance: 50000,
    monthlyFee: 0,
    monthlyInterest: 5,
    deposit: (amount: number) => {
        this.balance = this.balance + amount;
        return this.balance;
    },
    withdraw: (amount: number) => {
        this.balance = this.balance - amount;
        return this.balance;
    },
};

console.log(`Balance of Janice's pension:`, janicePension.balance);

/*-------------------------- WITH A FACTORY METHOD ---------------------------*/
const createInvestmentAccount = (
    initialBalance: number,
    monthlyFee: number,
    monthlyInterest: number,
): Account => {
    const data = { balance: initialBalance };
    return {
        type: 'savings',
        get balance() {
            return data.balance;
        },
        monthlyFee,
        monthlyInterest,
        deposit: (amount: number) => {
            data.balance = data.balance + amount;
            return data.balance;
        },
        withdraw: (amount: number) => {
            data.balance = data.balance - amount;
            return data.balance;
        },
    };
};

const brodiesWorldTakeoverPlan = createInvestmentAccount(100_000, -100, 3000);
console.log(`Brodie's accidental 'destroy global finance' fund:`, brodiesWorldTakeoverPlan);
