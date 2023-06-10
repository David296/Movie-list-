let Movielist = [];                   

fetch('./data.json')
.then(function (response) {                                 
  return response.json();
})
.then(function (data) {

    
    Movielist = data.filter(movie => localStorage.getItem('favourites_id').includes(movie.Eid));
                               

    showFavourites(); 

});



function showFavourites(){        

    const maindiv = document.getElementById("maindiv");   
    maindiv.innerHTML = "";

    for (let i=0; i < Movielist.length; i++)  
    {
        let moviediv = document.createElement("div");                
        moviediv.innerHTML= `
        <div id="${Movielist[i].Eid}" class="lis3">
        <img src="pictures/${Movielist[i].picture}" onclick="getMovie(${Movielist[i].Eid})" class="favposter"> 
        <div class="favtext">
        <div class="header">${Movielist[i].id}</div>
        <div class="body">Director: ${Movielist[i].Director}</div>
        <div>Genre: ${Movielist[i].Genre} </div>
       </div>
       <div class="favdelbutton"><button class="favouritesbuton" onclick="deleteFavourite(${Movielist[i].Eid})" >Remove </button> </div>
        </div>`;
        maindiv.appendChild(moviediv);           
    
    }


}



function deleteFavourite(selectedmov)   
{
    Movielist = Movielist.filter(item => item.Eid !== selectedmov.id)  
    const newvar = Movielist.map(a => a.Eid);  
    localStorage.setItem("favourites_id", JSON.stringify(newvar));   
    showFavourites();      
           
}




