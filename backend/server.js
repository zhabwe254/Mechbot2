import express from 'express';
import cors from 'cors';
import openai from './config/open-ai.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5001;

app.get('/api/greeting', (req, res) => {
  const greeting = 'Hello! I am Mechbot, an AI assistant designed for plumbing, drainage, fire fighting, and HVAC problem solving and troubleshooting.';
  res.json({ message: greeting });
});

app.post('/api/chat', async (req, res) => {
  try {
    const { message, chatHistory } = req.body;

    const messages = chatHistory.map(([role, content]) => ({ role, content }));
    messages.push({ role: 'user', content: message });

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
