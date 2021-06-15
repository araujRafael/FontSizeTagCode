
let AllTags = document.querySelectorAll("code")
let toogle = document.querySelector("#customRange3")
var i = 20


document.addEventListener("keyup", event => {

    if(event.key == "ArrowUp" && event.altKey==true){
        var plus = i+=0.5
        AllTags.forEach( e =>{
            e.style.fontSize = `${plus}px`
        })
    }

    if(event.key == "ArrowDown" && event.altKey==true){
        var minus = i-=1
        AllTags.forEach( e =>{
            e.style.fontSize = `${minus}px`
        })
    }

    
})//
