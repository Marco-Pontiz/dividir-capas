import express from 'express';
import * as dotenv from 'dotenv';
dotenv.config();
import apiRoutes from './router/apiRoutes.js';
import './persistance/db.connection.js';

const app = express();

app.use(express.json());

app.use('/', apiRoutes);

const port = process.env.PORT || 8080;

app.listen(port,
    () => {
        console.log(`\n[INIT] Server is running at http://localhost:${port}`);
    }
);