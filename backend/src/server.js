import express from 'express';
import userRoute from './routes/user.route.js';

const app = express();

app.get('/',(req,res) => {
    res.send("Hello from express!");
});

app.use('/api/users', userRoute);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});