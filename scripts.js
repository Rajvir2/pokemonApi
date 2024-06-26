const searchInput = document.getElementById("search-input");
const imageContainer = document.getElementById("image-container");
const pokemonName = document.getElementById("pokemon-name");
const pokemonId = document.getElementById("pokemon-id");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const types = document.getElementById("types");
const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const specialAttack = document.getElementById("special-attack");
const specialDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");


const getPokemon = async ()=>{
const searchNameOrId = searchInput.value.toLowerCase();
    try{
const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchNameOrId}`);

const data = await response.json();
types.innerHTML = data.types.map(obj => `<span class="type ${obj.type.name}">${obj.type.name}</span>`).join("");

imageContainer.innerHTML = `<img id="sprite" src="${data.sprites.front_default}" alt="${data.name} front default sprite">`;

pokemonName.textContent = `${data.name.toUpperCase()}`;
pokemonId.textContent = `#${data.id}`;
weight.textContent = `${data.weight}`;
height.textContent = `${data.height}`;

hp.textContent = data.stats[0].base_stat;
attack.textContent = data.stats[1].base_stat;
defense.textContent = data.stats[2].base_stat;
specialAttack.textContent = data.stats[3].base_stat;
specialDefense.textContent = data.stats[4].base_stat;
speed.textContent = data.stats[5].base_stat;
searchInput.value = "";
}
    catch (err) {
    resetDisplay();
    alert("Pokémon not found");
    console.log(`Pokémon not found: ${err}`);
  }
}; 

const resetDisplay = () =>{
    const sprite = document.getElementById("sprite");
    if(sprite)  sprite.remove();
    pokemonName.textContent = "";
pokemonId.textContent = "";
weight.textContent = "";
height.textContent = "";
types.textContent = "";
hp.textContent = "";
attack.textContent = "";
defense.textContent = "";
specialAttack.textContent = "";
specialDefense.textContent = "";
speed.textContent = "";
};

  

const searchBtn = document.getElementById("search-button");
searchBtn.addEventListener("click", e => {
    e.preventDefault();
    getPokemon();
    
});




