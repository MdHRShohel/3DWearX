import cors from 'cors';
import * as dotenv from 'dotenv';
import express from 'express';

import dalleRoutes from './routes/dalle.routes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.use('/api/v1/dalle', dalleRoutes);

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello from DALL.E!' });
});

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});