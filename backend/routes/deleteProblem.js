// routes/deleteProblem.js
const Problem = require('../models/Problems.js');

async function deleteProblem(req, res) {
  try {
    const { id } = req.params;
    
    await Problem.findByIdAndDelete(id);

    res.json({ message: 'Problem deleted successfully' });
  } catch (error) {
    console.error('Error deleting problem:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = deleteProblem;
