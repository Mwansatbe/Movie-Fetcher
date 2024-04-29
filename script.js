// API definitions from THEMOVIEDB

const APILINK = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=7c19e1096c02669ee30199af884d2df6&page=1';
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=7c19e1096c02669ee30199af884d2df6&query=";



// target elements in html
const section =document.querySelector(".body");

const form =document.querySelector("#form");

const search = document.querySelector("#query");


// search  movies

function returnMovies(url){
    fetch(url)
    .then(res=>res.json())
    .then(function(data){
        console.log(data.results);
        data.results.forEach(element=>{
            const div_card=document.createElement("div");
            div_card.setAttribute("class", "card")
            const div_card_container=document.createElement("div");
            div_card_container.setAttribute("class", "card-container")
            const div_row_Comtainer=document.createElement("div");
            div_row_Comtainer.setAttribute("class", "container-row");
            const image=document.createElement("img");
            image.setAttribute("class", "thumbnail");
            image.setAttribute("id", "image")
            const title=document.createElement("h3");
            const span=document.createElement("span");


            title.innerHTML=`${element.title}`;
            image.src=IMG_PATH+element.poster_path;

            span.appendChild(image);
            div_card.appendChild(span);
            div_card.appendChild(title);
            div_card_container.appendChild(div_card);
            div_row_Comtainer.appendChild(div_card_container)
            section.appendChild(div_row_Comtainer)

             
        });
 
    });
}




form.addEventListener("submit", (e)=>{
    e.preventDefault();
    section.innerHTML="";
    

    const searchItem = search.value;

    if(searchItem){
        returnMovies(SEARCHAPI+searchItem);
        search.value="";
    }

})


// function returnMovies(url) {
//     fetch(url)
//         .then(res => res.json())
//         .then(function(data) {
//             console.log(data.results);
//             data.results.forEach(element => {
//                 const div = document.createElement("div");
//                 // Further processing for each movie element can be done here
//             });
//         });
// }
