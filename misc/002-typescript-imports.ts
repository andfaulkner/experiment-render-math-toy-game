import {mkdir} from 'fs';

// Invalid, because no default export present in the fs module
// import fs from 'fs';

// Typescript gives you autocompletes, etc when running imported functions
mkdir('./location/to/make-directory/at', {recursive: true}, () => {
    console.log('Directory created!');
});
