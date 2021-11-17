const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const Dot = require('./models/dot')

const MONGO_URI = 'mongodb+srv://dbUser:EBxcLeqsyD8lnfVE@cluster0.wwmwk.mongodb.net/Test?retryWrites=true&w=majority';

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

app.post('/postDot', async (req, res) => {
    try {
        const newDot = new Dot({
            x: req.body.x,
            y: req.body.y
        });

        await newDot.save();
    } catch {
        console.log("Something went wrong posting!");
    }
});

app.get('/getAllDots', async (req, res) => {
    try {

        const allDots = await Dot.find();
        res.send(allDots);

    } catch {
        console.log("Something went wrong getting!");

    }
})

mongoose.connect(MONGO_URI);
mongoose.connection
.once('open', () => console.log('Connected to MongoLab instance.'))
.on('error', error => console.log('Error connecting to MongoLab:', error));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
