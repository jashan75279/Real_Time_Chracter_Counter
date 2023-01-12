const textareaEl =document.getElementById('textarea');

const totalCounterEl = document.getElementById("total-counter")

const remainingCounterEl = document.getElementById("remaining-counter");

const maxsize = textareaEl.getAttribute("maxLength")
// console.log(maxsize)

textareaEl.addEventListener("keyup",()=>{
    updateCounter()
})
updateCounter();
function updateCounter(){
       
        
  
    totalCounterEl.innerText = textareaEl.value.length
    remainingCounterEl.innerText=  textareaEl.getAttribute("maxLength") -textareaEl.value.length ;

    //for warning by my self
    if(totalCounterEl.innerText == maxsize){
    
       document.getElementById("warning").innerHTML =
        "<h3>You can't add more than 100 words at a time </h3>";
        
    }
    
}
