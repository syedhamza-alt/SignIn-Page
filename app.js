
const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#textPassword");
const userName=document.querySelector("#textUsername");
const clearText=document.querySelector("#clearText");


togglePassword.addEventListener("click", function () {
    
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
    
    this.classList.toggle("bi-eye");
});

clearText.addEventListener("click",function () {
   userName.value=""; 
});

