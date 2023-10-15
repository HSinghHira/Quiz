const questionNumber = document.querySelector(".question-number");
const questionText = document.querySelector(".question-text");
const optionContainer = document.querySelector(".option-container");
const answersIndicatorContainer = document.querySelector(".answers-indicator");
const homeBox = document.querySelector(".home-box");
const quizBox = document.querySelector(".quiz-box");
const resultBox = document.querySelector(".result-box");
const questionLimit = 15; // if you want all questions "quiz.length"
let questionCounter = 0;
let currentQuestion;
let availableQuestions = [];
let availableOptions = [];
let correctAnswers = 0;
let attempt = 0;

 // Function to hide the "Next" button
 function hideNextButton() {
   const nextButton = document.querySelector(".next-question-btn");
   nextButton.style.display = "none";
 }

// push the questions into availableQuestions Array
function setAvailableQuestions() {
  const totalQuestion = quiz.length;
  for (let i = 0; i < totalQuestion; i++) {
    availableQuestions.push(i);
  }
}

// set question number and question and options
function getNewQuestion() {
  // set question number
  questionNumber.innerHTML = "Question " + (questionCounter + 1) + " of " + questionLimit;

  hideNextButton();

  // get random question index
  const questionIndex = availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
  currentQuestion = quiz[questionIndex];
  questionText.innerHTML = currentQuestion.q;

  // show question image if 'img' property exists
  if (currentQuestion.hasOwnProperty("img")) {
    const img = document.createElement("img");
    img.src = currentQuestion.img;
    questionText.appendChild(img);
  }

  // set options
  const optionLen = currentQuestion.options.length;
  availableOptions = Array.from(Array(optionLen).keys()); // Array of all option indices

  optionContainer.innerHTML = '';
  let animationDelay = 0.15;

  // create options in HTML
  for (let i = 0; i < optionLen; i++) {
    const optionIndex = availableOptions[i];
    const option = document.createElement("div");
    option.innerHTML = currentQuestion.options[optionIndex];
    option.id = optionIndex;
    option.style.animationDelay = animationDelay + 's';
    animationDelay = animationDelay + 0.15;
    option.className = "option";
    optionContainer.appendChild(option);
    option.setAttribute("onclick", "getResult(this)");
  }

  questionCounter++;
  // Remove the current question index from availableQuestions
  availableQuestions.splice(availableQuestions.indexOf(questionIndex), 1);

  if (currentQuestion.numberofcorrectanswer === 2) {
   // Show the "Next" button if two correct answers are selected
   showNextButton();
 }
}

// get the result of the current attempt question
function getResult(element) {
   const id = parseInt(element.id);
   const numCorrectAnswers = currentQuestion.numberofcorrectanswer;
 
   if (element.classList.contains("already-answered")) {
     // If the option is already answered, do nothing
     return;
   }
 
   if (currentQuestion.answer.includes(id)) {
     // Correct answer
     element.classList.add("correct");
     updateAnswerIndicator("correct");
     correctAnswers++;
   } else {
     // Wrong answer
     element.classList.add("wrong");
     updateAnswerIndicator("wrong");
 
     // Show the correct options by adding the "correct" class
     currentQuestion.answer.forEach((correctOption) => {
       optionContainer.children[correctOption].classList.add("correct");
     });
   }
 
   attempt++;
 
   if (numCorrectAnswers > 1) {
     // If multiple correct answers are allowed
     element.classList.add("already-answered"); // Apply "already-answered" class to selected option
     const selectedCorrectAnswers = optionContainer.querySelectorAll('.correct.already-answered').length;
 
     if (selectedCorrectAnswers >= numCorrectAnswers) {
       // Apply "already-answered" class to the rest of the options
       for (let i = 0; i < optionContainer.children.length; i++) {
         if (!optionContainer.children[i].classList.contains("correct")) {
           optionContainer.children[i].classList.add("already-answered");
         }
       }
 
       unclickableOptions();
 
       // Show the "Next" button
       showNextButton();
     }
   } else {
     // If only one correct answer is allowed, make all options unclickable
     unclickableOptions();
 
     // Show the "Next" button
     showNextButton();
   }
 }
 
 // Function to show the "Next" button
 function showNextButton() {
   const nextButton = document.querySelector(".next-question-btn");
   nextButton.style.display = "block";
 }
 
 
 function next() {
   if (questionCounter === questionLimit) {
     quizOver();
   } else {
     getNewQuestion();
     // Hide the "Next" button when a new question is displayed
     hideNextButton();
   }
 }


 

 // make all the options unclickable once the user selects an option
