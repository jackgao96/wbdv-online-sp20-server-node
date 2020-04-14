const questionsDao = require('../daos/questions.dao.server')



findAllQuestions = () => questionsDao.findAllQuestions()
findQuestionById = (qid) =>
     questionsDao.findQuestionById(qid)

findQuestionsForQuiz = (qid) => questionsDao.findQuestionsForQuiz(qid)
module.exports = { findAllQuestions, findQuestionById, findQuestionsForQuiz }


