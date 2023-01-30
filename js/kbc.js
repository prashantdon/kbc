import { queSet1 } from "./object.js";


const question = document.getElementById("question");
const option1 = document.querySelector(".option1")
const option2 = document.querySelector(".option2")
const option3 = document.querySelector(".option3")
const option4 = document.querySelector(".option4")
const start = document.getElementById("start");
const quit = document.getElementById("quit");
const timer = document.querySelector(".timer")
const showCorrect = document.querySelector(".show-correct");
const showWrong = document.querySelector(".show-wrong");

const prizeWonText = document.querySelector(".prize-won")
const quitGame = document.querySelector(".quit-game")
const exit = document.querySelector(".exit");
const startAgain = document.querySelector(".start-again");
const nextQuestion = document.querySelector(".next");
const answers = document.querySelectorAll(".answer")
const fiftyFifty = document.querySelector(".fifty-fifty");
const flip = document.querySelector(".flip");
const audiencePoll = document.querySelector(".audience-poll");
const lifeLinePermission = document.querySelector(".lifeline-permission");
const yes = document.querySelector("#yes");
const no = document.querySelector("#no");
const lifelineQue = document.querySelector(".lifeline-que")
const lifeFifty = document.querySelector(".life-fifty")
const lifeFlip = document.querySelector(".life-flip")
const lifeAudiencePoll = document.querySelector(".life-audience-poll")
const chooseLifeline = document.querySelector(".lifeline-choose")
const moneyWon = document.querySelector(".money")
const prizeMoney1 = document.querySelector(".prize-01")
const prizeMoney2 = document.querySelector(".prize-02")
const prizeMoney3 = document.querySelector(".prize-03")
const prizeMoney4 = document.querySelector(".prize-04")
const prizeMoney5 = document.querySelector(".prize-05")
const prizeMoney6 = document.querySelector(".prize-06")
const prizeMoney7 = document.querySelector(".prize-07")
const prizeMoney8 = document.querySelector(".prize-08")
const prizeMoney9 = document.querySelector(".prize-09")
const prizeMoney10 = document.querySelector(".prize-10")
const prizeMoney11 = document.querySelector(".prize-11")
const prizeMoeny12 = document.querySelector(".prize-12")
const prizeMOney13 = document.querySelector(".prize-13")
const prizeMoney14 = document.querySelector(".prize-14")
const prizeMoeny15 = document.querySelector(".prize-15")
const prizeIncrease = document.querySelectorAll(".prize-increase")
const prizeContainer = document.querySelector(".prize-increase")
const yourName = document.querySelector(".your-name");
const showYourName = document.querySelector(".show-name");
const startQuiz = document.querySelector(".start-quiz")
const exitQuiz = document.querySelector(".exit-quiz")
const play = document.querySelector(".play")
const optionParent1 = document.querySelector(".option-container_child1");
const optionParent2 = document.querySelector(".option-container_child2");
const congratsMsg = document.querySelector(".won-prize");
const optionContainer1 = document.querySelector(".option-container_child1")
const optionContainer2 = document.querySelector(".option-container_child2")
const fiftyBtn = document.querySelector(".fiftyBtn")
const winnerName = document.getElementById("winnerName");
const flipBtn= document.querySelector(".flipBtn")
const moneyContainer = document.querySelector(".moneyContainer");


let option1id = optionContainer1.children[0].id
let option2id = optionContainer1.children[1].id
let option3id = optionContainer2.children[0].id
let option4id = optionContainer2.children[1].id


// let count = 6;
// function counter (){
//  let t = setInterval(()=>{
//             count--
//             timer.innerText = count
//         },1000)

//    if(count < 1){
//     clearInterval(t)
//     timer.innerText = count
//     console.log(count)
//    }

// }
//console.log(fetch("https://kbc-ten.vercel.app//question/all"))

// start.addEventListener("click", counter)
let prize = [


    { money: 1000, id: 1 },
    { money: 2000, id: 2 },
    { money: 5000, id: 3 },
    { money: 10000, id: 4 },
    { money: 20000, id: 5 },
    { money: 40000, id: 6 },
    { money: 80000, id: 7 },
    { money: 160000, id: 8 },
    { money: 320000, id: 9 },
    { money: 625000, id: 10 },
    { money: 1250000, id: 11 },
    { money: 2500000, id: 12 },
    { money: 5000000, id: 13 },
    { money: 10000000, id: 14 },
    { money: 50000000, id: 15 },

]



