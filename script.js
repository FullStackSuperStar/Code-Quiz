// creating js script

//creating start-btn evnt lstnr 
const startButton = document.getElementById('start-btn')

const nextButton = document.getElementById('next-btn')
//creating get question container
const questionContainerElement = document.getElementById('question-container')

//question object
const questionElement = document.getElementById('question')
//answer object
const answerButtonsElement = document.getElementById('answer-buttons')

//creating shuffle and index 
let shuffledQuestions, currentQuestionIndex

//creating start button evnt lstnr
startButton.addEventListener('click', startGame)

//creating answer button evnt lstnr
// answerButtonsElement.children.forEach (answerButton=>answerButton.addEventListener('click', selectAnswer))
// startButton.addEventListener('click', startGame)  -sam said to delete, identical to 17


/* creating start function:
~console logging SG
~hiding question container
~shuffling questions and setting question index and chooser)*/

function startGame() {
    // console.log('Started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

// setting NextAnswer function
function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

//showing the question
function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')  //erase create element use querey selector
        button.innerText = answer.text
        button.classList.add('btn') //won't need
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState () {
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }

}
/* code for when buttton is selected - where is select answer used
// setting SelectAnswer function */
function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}


const questions = [
    {
        question: 'Commonly used data types DO NOT include ? ',
        answers: [
        {   text: " 1. alerts", correct: true },
        {   text: " 2. strings", correct: false }, 
        {   text: " 3. booleans", correct: false }, 
        {   text: " 4. numbers", correct: false } 
            // text: "booleans", correct: false },
            // text: "numbers", correct: false }
    ] 

    }
]