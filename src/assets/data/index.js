const profile = require('./profile.json');
const chart1 = require('./chart1.json');
const hint1 = require('./hint1.json');
const hint2 = require('./hint2.json');
const learner_report = require('./learner_report.json');
const user_evaluation = require('./user-evaluation.json');
const exercises = require('./exercises.json')

module.exports = () => ({
  profile: profile,
  chart1: chart1,
  hint1: hint1,
  hint2: hint2,
  learner_report: learner_report,
  user_evaluation: user_evaluation,
  exercises: exercises
});

// command json-server --watch .\src\assets\data\index.js --port 3000