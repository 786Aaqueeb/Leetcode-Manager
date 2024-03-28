const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const createProblem = require('./routes/createProblem');
const deleteProblem = require('./routes/deleteProblem');
const editProblem = require('./routes/editProblem');
const updateProblem = require('./routes/updateProblem');


const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../')));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'index.html'));
  });

// MongoDB connection string
const mongoURI = 'mongodb+srv://2021abhishekjadhav:5q2Jzcpvnu7NiMA9@cluster0.sgdfubt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((err) => {
    console.error('Error connecting to MongoDB:', err);
});

// Routes for problem management
app.post('/problems', createProblem);
app.delete('/problems/:id', deleteProblem);
app.put('/problems/:id', editProblem);
app.patch('/problems/:id', updateProblem);



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