function unclickableOptions() {
   const optionLen = optionContainer.children.length;
   const numCorrectAnswers = currentQuestion.numberofcorrectanswer;
 
   if (numCorrectAnswers === 1) {
     // If only one correct answer is allowed, make all options unclickable
     for (let i = 0; i < optionLen; i++) {
       optionContainer.children[i].classList.add("already-answered");
     }
   } else if (numCorrectAnswers > 1) {
     // If multiple correct answers are allowed, make only the correct number of options unclickable
     let unclickableCount = 0;
     for (let i = 0; i < optionLen; i++) {
       if (optionContainer.children[i].classList.contains("correct")) {
         unclickableCount++;
       }
       if (unclickableCount >= numCorrectAnswers) {
         break;
       }
     }
     for (let i = unclickableCount; i < optionLen; i++) {
       optionContainer.children[i].classList.add("already-answered");
     }
   }
 }
 

function answersIndicator() {
  answersIndicatorContainer.innerHTML = '';
  const totalQuestion = questionLimit;
  for (let i = 0; i < totalQuestion; i++) {
    const indicator = document.createElement("div");
    answersIndicatorContainer.appendChild(indicator);
  }
}

function updateAnswerIndicator(markType) {
  answersIndicatorContainer.children[questionCounter - 1].classList.add(markType);
}

function next() {
  if (questionCounter === questionLimit) {
    quizOver();
  } else {
    getNewQuestion();
  }
}

function quizOver() {
  // hide quiz Box
  quizBox.classList.add("hide");
  // show result Box
  resultBox.classList.remove("hide");
  quizResult();
}

// get the quiz Result
function quizResult() {
  resultBox.querySelector(".total-question").innerHTML = questionLimit;
  resultBox.querySelector(".total-attempt").innerHTML = attempt;
  resultBox.querySelector(".total-correct").innerHTML = correctAnswers;
  resultBox.querySelector(".total-wrong").innerHTML = attempt - correctAnswers;
  const percentage = (correctAnswers / questionLimit) * 100;
  resultBox.querySelector(".percentage").innerHTML = percentage.toFixed(2) + "%";
  resultBox.querySelector(".total-score").innerHTML = correctAnswers + " / " + questionLimit;
}

function resetQuiz() {
  questionCounter = 0;
  correctAnswers = 0;
  attempt = 0;
  availableQuestions = Array.from(Array(quiz.length).keys()); // Reset available questions to include all questions.
}

function tryAgainQuiz() {
  // hide the resultBox
  resultBox.classList.add("hide");
  // show the quizBox
  quizBox.classList.remove("hide");
  resetQuiz();
  startQuiz();
}

function goToHome() {
  // hide result Box
  resultBox.classList.add("hide");
  // show home box
  homeBox.classList.remove("hide");
  resetQuiz();
}

// #### STARTING POINT ####

function startQuiz() {
   // hide home box
   homeBox.classList.add("hide");
   // show quiz Box
   quizBox.classList.remove("hide");
   // first, we will set all questions in the availableQuestions Array
   setAvailableQuestions();
   // second, we will call getNewQuestion(); function
   getNewQuestion();
   // to create an indicator of answers
   answersIndicator();
   
   // Hide the "Next" button initially
   hideNextButton();
 }
 

window.onload = function () {
  homeBox.querySelector(".total-question").innerHTML = questionLimit;
}
