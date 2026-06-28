import express from 'express';

import config from './config/config.js';
import userRoute from './routes/user.route.js';
import connectDB from './config/db.js';
import bodyParser from 'body-parser';

const app = express();

connectDB();

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello from express');
});

app.use('/api/users', userRoute);

app.get('/about', (req, res) => {
    res.send('This is the about page');
});

app.post('/contact', (req, res) => {
    res.send('Contact form submitted');
});

app.listen(config.port, () => {
    console.log(`Server is running on port ${config.port}`);
});