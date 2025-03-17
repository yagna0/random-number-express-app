import express from 'express';
import cors from 'cors';

const app = express();
const port = 3003;
const N_NUMBERS = 17;
const yourOrigin = "https://yagna0.github.io"; // Change this to your own domain

const origins = [
    /^https?:\/\/localhost(:\d+)?$/,
    "https://www.google.com",
    /^https:\/\/(.*\.)*vccs\.edu$/,
    yourOrigin,
];

const corsOptions = {
    origin: origins,
}

app.use(cors(corsOptions));

function generateRandomNumbers() {
        
    return Math.floor(Math.random() * 100);
    
}

app.get('/', (req, res) => {
    res.json(Array.from({ length: N_NUMBERS}, generateRandomNumbers));
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});