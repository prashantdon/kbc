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
const prize1 = document.querySelector(".prize-01")
const prize2 = document.querySelector(".prize-02")
const prize3 = document.querySelector(".prize-03")
const prize4 = document.querySelector(".prize-04")
const prize5 = document.querySelector(".prize-05")
const prize6 = document.querySelector(".prize-06")
const prize7 = document.querySelector(".prize-07")
const prize8 = document.querySelector(".prize-08")
const prize9 = document.querySelector(".prize-09")
const prize10 = document.querySelector(".prize-10")
const prize11 = document.querySelector(".prize-11")
const prize12 = document.querySelector(".prize-12")
const prize13 = document.querySelector(".prize-13")
const prize14 = document.querySelector(".prize-14")
const prize15 = document.querySelector(".prize-15")
const prizeIncrease = document.querySelectorAll(".prize-increase")
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
{

    prize1: 1000,
    prize2: 2000,
    prize3: 5000,
    prize4: 10000,
    prize5: 20000,
    prize6: 40000,
    prize7: 80000,
    prize8: 160000,
    prize9: 320000,
    prize10: 625000,
    prize11: 1250000,
    prize12: 2500000,
    prize13: 5000000,
    prize14: 10000000,
    prize14: 50000000
}
]


let increment = 0;

function getCurrentQuestion() {
    function updateQue() {
        question.innerText = queSet1[increment].prompt
        option1.innerText = queSet1[increment].options[0].text
        option2.innerText = queSet1[increment].options[1].text
        option3.innerText = queSet1[increment].options[2].text
        option4.innerText = queSet1[increment].options[3].text
    }
   
    if(increment == 0 && correctAnswer){
       moneyWon.innerText = prize[0].prize1
        prize1.style.backgroundColor = "green"
    } else if(increment == 1 && correctAnswer){
        moneyWon.innerText = prize[0].prize2
        prize2.style.backgroundColor = "green"
        prize1.style.backgroundColor = "transparent"
    } else if(increment == 2 && correctAnswer){
          moneyWon.innerText = prize[0].prize3
          prize3.style.backgroundColor = "green";
          prize1.style.backgroundColor = "transparent"
          prize2.style.backgroundColor = "transparent"
    }
    else if(increment == 3 && correctAnswer){
        moneyWon.innerText = prize[0].prize4
        prize4.style.backgroundColor = "green";
        prize3.style.backgroundColor = "transparent";
        prize1.style.backgroundColor = "transparent"
        prize2.style.backgroundColor = "transparent"
  }
  else if(increment == 4 && correctAnswer){
    moneyWon.innerText = prize[0].prize5
    prize5.style.backgroundColor = "green";
    prize3.style.backgroundColor = "transparent";
    prize1.style.backgroundColor = "transparent"
    prize2.style.backgroundColor = "transparent"
    prize4.style.backgroundColor = "transparent"
}
else if(increment == 6 && correctAnswer){
    moneyWon.innerText = prize[0].prize6
    prize6.style.backgroundColor = "green";
    prize3.style.backgroundColor = "transparent";
    prize1.style.backgroundColor = "transparent"
    prize2.style.backgroundColor = "transparent"
    prize4.style.backgroundColor = "transparent"
    prize5.style.backgroundColor = "transparent"
}
else{

}
increment++
    return updateQue()

};

getCurrentQuestion()

// function increasePrizeMoney(){
//     let increase = 0;
//     prizeIncrease.forEach((ele)=>{
//         increase = ele.id
//         Number(increase)
//     })
//     return increase
// }
// let increase = increasePrizeMoney()


function correctAnswer(e) {
    let answer;
    answers.forEach((curEle) => {
        if (curEle = e.target) {
            answer = curEle.id
        }
        return answer;
    })
   
    if (queSet1[increment].correctOption == answer) {
        showCorrect.style.display = "block"
        prize1.style.color = "white"
    } else {
        showWrong.style.display = "block"
        moneyWon.innerText = prize[0].prize1
        prize1.style.color = "white"
        prize1.style.backgroundColor = "green"
    }
}


start.addEventListener("click", getCurrentQuestion)
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
    moneyWon.innerText = prize[0].prize1
    showWrong.style.display = "none"
    showCorrect.style.display = "none"
    prize1.style.backgroundColor = "green"
    
})


nextQuestion.addEventListener("click", () => {
    getCurrentQuestion()
    showCorrect.style.display = "none"
    increase++

})

fiftyFifty.addEventListener("click",()=>{
    lifeLinePermission.style.display = "block"
})
flip.addEventListener("click",()=>{
    lifeLinePermission.style.display = "block"
})
audiencePoll.addEventListener("click",()=>{
    lifeLinePermission.style.display = "block"
})
yes.addEventListener("click",()=>{
    lifeLinePermission.style.display = "none"
    chooseLifeline.style.display = "block"
})
no.addEventListener("click",()=>{
    lifeLinePermission.style.display = "none"
})
lifeFifty.addEventListener("click",()=>{
    if (queSet1[increment].correctOption == answer){
        
    }
})