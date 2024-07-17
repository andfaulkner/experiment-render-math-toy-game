import express from 'express';
import cors from 'cors';
import path from 'path';
import {path as appRootPath} from 'app-root-path';

import {config as dotEnvConfig} from 'dotenv';

//--------------- Config ---------------//
// Add dotenv config
dotEnvConfig({path: path.join(appRootPath, './config/.env')});

//
// Set up stacktrace cleaning & tracing modules.
// Import with require for legacy reasons.
//
require('trace');
require('clarify');

/**
 * Server application.
 */
const app = express();

//
// Configuration
//
const port = process.env['PORT'];

//
// Add middlewares.
// Includes handler that serves the /public directory.
//
app.use(cors());
app.use(express.static('public'));
app.use(express.json());

//
// Set server routes.
//
app.get('/', async (req, res) => {
  res.send({ status: 'ok' });
});

//
// Launch server.
//
app.listen(port, () => {
  console.log(`\nExpress server attached to port ${port}.\nView app at http://localhost:${port}`);
});
