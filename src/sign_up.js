let singUp = document.querySelector(".btn--sign-up");
let signIn = document.querySelector(".btn--sign-in");

let signUpForm = document.querySelector(".form1");
let loginForm = document.querySelector(".sign-in__form");

singUp.addEventListener("click", signInHide);
signIn.addEventListener("click", singUpHide)


function signInHide(){
    loginForm.style.display = "none";
    signUpForm.style.display = "block";
    
}

function singUpHide(){
    loginForm.style.display = "flex";
    signUpForm.style.display = "none";
    
}





const myForm=document.querySelector(".sign-up__form");
const inputs=document.querySelectorAll('input');
const required=["email","password"];

myForm.addEventListener("submit",formValidation);

function formValidation(e) {
    e.preventDefault();
   
    let error=false;
    inputs.forEach(function(el) {
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
                 
                    let text=el.nextElementSibling;
                    text.innerHTML='';
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
                 
                    let text=el.nextElementSibling;
                    text.innerHTML='';
                }  
            }
            if(el.value.length===0 && required.includes(temp)){
                addError(el,"Required Field",temp);
                error= true; 
            }
            
        }
    });
    if (!error) {
    
        let succss= document.createElement('div');
        let section=document.querySelector(".sign-up__form");
        section.appendChild(succss);
        succss.textContent="Registered successfully!";
        succss.style.width="20%";
        
        succss.style.color="#157ce2";
        succss.style.fontSize = "large";
        succss.style.textAlign ="center";
        succss.style.padding = "5% "
        setTimeout(()=> {
            myForm.submit()
        },3000)

    
           
        
    }
}

function addError(el ,message,fieldName) {
    let errorText=el.nextElementSibling;
    errorText.innerHTML=fieldName + " " + message;
    errorText.style.color="red";
    el.focus();
}



