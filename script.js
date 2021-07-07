let btn=document.querySelectorAll(".btn")
let input=document.querySelector("input")
let btnEqual=document.querySelector(".equal")
let btnClear=document.querySelector(".clear")


btn.forEach(button =>{
    
    button.addEventListener("click",function(arg){
            a=button.value
            input.value=input.value + a

        
    
    })
    // console.log(a,oper,b)
})
btnEqual.addEventListener("click",function(){
    let answer=eval(input.value)
    input.value=answer
})
btnClear.addEventListener("click",function(){
    input.value=""
})