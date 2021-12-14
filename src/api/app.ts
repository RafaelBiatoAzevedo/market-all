import express from 'express';
import bodyParse from 'body-parser';

const app = express();

app.use(bodyParse.json());

app.post('/auth/signup', (req, res) => {});

module.exports = app;
