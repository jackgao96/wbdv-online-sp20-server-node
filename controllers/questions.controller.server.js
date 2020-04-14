
const questionsService = require('../services/questions.service.server')

module.exports = function(app) {
    app.get('/api/quizzes/:qid/questions', (req, res) => {
        const quizId = req.params['qid']
        questionsService
            .findQuestionsForQuiz(quizId)
            .then(questions => res.json(questions))
    })
    app.get('/api/questions', (req, res) =>
        questionsService.findAllQuestions()
            .then(allQuestions => res.json(allQuestions)))

    app.get('/api/questions/:qid', (req, res) =>
        questionsService
            .findQuestionById(req.params['qid'])
            .then(question => res.json(question)))
}

