
// js for humburger
let menu = document.querySelector(".header__navbar");
let btn_close = document.querySelector(".btn--close");
let btn_bar = document.querySelector(".btn--bar");
let footer_logo = document.querySelector(".footer_logo");

btn_bar.addEventListener("click", function(){
menu.classList.add("display")
});

btn_close.addEventListener("click", function(){
    menu.classList.remove("display")
    });

 

// js for search

    let searchForm = document.getElementById('search-input');
    let searchResultList = document.querySelectorAll('.property');
    let result = document.querySelector('.properties');
    let searchValue = result.getElementsByTagName("h3");
    let catagories = document.querySelector(".catagories")
    let section1 = document.querySelector(".section1")
    let thumb = document.querySelector(".thumb-img")
    let header_thumb = document.querySelector(".search-result")
    no_result = document.querySelector(".search-result1")

    searchForm.addEventListener("keyup", function(){
        for(var i=0; i< searchValue.length; i++){
            
            console.log(searchForm.value);
            thumb.style.display = "none";
           catagories.style.display = "none";
           section1.style.display = "none";
            let value = searchResultList[i].getElementsByTagName('h3')[0];
            
               let filterValue = value.textContent || value.innerHTML;

               if(filterValue.toUpperCase().indexOf(searchForm.value.toUpperCase()) > -1){
                searchResultList[i].style.display = "";
                header_thumb.style.marginTop = "50rem"
                header_thumb.style.display = "flex";
                header_thumb.appendChild(searchResultList[i]);
                return ;
               }
               
               
        }
        {
            no_result.style.display = "block";
            div = document.createElement("div");
            div.textContent = "No result found";
            no_result.append(div);
           
            
           }
    })
    
// js for slider

const slides = document.querySelectorAll(".property")

let slideIndex = Math.floor(slides.length/4);

function plusSlides(step) {
    console.log(slideIndex)
    if(step < 0) {

    slideIndex -= 1;
    if (slideIndex < 0){
        slideIndex += 1;
        return ;
    }
    
    for(let i = slideIndex; i < slideIndex + 4; i++) {
        slides[i].style.display = "block"; 
    }

    if(slideIndex > 0){
        for(let i = 0; i < slideIndex; i++) {
            slides[i].style.display = "none";   
        } 
    }

    for(let i = slideIndex + 4; i < slides.length; i++) {
        slides[i].style.display = "none";    
    }


    } else{

        slideIndex += 1
        if (slideIndex + 4 >= slides.length){
            slideIndex -= 1;
            return ;
        }

        for(let i = slideIndex; i < slideIndex + 4; i++) {
            slides[i].style.display = "block"; 
        }
    
        if(slideIndex + 4 < slides.length -1){
            for(let i = slideIndex + 4; i < slides.length; i++) {
                slides[i].style.display = "none";   
            } 
        }
    
        for(let i = 0; i < slideIndex; i++) {
            slides[i].style.display = "none";    
        }
    

    }
    
}



