fetch('./data.json')
.then(function (response) {
  return response.json();
})                                                                             
.then(function (data) {
 showMovie(data);                 
});

function showMovie(data)
{
const maindiv= document.getElementById("MovieDiv");

const themovie= data.find(x => x.Eid === localStorage.getItem('film_id')); 
const newdiv = document.createElement("div");
newdiv.innerHTML=`
    <div id="${themovie.Eid}" class="lis2">
    <img src="pictures/${themovie.picture}" onclick="getMovie(${themovie.Eid})" class="poster2"> 
    <div class="movieinfo1">
    <div class="abmov1"><h6>Movie Title</h6>${themovie.id}</div>
        <div class="abmov1"><h6>Synopsis</h6>${themovie.synopsis}</div>
        <div class="abmov"><h6>Rating</h6>${themovie.rating}</div>
        <div class="abmov"><h6>Genre</h6>${themovie.genre}</div>
        <div class="abmov"><h6>Original Language</h6>${themovie.language}</div>
        <div class="abmov"><h6>Director</h6>${themovie.director}</div> 
        <div class="abmov"><h6>Producer</h6>${themovie.producer}</div>
        <div class="abmov"><h6>Writer</h6>${themovie.writer}</div>
        
        <div class="abmov2"><h6>Release Date (Theaters)</h6>${themovie.release_date}</div>
        <div class="abmov2"><h6>Release Date (Streaming)</h6>${themovie.release_date_streaming}</div>
        <div class="abmov2"><h6>Box Office (Gross USA)</h6>${themovie.box_office}</div>
        <div class="abmov2"><h6>Runtime</h6>${themovie.runtime}</div>
        <div class="abmov2" ><h6>Distributor</h6>${themovie.distibutor}</div>
        </div>
    </div> 
    `;
maindiv.appendChild(newdiv);                                     
}