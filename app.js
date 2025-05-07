const questions = [
    {
        question: "Where is big bang present?",
        opt1: "Paris",
        opt2: "Australia",
        opt3: "London",
        opt4: "America",
        correct: "London"
    },
    {
        question: "Which one is the largest mammal?",
        opt1: "Elephant",
        opt2: "Blue Whale",
        opt3: "Dinosaur",
        opt4: "Giraffe",
        correct: "Blue Whale"
    },
    {
        question: "What is the national dish of Japan?",
        opt1: "Ramen",
        opt2: "Sushi",
        opt3: "Kaiseki",
        opt4: "Tempura",
        correct: "Kaiseki"
    },
    {
        question: "Which country’s cuisine is considered the spiciest in the world?",
        opt1: "Mexico",
        opt2: "India",
        opt3: "Thailand",
        opt4: "South Korea",
        correct: "Thailand"
    },
    {
        question: "Which city is famous for inventing the chocolate chip cookie?",
        opt1: "Brussels",
        opt2: "Zurich",
        opt3: "Boston",
        opt4: "Paris",
        correct: "Boston"
    },
    {
        question: "Where is the world's only 'traffic light tree'?",
        opt1: "Tokyo, Japan",
        opt2: "London, England",
        opt3: "Los Angeles, USA",
        opt4: "Dubai, UAE",
        correct: "London, England"
    },
    {
        question: "Which common snack food was invented by ACCIDENT when a chef got angry?",
        opt1: "Potato Chips",
        opt2: "Chocolate Chip Cookies",
        opt3: "Corn Flakes",
        opt4: "Popsicles",
        correct: "Potato Chips"
    },
    {
        question: "The famous cartoon 'Doraemon' is from which country?",
        opt1: "America",
        opt2: "Spain",
        opt3: "Japan",
        opt4: "India",
        correct: "Japan"
    },
    {
        question: "Which country offers the MOST international scholarships annually?",
        opt1: "United States",
        opt2: "Germany",
        opt3: "London",
        opt4: "China",
        correct: "Germany"
    },
    {
        question: "Which city is best known for these iconic architectural styles/landmarks?",
        opt1: "Paris, France",
        opt2: "Barcelona, Spain",
        opt3: "Vienna, Austria",
        opt4: "Prague, Czech Republic",
        correct: "Barcelona, Spain"
    }
]
let cont = document.getElementById("content")
let quizBox = document.getElementById('box');
let index = 0;
let btn = document.getElementById('btn');
let score = 0;

function quiz() {
    if (questions.length == index) {
        quizBox.innerHTML = `<h3>Quiz Completed <br/> You Scored: ${score} out of ${questions.length}</h3>`;
        btn.style.display = 'none';
    } else {
        btn.disabled = true;
        quizBox.innerHTML = `<div>
<h5>Question ${index + 1} of ${questions.length}</h5>
<h4>${questions[index].question}</h4>
<label>
<span>${questions[index].opt1} </span>
<input type="radio" value="${questions[index].opt1}" name = "options" />
</label>
<br />
<label>
<span>${questions[index].opt2} </span>
<input   type="radio"  value="${questions[index].opt2}" name = "options"/>
</label>
<br />
<label>
<span>${questions[index].opt3} </span>
<input   type="radio" value="${questions[index].opt3}" name = "options" />
</label>
<br />
<label>
<span>${questions[index].opt4} </span>
<input   type="radio" value="${questions[index].opt3}" name = "options" />
</label>
</div>`;
        let options = document.getElementsByName('options');
        for (var i = 0; i < options.length; i++) {
            options[i].addEventListener('click', function () {
                btn.disabled = false;
            });
        }
    }
}
quiz();

let options = document.getElementsByName('options');
btn.addEventListener('click', function () {
    for (var i = 0; i < options.length; i++) {
        if (options[i].checked) {
            let currentAns = options[i].value;
            let correctAns = questions[index].correct;
            console.log('user selected', currentAns);
            console.log('obj key', correctAns);
            if (currentAns == correctAns) {
                score++;
            }
        }
    }
    index++;
    quiz();
});