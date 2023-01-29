const question = document.getElementById("question");
const option1 = document.getElementById("option1")
const option2 = document.getElementById("option2")
const option3 = document.getElementById("option3")
const option4 = document.getElementById("option4")
const submitBtn = document.getElementById("submit");


submitBtn.addEventListener("click", ()=>{
    fetch("https://kbc-ten.vercel.app/question/add",{
        method: "POST",
        body: JSON.stringify(
            {
                "prompt": "Which planet is known as the 'Red Planet'?",
                "options": [
                    { "text": option1.value, "correct": false },
                    { "text": option2.value, "correct": true },
                    { "text": option3.value, "correct": false },
                    { "text": option4.value, "correct": false }
                ],
                "correctOption": 2
            }

        )
    })
   
})

