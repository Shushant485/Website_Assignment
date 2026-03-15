function showMessage(){
alert("Welcome to the Modern Website 🚀");
}

const btn = document.getElementById("darkModeBtn");

btn.addEventListener("click",function(){

document.body.classList.toggle("dark");

});