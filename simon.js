let gameseq = []
let userseq = []
let btns = ["green","red","blue","yellow"]
let start = false
let level = 0
let highestScore = 0
let h2 = document.querySelector("h2")
let h3 = document.querySelector("h3")

document.addEventListener("keypress",function(){
    if(start == false){
        console.log("Game started")
        start = true
        levelup()
    }
})
function gameFlash(btn){
    btn.classList.add("flash")
    setTimeout(function(){
        btn.classList.remove("flash")
},250)
}
function userflash(btn){
    btn.classList.add("userflash")
    setTimeout(function(){
        btn.classList.remove("userflash")
},250)
}

function levelup(){
    userseq = []
    level = level + 1
    h2.innerText = `Level ${level}`
    let random = Math.floor(Math.random() * 4)
    let randomColor = btns[random]
    let randombtn = document.querySelector(`.${randomColor}`)
    // console.log(randomColor)
    // console.log(random)
    gameseq.push(randomColor)
    console.log(gameseq)
    gameFlash(randombtn)
}
function checkans(index){
    // console.log("curr level :",level)
    
    if(userseq[index] == gameseq[index]){
        if(userseq.length == gameseq.length){
            setTimeout(levelup,1000)
        }
    }
    else{
        if (level > highestScore) {
            highestScore = level
            h3.innerText = `Highest Score: ${highestScore}`
        }
        h2.innerHTML = `Game over! your score was <b>${level}</b> Press any key to start`
        document.querySelector("body").style.backgroundColor = "red"
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor= "white"
        },150)
        reset()
    }
}

function btnpress(){
    // console.log("btn was pressed")
    console.log(this)
    let btn = this
    userflash(btn)
    usercolor = btn.getAttribute("id")
    userseq.push(usercolor)
    checkans(userseq.length-1)
}
let allbtn = document.querySelectorAll(".btn")
for(btn of allbtn){
    btn.addEventListener("click",btnpress)
}
function reset(){
    start = false
    userseq = []
    gameseq = []
    level = 0
}