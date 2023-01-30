const userName = document.getElementById("user-name");
const userEmail = document.getElementById("email");

const userPassword = document.getElementById("password")
let userConfirmPassword = document.getElementById("confirm-password");


const errorMsgName = document.getElementById("error-msg_name");
const errorMsgEmail = document.getElementById("error-msg_email");
const errorMsgPassword = document.getElementById("error-msg_password");
const errorPasswordMatch = document.getElementById("password-match");


const submitBtn = document.getElementById("submit-btn");
const logInBtn = document.getElementById("login-btn");
const alertUser = document.getElementById("alert-user");


let users  = JSON.parse(localStorage.getItem("users"));

if(!users) users = [];


function createUser(e) {
    e.preventDefault()
    userFound = false
    let user = {
        username: userName.value,
        useremail : userEmail.value,
        userpassword : userPassword.value
    }
    if (userName.value == "") {
        errorMsgName.style.cssText = "transition: 1s; background-color: #FF1E1E ";
        errorMsgName.innerText = "Please enter your name"
        setTimeout(() => {
            errorMsgName.innerText = ""
        }, 2000)

    } else if(userEmail.value == ""){
        errorMsgEmail.style.cssText = "transition: 1s; background-color: #FF1E1E"
        errorMsgEmail.innerText = "Please enter your Email";
        setTimeout(() => {
            errorMsgEmail.innerText = ""
        }, 2000)
    } else if(userPassword.value == ""){
        errorMsgPassword.style.cssText = "transition: 1s; background-color: #FF1E1E"
        errorMsgPassword.innerText = "Please enter your Password"
        setTimeout(() => {
            errorMsgPassword.innerText = ""
        }, 2000)
    }else if(userPassword.value !== userConfirmPassword.value){
        errorPasswordMatch.style.cssText = "transition: 1s; background-color: #FF1E1E"
        errorPasswordMatch.innerText = "Password do not match" 
        setTimeout(()=>{
            errorPasswordMatch.innerText = ""
        },2000)
   }

    else{
        
        let options = {
            body: JSON.stringify({
                
                email: userEmail.value,
                password: userPassword.value,
                
            }),
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
        
        };
        
        fetch("https://kbc-ten.vercel.app//user/signup" ,options)
        .then((resolve) =>{
            return resolve.json()
            
        })
        .then((data) => {
            localStorage.setItem("loggedUser", JSON.stringify(data));
            window.location.href = "login.html";
           console.log(data)
        })
        .catch((error) => {
            alert(error);
            userFound = true;
            alertUser.style.cssText = "transition : 0.8s;";
            alertUser.innerText = "User Already Exist";
            setTimeout(()=>{
                alertUser.style.cssText = "transition : 0.8s;";
                alertUser.innerText = "Please Log in";
            },2000)
           resetUser()
           
        })

    }
}


submitBtn.addEventListener("click", createUser)
logInBtn.addEventListener("click", ()=>{
    window.location.href = "./login.html"
})
function resetUser(){
     userName.value = "";
     userEmail.value = "";
     userPassword.value = "";
     userConfirmPassword.value = "";
}

// let setUser = async  ()=>{

// }


// async function sendData (){
//     let url = "https://kbc-ten.vercel.app//user/signup";
//     let data = {
//         email: userEmail.value,
//         password: userPassword.value,
//     }

//     let response = await fetch (url , {
//         method: "POST",
//         headers: {
//             'Content-Type' : 'application/json',
//         },
//         body: JSON.stringify(data),
//     });
//     if(response.ok){
//         let ret = await response.json();
//         return JSON.parse(ret.data);
//     }else{
//         return `HTTP error: ${response.status}`
//     }
// }

// sendData().then(data =>{
//     console.log(data)
// })