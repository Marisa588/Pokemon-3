
let pokemonId = 'https://pokeapi.co/api/v2/pokemon/';
let getPokemon = 'https://pokeapi.co/api/v2/pokemon/?limit=151';
let section = document.querySelector("section")

const apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=151';

let button = document.getElementById("getPokemon").addEventListener("submit", pokemonName);

const searchTerm = document.getElementById("pokemonName")
const searchButton = document.getElementById("getPokemon")
searchButton.addEventListener("click", fetchResult)

let parentDiv = document.getElementById("pokeStats")




function fetchResult(e) { 
   e.preventDefault(); 
   //url=baseURL + searchTerm.value;

    fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm.value.toLowerCase()}`,{
        method: 'GET',
        headers: {
            "Content-Type":"application/json"
        }
    })
        .then(function(result) {
            console.log(result)
            return result.json();
        }).then(function(json) {
            console.log(json)
            displayResults(json);
        }) .catch(err => console.log(err));   
}        
        function displayImage(json) {
            // console.log(json);
            while (section.firstChild) {
            section.removeChild(section.firstChild);
            }
        
            let img = document.createElement('img');
            img.src = json.sprites;
            img.alt = select.value;
            img.width = '300';
        
            section.style.background = '#606060';
            section.appendChild(img);
        }
        function displayResults(json) {
            let name = json.name;
            let id = json.id;
            let height = json.height;
            let weight = json.weight;

            let nameElement = document.createElement("p");
            nameElement.innerHTML=`Name: ${name}`;
            parentDiv.appendChild(nameElement)

            let idElement = document.createElement("p");
            idElement.innerHTML=`Id: # ${id}`;
            parentDiv.appendChild(idElement)

            let heightElement = document.createElement("p");
            heightElement.innerHTML=`Height: ${height} m`;
            parentDiv.appendChild(heightElement)
           
            let weightElement = document.createElement("p");
            weightElement.innerHTML=`Weight: ${weight} kgs`
            parentDiv.appendChild(weightElement)
          
         
        }  
        
        
        
