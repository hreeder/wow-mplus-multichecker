import serverless from 'serverless-http';
import express from 'express';

import { auth } from './auth'

const app = express();

app.use("/auth", auth);

app.get('/', (req, res) => {
    res.send("Hello, World")
})

export const handler = serverless(app);