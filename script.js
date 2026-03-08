let puzzles = {

easy:[
{q:"What has keys but can't open locks?",a:"piano",h:"A musical instrument"},
{q:"What has hands but cannot clap?",a:"clock",h:"It tells time"},
{q:"What has a neck but no head?",a:"bottle",h:"You drink from it"},
{q:"What goes up but never comes down?",a:"age",h:"You gain it every year"},
{q:"I’m tall when I’m young and short when I’m old.",a:"candle",h:"It melts"},
{q:"What has legs but doesn't walk?",a:"table",h:"Furniture"},
{q:"What has one eye but can't see?",a:"needle",h:"Used for sewing"},
{q:"What gets wetter the more it dries?",a:"towel",h:"Used after bath"},
{q:"What has teeth but can't bite?",a:"comb",h:"Used for hair"},
{q:"What can travel around the world while staying in a corner?",a:"stamp",h:"On envelopes"}
],

medium:[
{q:"The more you take, the more you leave behind.",a:"footsteps",h:"Walking"},
{q:"I speak without a mouth and hear without ears.",a:"echo",h:"Repeats sound"},
{q:"What can fill a room but takes no space?",a:"light",h:"Opposite of darkness"},
{q:"What has many rings but no fingers?",a:"tree",h:"Age rings"},
{q:"What runs but never walks?",a:"water",h:"Rivers"},
{q:"What begins with T, ends with T, and has T in it?",a:"teapot",h:"Tea"},
{q:"What has a heart that doesn’t beat?",a:"artichoke",h:"Vegetable"},
{q:"What building has the most stories?",a:"library",h:"Books"},
{q:"What has a thumb and four fingers but isn’t alive?",a:"glove",h:"Clothing"},
{q:"What gets bigger the more you take away?",a:"hole",h:"Digging"}
],

hard:[
{q:"What disappears when you say its name?",a:"silence",h:"Quiet"},
{q:"I shave every day, but my beard stays the same.",a:"barber",h:"Job"},
{q:"What has cities but no houses?",a:"map",h:"Geography"},
{q:"What can’t talk but will reply when spoken to?",a:"echo",h:"Sound reflection"},
{q:"What has a head, a tail, but no body?",a:"coin",h:"Money"},
{q:"The more you remove from me, the bigger I get.",a:"hole",h:"Digging"},
{q:"What has one head, one foot, and four legs?",a:"bed",h:"Furniture"},
{q:"What kind of band never plays music?",a:"rubber band",h:"Stretchy"},
{q:"What invention lets you look right through a wall?",a:"window",h:"Glass"},
{q:"What can’t be used until it’s broken?",a:"egg",h:"Cooking"}
]

}

let selected=[]
let current=0
let score=0
let wrongAnswers=[]

function startGame(level){

document.getElementById("menu").style.display="none"
document.getElementById("game").style.display="block"

selected = puzzles[level].sort(()=>0.5-Math.random()).slice(0,10)

showQuestion()

}

function showQuestion(){

document.getElementById("progress").innerText="Question "+(current+1)+" / 10"
document.getElementById("question").innerText=selected[current].q

document.getElementById("answer").value=""
document.getElementById("hint").innerText=""

}

function showHint(){
document.getElementById("hint").innerText="Hint: "+selected[current].h
}

function checkAnswer(){

let user=document.getElementById("answer").value.toLowerCase()

if(user===selected[current].a){
score+=10
}else{
wrongAnswers.push({q:selected[current].q,a:selected[current].a})
}

current++

if(current<10){
showQuestion()
}else{
showResult()
}

}

function showResult(){

document.getElementById("game").style.display="none"
document.getElementById("result").style.display="block"

document.getElementById("score").innerText="Your Score: "+score+" / 100"

let wrongHTML="<h3>Wrong Answers</h3>"

wrongAnswers.forEach(w=>{
wrongHTML+="<p>❌ "+w.q+"<br>Answer: "+w.a+"</p>"
})

document.getElementById("wrong").innerHTML=wrongHTML

}