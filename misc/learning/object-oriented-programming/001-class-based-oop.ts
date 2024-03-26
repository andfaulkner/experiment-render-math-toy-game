class Car {
    public mileage: number = 0;
    private isDriverDoorOpen: boolean = false;

    private setNewMileage = (speed: number, hours: number) => {
        this.mileage = this.mileage + (speed * hours);
    };

    public openDriverDoor = () => {
        this.isDriverDoorOpen = true;
    };

    public closeDriverDoor = () => {
        this.isDriverDoorOpen = false;
    };

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
    }
}

const andrewCar = new Car('Kia', 'Sportage', 2016, 'blue');
andrewCar.report();

andrewCar.openDriverDoor();
andrewCar.report();

// Try to drive with door open - this fails (because it's a super-high-tech car).
// As such, mileage doesn't go up.
andrewCar.drive(100, 2);
andrewCar.report();

// Close door, then try to drive - this succeeds, and mileage goes up.
andrewCar.closeDriverDoor();
andrewCar.drive(100, 2);
andrewCar.report();

// Can't be called, because it's a private attribute.
// andrewCar.isDriverDoorOpen;

//
