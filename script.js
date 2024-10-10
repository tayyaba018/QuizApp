'use Strict'

const quizQuestions = [
    {
      question: "What does HTML stand for?",
      options: [
        "Hyper Trainer Marking Language",
        "Hyper Text Markup Language",
        "High Text Marking Language",
        "Hyper Text Making Language"
      ],
      answer: "1"
    },
    {
      question: "Which part of the computer is considered the brain of the system?",
      options: [
        "Hard Drive",
        "CPU",
        "RAM",
        "Power Supply"
      ],
      answer: "1"
    },
    {
      question: "What does CSS stand for?",
      options: [
        "Cascading Style Sheets",
        "Creative Style Sheets",
        "Colorful Style Sheets",
        "Computer Style Sheets"
      ],
      answer: "0"
    },
    {
      question: "Which programming language is used for web development?",
      options: [
        "Python",
        "JavaScript",
        "C++",
        "Java"
      ],
      answer: "1"
    }
];

// JS initializing
const quiz = document.querySelector('#quiz');
const inputElement = document.querySelectorAll('.answer');
const questionElement = document.querySelector('#question'); 



const optionsElements = [
    document.querySelector('#option-1'),
    document.querySelector('#option-2'),
    document.querySelector('#option-3'),
    document.querySelector('#option-4')
];

const submitBtn = document.querySelector(".btn");

let currQuiz = 0;
let score = 0;

function startQuiz() {
    const {question, options} = quizQuestions[currQuiz];
    questionElement.innerText = `${currQuiz + 1}: ${question}`;

    // loop through the options
    options.forEach((currOpt, index) => {
        optionsElements[index].innerText = currOpt;
    });
}

// get index of selected option
let changingIntoArr = Array.from(inputElement);
const getSelectorOption = () => {
    return changingIntoArr.findIndex((currOpt) => currOpt.checked);
}

// deselect the options
const deSelectAnswers = () => {
    return changingIntoArr.forEach((des) => des.checked = false);
}

// After submit button
submitBtn.addEventListener('click', function () {
    const selectIndexOption = getSelectorOption();

    // Check if the selected option matches the correct answer
    if (selectIndexOption === parseInt(quizQuestions[currQuiz].answer)) {
        score = score + 1;
    }

    currQuiz++;

    if (currQuiz < quizQuestions.length) {
        deSelectAnswers();
        startQuiz();
    } else {
        // Show the result after the quiz ends
        quiz.innerHTML =
            `<div class="result-container">
                <h2>Your score: ${score}/${quizQuestions.length}</h2>
                <p>Congratulations on completing the quiz 🎉!</p>
                <button class="btn" onClick="location.reload()">Play Again 🔁</button>
            </div>`;
    }
});

startQuiz();
