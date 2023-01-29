const userEmail = document.getElementById("email");
const userPassword = document.getElementById("password");
const alertUser = document.getElementById("alert-user");
const logInBtn = document.getElementById("login")
const signUpBtn = document.getElementById("signup")
function checkUser (e){
    e.preventDefault();
  
    let options = {
        body: JSON.stringify({
            useremail: userEmail.ariaValueMax,
            userpassword: userPassword.ariaValueMax,
        }),
        headers:{
            "content-type": "application/json",
        },
        method : "POST",

    };
    fetch("https://kbc-ten.vercel.app//user/login", options)
    .then((resolve)=>{
        return resolve.json();
    })
    .then((data)=>{
        localStorage.setItem("loggedInUser",JSON.stringify(data))
        window.location.href = "./kbc.html";
    })
    .catch((error) =>{
        alert(error);
        setTimeout(() =>{
            alertUser.style.cssText = "transition:1s; display: none";

        },2000)
    })
}

logInBtn.addEventListener("click", checkUser)
signUpBtn.addEventListener("click",()=>{
    window.location.href = "./index.html"
})