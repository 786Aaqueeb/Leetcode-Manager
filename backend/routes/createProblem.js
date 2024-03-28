// routes/createProblem.js
const Problem = require('../models/Problems.js');

async function createProblem(req, res) {
  try {
    const { title, url, difficulty, tags } = req.body;
    
    const newProblem = await Problem.create({
      title,
      url,
      difficulty,
      tags,
    });

    res.status(201).json(newProblem);
  } catch (error) {
    console.error('Error creating problem:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = createProblem;
