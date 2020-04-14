const express = require('express')
const app = express()

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


const mongoose = require('mongoose')
mongoose.connect('mongodb://heroku_8c17h40k:sb784thvdhjbsm41v8t8k9avnu@ds013414.mlab.com:13414/heroku_8c17h40k',
    {useNewUrlParser: true, useUnifiedTopology: true})

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin",
        "https://wbdv-sp20-hgao-client-angular.herokuapp.com");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

require('./controllers/quizzes.controllers.server')(app)
require('./controllers/questions.controller.server')(app)
require('./controllers/users.controller.server')(app)
require('./controllers/quiz-attempts.controller.server')(app)

app.get('/', (req, res) => res.send('hello world'))

app.listen(process.env.PORT||3000)

