const  houseDetail = [
    { id: "1",
      name: "commercial site",
      img1 : "images/commercialsite.jpg",
      img2 : "images/interior1.jpg",
      img3: "images/interior2.jpg",
      video1 : "videos/modern.mp4",
      video2: "videos/apartment.mp4",
      basement : "2 basements",
      bedrooms: " 4 bedroom",
      bathroom : " 5 bathrooms"
    },
    { id: "2",
    name: "Black mansion",
    img1 : "images/Black-Mansion.jpg",
    img2 : "images/interior3.jpg",
    img3: "images/interior4.jpg",
    video1 : "videos/modern.mp4",
    video2: "videos/gibi.mp4",
    basement : "2 basements",
    bedrooms: " 4 bedroom",
    bathroom : " 5 bathrooms"
  },
  { id: "3",
  name: "Modern home",
  img1 : "images/modernnew.jpg",
  img2 : "images/new _interiorjpg",
  img3: "images/interior2.jpg",
  video1 : "videos/modern.mp4",
  video2: "videos/apartment.mp4",
  basement : "2 basements",
  bedrooms: " 4 bedroom",
  bathroom : " 5 bathrooms"
},
{ id: "4",
name: "guesthouse",
img1 : "images/main-guest-house.jpg",
img2 : "images/new _interiorjpg",
img3: "images/interior2.jpg",
video1 : "videos/modern.mp4",
video2: "videos/gibi.mp4",
basement : "2 basements",
bedrooms: " 4 bedroom",
bathroom : " 5 bathrooms"
},
{ id: "5",
name: "commercial building",
img1 : "images/commerceaddis.jpg",
img2 : "images/best_interior.jpg",
img3: "images/interior2.jpg",
video1 : "videos/modern.mp4",
video2: "videos/apartment.mp4",
basement : "2 basements",
bedrooms: " 4 bedroom",
bathroom : " 5 bathrooms"
},
{ id: "6",
name: "G + 8",
img1 : "images/pool.jpg",
img2 : "images/best_interior.jpg",
img3:"images/interior3.jpg",
video1 : "videos/modern.mp4",
video2: "videos/apartment.mp4",
basement : "2 basements",
bedrooms: " 4 bedroom",
bathroom : " 5 bathrooms"
},
{ id: "7",
name: "G + 8",
img1 : "images/newthumb.jpg",
img2 : "images/best_interior.jpg",
img3:"images/interior3.jpg",
video1 : "videos/modern.mp4",
video2: "videos/apartment.mp4",
basement : "2 basements",
bedrooms: " 4 bedroom",
bathroom : " 5 bathrooms"
}
  
]


   
function getID(){
    let para = new URLSearchParams(window.location.search);
    let pass = parseInt(para.get("id"));
    console.log(pass)
    let houseDeta=houseDetail[pass-1];
   
    const name=document.querySelector(".details-section__title")
  
    const img1=document.getElementById("img1");
    const img2=document.getElementById("img2");
    const img3=document.getElementById("img4");
    const video1=document.getElementById("video1");
   
    name.innerHTML=houseDeta.name;
    img1.src = houseDeta.img1;
    console.log(houseDeta.img1)
    img2.src = houseDeta.img2;
    img3.src = houseDeta.img3;
    video1.src = houseDeta.video1;
    

}


const myForm=document.querySelector('.contact-form');
const inputs=document.querySelectorAll('input');
const required=["name", "email","phone_number"];

myForm.addEventListener("submit",formValidation);

function formValidation(e) {
  
    e.preventDefault();
  
    let error=false;
    inputs.forEach(function(el) {
        let temp=el.getAttribute("id");
        if(temp!=null){
            if (temp==="name") {
                let exp= /[A-Za-z ]+$/;
                let result= exp.test(el.value);
                if (!result){
                    addError(el,"Name characters should be alphabets",temp);
                    error=true;
                }
                else {
                    let text=el.nextElementSibling;
                    text.innerHTML='';
                }
            }
            if (temp === "email") {
                let exp = /([A-Za-z0-9._-]+@[A-Za-z0-9._-]+\.[A-Za-z0-9]+)\w+/;
                let result = exp.test(el.value);
                if (!result) {
                addError(el, "Invalid email", temp);
                error = true;
                }
                else {
                    let text=el.nextElementSibling;
                    text.innerHTML='';
                }
            }
            if (temp==="phone_number") {
                let exp = /^[0-9]\d{9}$/;
                let result = exp.test(el.value);
                if (!result) {
                    addError(el, "Invalid phone number", temp);
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
        let section=document.querySelector(".right-details");
        section.appendChild(succss);
        succss.textContent="Your message has been sent successfully!";
        succss.style.width="50%";
        succss.style.height="10%";
        succss.style.marginTop = "3%";
        succss.style.backgroundColor="";
        succss.style.color="green";
        succss.style.fontSize = "large";
        succss.style.textAlign ="center";
        succss.style.padding = "5% 5%"
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


