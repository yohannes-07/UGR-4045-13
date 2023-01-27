
const myForm=document.querySelector(".sign-up__form");
const inputs=document.querySelectorAll('input');
const required=["email1","password1"];

myForm.addEventListener("submit",formValidation);

function formValidation(e) {
    e.preventDefault();
   
    let error=false;
    inputs.forEach(function(el) {
        let temp=el.getAttribute("id");
        if(temp!=null){
            if (temp === "email1") {
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
            if (temp === "password1") {
                let exp = /[A-Za-z0-9]+$/;
                let result = exp.test(el.value);
                if (!result) {
                error = true;
                addError(el, "Only numbers and Letters", temp);
                
                }
                if (!(el.value.length > 3 && el.value.length < 9)) {
                    addError(el, "Needs to be between 3-8 characters", temp);
                    error = true;
                }
                else {
                  
                    return ;
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
        succss.style.width="100%";
        
        succss.style.color="#157ce2";
        succss.style.fontSize = "large";
        succss.style.textAlign ="center";
        succss.style.paddingLeft = "7% "
        setTimeout(()=> {
            myForm.submit()
        },3000)

    
           
        
    }
}

function addError(el ,message,fieldName) {
    let errorText= document.querySelector('.error-message');
    errorText.style.color="red";

    el.focus();
}



