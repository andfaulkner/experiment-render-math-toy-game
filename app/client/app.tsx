/* eslint @typescript-eslint/no-unused-vars: ["warn", { "varsIgnorePattern": "require" }] */
/* eslint-disable import/first */

/*
 * Ensures require imports are still allowed in the frontend.
 */
declare function require(name: string): any;

// Import global CSS (which now acts as CSS Modules)
import styles from './styles/index.css';
console.log(`styles:`, styles);


import ReactDOM from 'react-dom';

/**
 *  Top-level component of application.
 */
export const App = (): JSX.Element => {
    return (
        <div>
            <h1>Server is running!</h1>
            <p>Placeholder text</p>
        </div>
    );
};

//
// Render the application
//
ReactDOM.render(<App />, document.getElementById('root'));
