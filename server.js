import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

import router from './routers/router.js';

const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/v1', router)

app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
})