let string =""; 
let buttons= document.querySelectorAll(".btn")
Array.from(buttons).forEach((button)=>{
    button.addEventListener("click",(e)=>{
        if(e.target.innerHTML=="X"){
           string+="*" 
           document.querySelector(".area").innerHTML=string;
        }
        else if(e.target.innerHTML=="="){
            string=eval(string).toFixed(5); 
            document.querySelector(".area").innerHTML=string; 
        }
        else if(e.target.innerHTML=="AC"){
            string="" 
            document.querySelector(".area").innerHTML=string; 
        }
        else{
            console.log(e.target)
            string=string+e.target.innerHTML; 
            document.querySelector(".area").innerHTML=string;
           }
    })
})
    
