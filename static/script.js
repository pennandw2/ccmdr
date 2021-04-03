let score=0
let currentQuestion = 0
let dataLenght
my_questions=[]
quizData=[]
dwane=["a cool guy"]
fetch('https://quiz-ocuzv6yfua-uc.a.run.app/v2')
    .then(response => response.json())
    .then(data => {
        data.forEach( q => {
            my_questions.push({ "question": q.question, "answer": q.answer  })
        }),
        dataLenght=my_questions.length,
        document.getElementById("question").innerText = my_questions[0].question
    })
    // .then(
    //     document.getElementById('userAnswer').value="",
    //     document.getElementById("question").innerText = my_questions[currentQuestion].question
    // )

async function getData(){
    const URL='https://quiz-ocuzv6yfua-uc.a.run.app/v2'
    // const res = await fetch(URL)
    //console.log(res)
    // const data = await res.json()
    // console.log(data)
    fetch(URL)
    .then(response => response.json())
    .then((questions) =>  
        questions.forEach( q => {
        quizData.push({ "question": q.question, "answer": q.answer  })
        }),
        console.log(quizData)
    );
}
// console.log(questions[0].question)
console.log(my_questions)
data = getData()


// loadQuiz()



// console.log(data)
function loadQuiz(){
    
    document.getElementById('userAnswer').value=""
    document.getElementById("question").innerText = my_questions[currentQuestion].question
}
// let dataLenght=my_questions.length

const button = document.getElementById('submit')

button.addEventListener('click', ()=>{
    userInput = document.getElementById('userAnswer')

    if(userInput.value == my_questions[currentQuestion].answer){
        console.log('correct')
        document.getElementById('userAnswer').innerText=""
        currentQuestion++
        score++
    }else{
        console.log('wrong')
        document.getElementById('userAnswer').innerText=""
        currentQuestion++
    }
        console.log(` if ${currentQuestion} is less than ${dataLenght} next question`)

    if( currentQuestion < dataLenght){
        loadQuiz()
    }else{
        // console.log(currentQuestion)
        // console.log(data.length)
       document.getElementById('q-body').innerHTML =`<h2 id="score">You got ${score} out of ${dataLenght} correct</h2>`
       document.querySelector('.button').innerHTML =`<button class="button" onclick="location.reload()">RESET</button>`
    }


})

document.addEventListener('keypress', (e)=>{
    if (e.key === 'Enter') {
    userInput = document.getElementById('userAnswer')

    if(userInput.value == my_questions[currentQuestion].answer){
        console.log('correct')
        document.getElementById('userAnswer').innerText=""
        currentQuestion++
        score++
    }else{
        console.log('wrong')
        document.getElementById('userAnswer').innerText=""
        currentQuestion++
    }
        console.log(` if ${currentQuestion} is less than ${dataLenght} next question`)

    if( currentQuestion < dataLenght){
        loadQuiz()
    }else{
        // console.log(currentQuestion)
        // console.log(data.length)
       document.getElementById('q-body').innerHTML =`<h2 id="score">You got ${score} out of ${dataLenght} correct</h2>`
       document.querySelector('.button').innerHTML =`<button class="button" onclick="location.reload()">RESET</button>`
    }
    }

})





