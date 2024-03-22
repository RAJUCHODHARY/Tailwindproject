// navbar me theme pe click pe dark ya light mode change
let modebtn = document.querySelector('#buttons');
let body = document.querySelector('body');
let currmode = "light";

modebtn.addEventListener("click", () => {
    if (currmode === "light") {
        currmode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    } else {
        currmode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
})

//navbar pe time print ka progeram
let times = document.getElementById('times');
function timess() {
    let date = new Date();
    let fulltime = date.toLocaleTimeString();
    times.innerHTML = fulltime;
}
setInterval(timess, 1000)






//navbar ka beckgraudcolor per secinde chenge program

const getColor = () => {
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomCode = "#" + randomNumber.toString(16);
     document.querySelector(".navbar").style.backgroundColor = randomCode;

}

setInterval(getColor, 1000);


//js ke trou navbar ko position sticky  setkrne ka program

window.addEventListener('scroll',function(){
    let navbar=this.document.querySelector('.navbar');
if(this.window.pageYOffset>20){
    navbar.classList.add('sticky1');
}else{
    navbar.classList.remove('sticky1');
}
})