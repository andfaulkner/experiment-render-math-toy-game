const sayHello = () => {
    console.log("Hello!");
};

sayHello();

// Invalid: no argument given
// sayHello('Brodie');

/**
 * Function with argument.
 */
const sayHelloTo = (name: string) => {
   console.log(`Hello ${name}!`);
};

sayHelloTo('Janice');

const getHelloMsg = (name: string) => {
    return `Hello ${name}!`;
};

console.log(getHelloMsg('Brodie'));
