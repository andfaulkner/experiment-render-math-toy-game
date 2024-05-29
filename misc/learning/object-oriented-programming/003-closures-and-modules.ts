// "Closure" is a property of Javascript and Typescript.
// Functions "close over" their surrounding scope, pulling the content of it along.

const createOcean = (temperature: number, maxDepth: number) => {
    const oceanData = {temperature, maxDepth};
    return {
        changeTemperature: (newTemperature: number) => {
            oceanData.temperature = newTemperature;
        },
        getTemperature: () => oceanData.temperature,
        get maxDepth() {
            return oceanData.maxDepth;
        },
        /**
         * Pressure at the deepest point in the ocean.
         */
        get maxPressure() {
            return oceanData.maxDepth * 3.76;
        }
    };
};

const pacific = createOcean(20, 10000);
console.log(pacific);

console.log(`Pacific temperature: `, pacific.getTemperature());

pacific.changeTemperature(30);
console.log(`Pacific temperature: `, pacific.getTemperature());

const arctic = createOcean(1, 4000);
console.log(`Arctic temperature: `, arctic.getTemperature());
console.log(`Pacific temperature: `, pacific.getTemperature());

console.log(`Arctic maximum depth: `, arctic.maxDepth);
console.log(`Pacific maximum depth: `, pacific.maxDepth);

console.log(`Arctic maximum pressure: `, arctic.maxPressure);
console.log(`Pacific maximum pressure: `, pacific.maxPressure);
