// routes/updateProblem.js
const Problem = require('../models/Problems');

async function updateProblem(req, res) {
  try {
    const { id } = req.params;
    const { title, url, difficulty, tags } = req.body;
    
    const updatedProblem = await Problem.findByIdAndUpdate(id, {
      title,
      url,
      difficulty,
      tags,
    }, { new: true });

    res.json(updatedProblem);
  } catch (error) {
    console.error('Error updating problem:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = updateProblem;
