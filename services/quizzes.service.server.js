//const quizzes = require('./quizzes')

const quizzesDao = require('../daos/quizzes.dao.server')

findAllQuizzes = () => quizzesDao.findAllQuizzes().populate('questions')
findQuizById = (quizId) => quizzesDao.findQuizById(quizId).populate('questions')

module.exports = {
    findAllQuizzes,
    findQuizById
}
