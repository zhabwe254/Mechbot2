import express from 'express';
import cors from 'cors';
import openai from './config/open-ai.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5001;

app.post('/api/chat', async (req, res) => {
  try {
    const { message, chatHistory } = req.body;

    const messages = [
      { role: 'system', content: 'You are MechBot, a mechanical engineer specialized in plumbing, drainage, fire fighting, and HVAC systems. Your role is to provide expert advice and troubleshooting for construction-related mechanical engineering problems.' },
      ...chatHistory.map(([role, content]) => ({ role, content })),
      { role: 'user', content: message }
    ];

    const completion = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: messages,
    });

    const completionText = completion.data.choices[0].message.content;
    res.json({ message: completionText });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred while processing your request.' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
