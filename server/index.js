const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT;
const chats = require('./data');

app.get('/', (req, res) => {
    res.send("I am the Danger!");
});

app.get('/api/chats', (req, res) => {
    res.send(chats);
});

app.get('/api/chats/:id', (req, res) => {
    const id = req.params.id;
    const singleChat = chats.find((c) => c._id === id);
    res.send(singleChat);
});

app.listen(PORT, () => console.log("Jesse Pinkman Bitch!"));
