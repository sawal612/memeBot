import express from 'express';
import { memeController } from './controller/meme.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());

app.get('/meme', memeController);

app.listen(3000,"0.0.0.0", () => {
  console.log('Server is running on port 3000');
});