let increase = 0
let getCur;
function getCurrentQuestion() {
    let randomQue = Math.floor(Math.random() * queSet1.length)
    question.innerText = queSet1[randomQue].prompt
    option1.innerText = queSet1[randomQue].options[0].text
    option2.innerText = queSet1[randomQue].options[1].text
    option3.innerText = queSet1[randomQue].options[2].text
    option4.innerText = queSet1[randomQue].options[3].text
    return getCur = queSet1[randomQue]

};
getCurrentQuestion(queSet1[getCur])
let changeBackground = 14
function correctAnswer(e) {
    let answer;
    answers.forEach((curEle) => {
        if (curEle = e.target) {
            answer = curEle.id
        }
        return answer;
    })
    if (getCur.correctOption == answer) {
        if (prize[increase].id < 15) {
            showCorrect.style.display = "block"
            moneyWon.innerText = prize[increase].money
            increase++
            moneyContainer.children[changeBackground].style.backgroundColor = "green"
            changeBackground--
            
        }
        else if (prize[increase].id == 15) {
            congratsMsg.style.display = "block"
            winnerName.innerText = yourName.value
        }


    } else {
        showWrong.style.display = "block"
        prizeMoney1.style.color = "white"
        prizeMoney1.style.backgroundColor = "green"
        moneyContainer.children[changeBackground].style.backgroundColor = "red"
    }

}

function fiftyOption() {   
    if (getCur.correctOption == option1id){
        document.getElementById("3").disabled = true;
        document.getElementById("4").disabled = true;
        document.getElementById("3").style.backgroundColor = "red";
        document.getElementById("4").style.backgroundColor = "red";
        chooseLifeline.style.display = "none"
        fiftyBtn.disabled = true;
        
    }else if(getCur.correctOption == option2id){
        document.getElementById("1").disabled = true;
        document.getElementById("2").disabled = true;
        chooseLifeline.style.display = "none"
        document.getElementById("1").style.backgroundColor = "red";
        document.getElementById("2").style.backgroundColor = "red";
        fiftyBtn.disabled = true;
    }else if(getCur.correctOption == option3id) { 
        document.getElementById("1").disabled = true;
        document.getElementById("2").disabled = true;
        chooseLifeline.style.display = "none"
        document.getElementById("1").style.backgroundColor = "red";
        document.getElementById("2").style.backgroundColor = "red";
        fiftyBtn.disabled = true;
    }else if(getCur.correctOption == option4id) { 
        document.getElementById("1").disabled = true;
        document.getElementById("2").disabled = true;
        chooseLifeline.style.display = "none"
        document.getElementById("1").style.backgroundColor = "red";
        document.getElementById("2").style.backgroundColor = "red";
        fiftyBtn.disabled = true;
    }

}

start.addEventListener("click", () => {
    window.location.href = "./index.html"
})
option2.addEventListener("click", correctAnswer)
option3.addEventListener("click", correctAnswer)
option1.addEventListener("click", correctAnswer)
option4.addEventListener("click", correctAnswer)


quitGame.addEventListener("click", () => {
    window.location.href = "./login.html"
})
exit.addEventListener("click", () => {
    window.location.href = "./login.html"
})

startAgain.addEventListener("click", () => {
    getCurrentQuestion()
    showWrong.style.display = "none"
    window.location.href = "./index.html"
    timerStart()
})


nextQuestion.addEventListener("click", () => {
    getCurrentQuestion()
    showCorrect.style.display = "none"
    document.getElementById("1").style.backgroundColor = "transparent";
    document.getElementById("2").style.backgroundColor = "transparent";
    document.getElementById("3").style.backgroundColor = "transparent";
    document.getElementById("4").style.backgroundColor = "transparent";
    document.getElementById("1").disabled = false;
    document.getElementById("2").disabled = false;
    document.getElementById("3").disabled = false;
    document.getElementById("4").disabled = false;
    document.getElementById("1").style.cssText = "color:white;";
    document.getElementById("2").style.cssText = "color:white;";
    document.getElementById("3").style.cssText = "color:white;";
    document.getElementById("4").style.cssText = "color:white;";
    
})

fiftyBtn.addEventListener("click", () => {
    lifeLinePermission.style.display = "block"
})
flip.addEventListener("click", () => {
    lifeLinePermission.style.display = "block"
})
audiencePoll.addEventListener("click", () => {
    lifeLinePermission.style.display = "block"
})
yes.addEventListener("click", () => {
    lifeLinePermission.style.display = "none"
    chooseLifeline.style.display = "block"
})
no.addEventListener("click", () => {
    lifeLinePermission.style.display = "none"
})
lifeFifty.addEventListener("click", fiftyOption)
startQuiz.addEventListener("click", () => {
    if (!yourName.value == " ") {
        showYourName.innerText = yourName.value;
        showYourName.style.backgroundColor = "#002069"
        play.style.display = "none"
        getCurrentQuestion()
        
    }
    else {

        play.style.display = "block"
    }
})
exitQuiz.addEventListener("click", () => {
    window.location.href = "./login.html"
})
lifeFlip.addEventListener("click",()=>{
    chooseLifeline.style.display = "none"
    getCurrentQuestion()
    flipBtn.disabled = true;
    
})
let count = 0;
function timerStart(){
    intervalId = setInterval(()=>{
        timer.innerText = count
       count++
    },1000)
}
function timerStop(){
    if(count==60){
        clearInterval(intervalId)
    }
}