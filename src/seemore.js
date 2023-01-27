let seeMore = document.querySelector(".btn--see-more");
let moreCont = document.querySelector(".more-container");


let see_more = false;
seeMore.addEventListener("click", function(e){
      e.preventDefault();
    
    if (see_more === false){
        moreCont.style.display = "flex";
        seeMore.innerHTML = "See less"
        // seeMore.style.display = "none";
        see_more = true;
        }
    else if (see_more === true){
        moreCont.style.display = "none";
        seeMore.innerHTML = "See more"
        see_more = false;
        }

    });