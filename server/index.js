require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;
const express = require('express');

const { getMessages, addMessage } = require('./controllers/messageController');

const { SERVER_PORT, CONNECTION_STRING } = process.env;
const app = express();

app.use(require('body-parser').text());
app.use(express.json());

MongoClient.connect(CONNECTION_STRING, {useUnifiedTopology: true})
    .then(client => {
        console.log('Connected to databse.');
        app.set('db', client.db('wedding'));

        app.get('/api/messages', getMessages);
        app.post('/api/message', addMessage);

        app.listen(SERVER_PORT, () => console.log(`Server listening on port ${SERVER_PORT}...`));
    })
    .catch(error => console.error(error));
