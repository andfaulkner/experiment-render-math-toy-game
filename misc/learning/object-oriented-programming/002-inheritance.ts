// WARNING: USE THIS PATTERN VERY SPARINGLY
/*----------------------------------------- PARENT CLASS -----------------------------------------*/
/**
 * Parent class, from which child classes inherit
 */
class Vehicle {
    protected isDriverDoorOpen: boolean = false;
    public mileage: number = 0;

    protected setNewMileage = (speed: number, hours: number) => {
        this.mileage = this.mileage + (speed * hours);
    };

    public openDriverDoor = () => {
        this.isDriverDoorOpen = true;
    };

    public closeDriverDoor = () => {
        this.isDriverDoorOpen = false;
    };
}

/*-------------------------------------- FIRST CHILD CLASS ---------------------------------------*/
/**
 * Inheriting child class
 */
class Suv extends Vehicle {
    public drive = (speed: number, hours: number) => {
        if (this.isDriverDoorOpen) {
            return console.log(`Cannot drive! Close your damn door!`);
        }
        this.setNewMileage(speed, hours);
    };

    public report = () => {
        console.log(`${this.year} ${this.make} ${this.model}:`);
        console.log(this);
    };

    constructor(
        public make: string,
        public model: string,
        public year: number,
        public color: string
    ) {
        super();
    }
}

const andrewSuv = new Suv('Kia', 'Sportage', 2016, 'blue');
andrewSuv.report();

andrewSuv.openDriverDoor();
andrewSuv.report();

// Try to drive with door open - this fails (because it's a super-high-tech car).
// As such, mileage doesn't go up.
andrewSuv.drive(100, 2);
andrewSuv.report();

// Close door, then try to drive - this succeeds, and mileage goes up.
andrewSuv.closeDriverDoor();
andrewSuv.drive(100, 2);
andrewSuv.report();

// Can't be called, because it's a private attribute.
// andrewSuv.isDriverDoorOpen;

/*-------------------------------------- SECOND CHILD CLASS --------------------------------------*/
// Any number of classes can inherit from another
/**
 * Inheriting child class
 */
class Forklift extends Vehicle {
    public armHeight: number = 0;

    public drive = (speed: number, hours: number) => {
        this.setNewMileage(speed, hours);
    };

    public report = () => {
        console.log(`Yellow forklift info:`);
        console.log(this);
    };

    public liftArms = (amount: number) => {
        if ((this.armHeight + amount) > 10) {
            this.armHeight = 10;
        } else if ((this.armHeight + amount) < 0) {
            this.armHeight = 0;
        } else {
            this.armHeight = this.armHeight + amount;
        }
    };

    constructor(
        public make: string,
        public model: string,
        public year: number,
    ) {
        super();
    }
}

const janiceForklift = new Forklift('John Deere', '480-B', 2016);
janiceForklift.report();

janiceForklift.openDriverDoor();
janiceForklift.report();

// Try to drive with door open - this fails (because it's a super-high-tech car).
// As such, mileage doesn't go up.
janiceForklift.drive(16, 1.5);
janiceForklift.report();

// Close door, then try to drive - this succeeds, and mileage goes up.
janiceForklift.closeDriverDoor();
janiceForklift.drive(16, 1.5);
janiceForklift.report();

janiceForklift.liftArms(20);
janiceForklift.report();
