
const options=document.querySelector(".options-quest").children;
const questionNumberSpan=document.querySelector(".question-num-value")
const totalQuestionSpan=document.querySelector(".total-questions");
const correctAnswerSpan=document.querySelector(".correct-answers");
const totalQuestions=document.querySelector(".total-questions2");
const percentage=document.querySelector(".percentage");
const question=document.querySelector(".question");
const hidden = document.getElementById("hidden");
const quizHidden = document.getElementById("quiz-hidden");
const scorePage = document.getElementById("final-page")
const op1=document.querySelector(".option1");
const op2=document.querySelector(".option2");
const op3=document.querySelector(".option3");
const op4=document.querySelector(".option4");
let questionIndex;
let index=0;
let myArray=[];
let myArr=[];
let score=0;


//questions
const questions=[
    {
    q: "Commonly used data types DO NOT include:",
    options:["Strings", "Booleans", "Alerts", "Numbers"],
    answer:2
    },
    {
    q: "The condition in an if/else statement is enclosed within ____.",
    options:["Quotes", "Curly Brackets", "Parenthesis", "Square Brackets"],
    answer:2
    },
    {
    q: "Arrays in JavaScript can be used to store _____.",
    options:["Numbers & Strings", "Other arrays", "Booleans", "All of the above"],
    answer:3
    },
    {
    q: "String values must be enclosed within ____ when being assigned to variables",
    options:["Commas", "Curly Brackets", "Quotes", "Paranthesis"],
    answer:2
    },
    {
    q: "A very useful tool used during development and debugging for printing content to the debugger is:",
    options:["JavaScript", "Terminal/Bash", "for loops", "console.log"],
    answer:3
    },
]
totalQuestionSpan.innerHTML=questions.length;
function load(){
    questionNumberSpan.innerHTML=index+1;
    question.innerHTML=questions[questionIndex].q;
    op1.innerHTML=questions[questionIndex].options[0];
    op2.innerHTML=questions[questionIndex].options[1];
    op3.innerHTML=questions[questionIndex].options[2];
    op4.innerHTML=questions[questionIndex].options[3];
    index++;
}


function check(element){
    if(element.id==questions[questionIndex].answer){
        element.classList.add("correct");
        score++;
        //console.log(score);
    }else{
        element.classList.add("incorrect");
        //console.log("incorrect");
    }

    disabledOptions()
}

function disabledOptions(){
    for(let i=0; i<options.length; i++){
        options[i].classList.add("disabled");
        if(options[i].id==questions[questionIndex].answer){
            options[i].classList.add("correct");
            
        }
    }
}
function enableOptions(){
    for(let i=0; i<options.length; i++){
        options[i].classList.remove("disabled", "correct", "incorrect");
    }
}

function validate(){
    if(!options[0].classList.contains("disabled")){
        alert("Please select one option")
    }else{
        enableOptions();
        randomQuestion();
    }
}
function next(){
    validate();
}



function randomQuestion(){
    let randomNumber=Math.floor(Math.random()*questions.length);
    let hitDuplicate=0;
    if(index==questions.length){
        console.log("Quiz Over");
        quizComplete();
    }else{   
        if(myArray.length>0){
            for(let i=0; i<myArray.length; i++){
                if(myArray[i]==randomNumber){
                    hitDuplicate=1;
                    break;
                }
            }
            if(hitDuplicate==1){
                randomQuestion();
            }else{
                questionIndex=randomNumber;
                load();
                myArr.push(questionIndex);
            }
        }
        if(myArray.length==0){
            questionIndex=randomNumber;
            load();
            myArr.push(questionIndex);
        }
        console.log("myArr:" + myArr);

        myArray.push(randomNumber);
        //console.log(questionIndex)
        
    }
}

function quizComplete(){
    scorePage.style.display = "block"
    scorePage.style.margine = "auto"
    correctAnswerSpan.innerHTML=score;
    totalQuestions.innerHTML=questions.length;
    percentage.innerHTML=(score/questions.length)*100 + "%";
}

function tryAgain(){
    window.location.reload();
}

window.onload=function(){
    this.randomQuestion();
}


// this is where i need to add the timer
function timeLeft(time) {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    if (seconds < 10) {
    seconds = `0${seconds}`;
    }
    return `${minutes}:${seconds}`;
   }
   function timer() {
    const TIME_LIMIT = 45;
    var timePassed = 0;
    var timeLeft = TIME_LIMIT;
    document.getElementById('timer').textContent = "00:00";
    setInterval(() => {
    timePassed = timePassed + 1;
    timeLeft = TIME_LIMIT - timePassed;
    if (timeLeft < 0) {
   
    timeLeft = 0;
    }
    var formattedTimeLeft = timeLeft(timeLeft);
    document.getElementById('timer').textContent = [formattedTimeLeft];
    }, 1000)
   }

function start() {
  if (hidden.style.display == "auto") {
  } else {
    hidden.style.display = "none";
  }
  quizHidden.style.display = "block";
  timer();
}



