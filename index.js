const translate = require('google-translate-api-x');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/translate', async (req, res) => {
  console.log('Got a request!')
  const { content, language } = req.body;
  try {
    const translated = await translate(content, { to: language, autoCorrect: true });
    res.status(200).json({ data: translated.text });
  } catch (e) {
    res.status(500).json({
      message: e,
    });
  }
});

app.get('/', (req, res) => {
  res.send('Hi')
});

app.listen(8000, () => {
  console.log('Server is running on port 8000');
});