var readLineSync = require("readline-sync")
var chalk = require("chalk")
console.log("Welcome to Arif's Math and Science Quiz: \n")
var userName = readLineSync.question("Please Enter Your Name: ")
console.log("Hello " + chalk.green.bold(userName) + " : Please start the quiz- \n")

console.log(chalk.blue.underline.bold("Rules & Instructions:"))
console.log("")
console.log(chalk.yellow.bold("1. There are 10 Questions and all are Compulsory."))
console.log(chalk.yellow.bold("2. You will get 2 points on each Right Answer."))
console.log(chalk.yellow.bold("3. One Point will be deducted for any Wrong Answer."))
console.log(chalk.yellow.bold("4. In MCQ based questions you have to type the Serial Number / Index Value."))
console.log(chalk.yellow.bold("5. You have to score at least 5 marks to pass the quiz"))
console.log("\n")

var score = 0

var questionOneWord = [{
    question: "Q.1. What is the sum of 130+125+191?\n",
    answer: "446"

}, {
    question: "Q.2. 20+(90÷2) is equal to:\n",
    answer: "65"
}, {

    question: "Q.3. 2x + 6y = 22, x + y = 5 What is x?\n",
    answer: "2"
}, {
    question: "Q.4. The product of 82 and 5 is:\n",
    answer: "410"
}, {
    question: "Q.5. What is the next prime number after 5?\n",
    answer: "7"
}]

var questionMcq = [{
    array: ["A Fish", "A wingless Insect", "An Anthropod", "A frog"],
    question: "Q.6. Which among the above clearly describes a Silver Fish?",
    answer: "A wingless Insect"
}, {

    array: ['Kerala', 'Madras', 'Bangalore', 'New Delhi'],
    question: 'Q.7. The Indian Institute of Science is located at ',
    answer: 'Bangalore'
}, {

    array: ["Dry air at 0°C", "Dry air at 30°C", "Humid air at 0°C", "Humid air at 30°C"],
    question: "Q.8. In which among the above, the speed of sound would be maximum?",
    answer: "Humid air at 30°C"

}, {

    array: ['T.N.Kaul', 'J.R.D. Tata', 'Nani Palkhivala', 'Khushwant Singh'],
    question: 'Q.9. Who wrote the famous book - "We the people"? ',
    answer: 'Nani Palkhivala'

}, {
    array: ["Intestine", "Stomach", "Caecum", "Liver"],
    question: "Q.10. Which organ in herbivorous animals helps in digestion of starch through bacteria?",
    answer: "Caecum"

}]



function quiz(question, answer) {

    var userAnswer = readLineSync.question(question)
    if (userAnswer === answer) {
        console.log("You are Right 👍")
        score = score + 2
    } else {
        console.log("You are wrong ❌")
        score = score - 1
    }
    console.log("Score is: ", score)
}


function quizMcq(listOfAnswers, question, answer) {

    var userAnswer = readLineSync.keyInSelect(listOfAnswers, question)

    if (listOfAnswers[userAnswer] === answer) {
        console.log("You are Right 👍")
        score = score + 2
    } else {
        console.log("You are wrong ❌")
        score = score - 1
    }
    console.log("Score is: ", score)

}




for (var i = 0; i < questionOneWord.length; i++) {
    console.log("\n")
    var currentQuestionOne = questionOneWord[i]
    quiz(currentQuestionOne.question, currentQuestionOne.answer)
}

for (var i = 0; i < questionMcq.length; i++) {
    console.log("\n")
    console.log(chalk.yellow.italic.bold("See the below list-"))
    var currentQuestionMcq = questionMcq[i]
    quizMcq(currentQuestionMcq.array, currentQuestionMcq.question, currentQuestionMcq.answer)

}


console.log("\n")
console.log(chalk.green.bold("Thanks for Submit", userName, ", Your Total Score is:", score))

if (score <= 5) {

    console.log(chalk.red.bold("Sorry 😞, you are failed- please try again!!"))
} else {
    console.log(chalk.green.bold("Congratulation 😊, you passed the Quiz"))
}