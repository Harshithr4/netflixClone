let first_p = document.getElementById("firstpage")
let btn1=document.getElementById("btn1")
let content1=document.getElementById("content1")
let btn2=document.getElementById("btn2")
let content2=document.getElementById("content2")
let btn3=document.getElementById("btn3")
let content3=document.getElementById("content3")
let btn4=document.getElementById("btn4")
let content4=document.getElementById("content4")
//second page
let second_p = document.getElementById("second_page")

function process(btn,con){
    btn.onclick = () => con.classList.toggle("show")
}
process(btn1,content1)
process(btn2,content2)
process(btn3,content3)
process(btn4,content4)

function shownext(){
    first_p.classList.remove("show")
    second_p.style.display="block"
}
