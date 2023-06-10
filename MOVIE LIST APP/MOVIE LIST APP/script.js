document.addEventListener('input', filterList);  


// SEARCH
function filterList()
{
    const searchInput = document.querySelector('#searchinput');      
    const filter = searchInput.value.toLowerCase();                                    
    const listItems = document.querySelectorAll('.lis');        


    listItems.forEach((item)  =>                            
    {                                        
        let text = item.innerText;                           

        if(text.toLowerCase().includes(filter.toLowerCase()))   
        {
            item.style.display = '';                                           
        }

        else {
            item.style.display = 'none';                                 
             }
             
    });}                         



//DISPLAY MOVIES
fetch('./data.json')
.then(function (response) {
  return response.json();
})
.then(function (data) {
  showMovies(data);                 
});


function showMovies(data)
{

const mainContainer = document.getElementById("MOVIESDIV");    

for (let i=0; i< data.length; i++)
{
 
    let moviediv = document.createElement("div");
    moviediv.className = "lis";                
    moviediv.innerHTML= `
    <div id="${data[i].Eid}">
    <a href="aboutmovie.html"><img src="pictures/${data[i].picture}" onclick="getMovie(${data[i].Eid})" class="poster"></a> 
    <div class="header">${data[i].id}</div>
    <div class="body">Director: ${data[i].Director}</div>
    <div>Genre: ${data[i].Genre}  <button class="favouritesbuton" onclick="addFavourite(${data[i].Eid})">Favourite </button></div>
    <div class="story"> <p>${data[i].story}</p></div>
    </div>
 `;
     mainContainer.appendChild(moviediv);    
}
}
   

  
function getMovie(shownmovie)
{
    localStorage.setItem("film_id", shownmovie.id);                     
}                                            






function addFavourite(favmovie)                          
{ 
    let prevState = JSON.parse(localStorage.getItem('favourites_id')) === null ? [] : JSON.parse(localStorage.getItem('favourites_id')); 
    let newState = [...prevState, favmovie.id];   
   const myJSON = JSON.stringify(newState);   
  localStorage.setItem("favourites_id",myJSON);  
}