data=[
    {
      id: 1,
      q: "What is the command to see the kubernetes workload?",
      ans: "kubectl get pods",
    },
    {
      id: 2,
      q: "What is the command to kubernetes virtual machines",
      ans: "kubectl get nodes",
    },
  ];

score=0
currentQuestion = 0
dataLenght=data.length

loadQuiz()
function loadQuiz(){
    document.getElementById('userAnswer').value=""
    document.getElementById("question").innerText = data[currentQuestion].q
}


const button = document.getElementById('submit')

button.addEventListener('click', ()=>{
    userInput = document.getElementById('userAnswer')

    if(userInput.value == data[currentQuestion].ans){
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

    if(userInput.value == data[currentQuestion].ans){
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





