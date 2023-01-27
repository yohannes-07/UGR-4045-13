
const myForm1=document.querySelector('.sign-in__form');
const inputs1=document.querySelectorAll('input');
const required1=["email","password"];

myForm1.addEventListener("submit",formValidation);

function formValidation(e) {
    e.preventDefault();
    //let data={};
    let error=false;
    inputs1.forEach(function(el) {
        let temp=el.getAttribute("id");
        if(temp!=null){
            if (temp === "email") {
                let exp = /([A-Za-z0-9._-]+@[A-Za-z0-9._-]+\.[A-Za-z0-9]+)\w+/;
                let result = exp.test(el.value);
                if (!result) {
                addError(el, "must be valid", temp);
                error = true;
                }
                else {
                 
                    return ;
                }
            }
            if (temp === "password") {
                let exp = /[A-Za-z0-9]+$/;
                let result = exp.test(el.value);
                if (!result) {
                addError(el, "Only numbers and Letters", temp);
                error = true;
                }
                if (!(el.value.length > 3 && el.value.length < 9)) {
                    addError(el, "Needs to be between 3-8 characters", temp);
                    error = true;
                }
                else {
                 
                   return ;
                }  
            }
            if(el.value.length===0 && required1.includes(temp)){
                addError(el,"Required Field",temp);
                error= true; 
            }
            
        }
    });
    if (!error) {
     alert("You logged in succefully");
    }
    
}

function addError(el ,message,fieldName) {
    let div=document.querySelector('.sign-in__form');
    let errorText = document.createElement("p")
    errorText.style.textContent = "Invalid Password"
    errorText.style.color="red";
    errorText.style.marginLeft="10rem";
    div.appendChild(errorText);
    el.focus();
}


const facebook = document.querySelector(".btn-facebook");
const google = document.querySelector(".btn-google");
facebook.addEventListener("click", function(){
    alert("Not conected with facebook database")
})

google.addEventListener("click", function(){
    alert("Not conected with google database")
})

