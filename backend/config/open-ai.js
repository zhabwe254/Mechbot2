import { Configuration, OpenAIApi } from 'openai';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const corsOptions = {
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  optionsSuccessStatus: 200
};

export { openai, corsOptions };
