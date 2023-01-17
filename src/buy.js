let seeMore = document.querySelector(".btn--see-more");
let more = document.querySelector(".more");
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
    


    const  houseDetail = [
        { id: "1",
          name: "Luxurious",
          img1 : "images/Luxury-Home-Sunshine-Construction.jpg",
          img2 : "images/interior1.jpg",
          img3: "images/interior2.jpg",
          video1 : "videos/modern.mp4",
          video2: "videos/apartment.mp4",
          basement : "2 basements",
          bedrooms: " 4 bedroom",
          bathroom : " 5 bathrooms"
        },
        { id: "2",
        name: "forest",
        img1 : "images/forest.jpg",
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
    }      
]
    
