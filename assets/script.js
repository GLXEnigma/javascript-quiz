const questionNumberSpan=document.querySelector("question-num-value")
const question=document.querySelector(".question");
const op1=document.querySelector("option1");
const op2=document.querySelector("option2");
const op3=document.querySelector("option3");
const op4=document.querySelector("option4");

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

set questions and options and question number