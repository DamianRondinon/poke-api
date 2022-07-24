const baseURL = "https://pokeapi.co/api/v2";
const caja = document.querySelector("#caja");

const cantidadPokemones = 16;

const fetchPokemones = async () => {
  for (let i = 1; i <= cantidadPokemones; i++) {
    await getPokemon(i);
  }
};

const getPokemon = async (id) => {
  try {
    const response = await fetch(`${baseURL}/pokemon/${id}`);
    const data = await response.json();

    pintarPoke(data);
  } catch (error) {
    console.log(`tenemos un error ${error}`);
  }
};
//<img src="${sprites.back_default}" />
const pintarPoke = (pokemon) => {
  const div = document.createElement("div");
  div.classList.add("poke");
  const flipCard = document.createElement('div');
  flipCard.classList.add("flip-card");
  const cardContainer = document.createElement('div');
  cardContainer.classList.add("card-container");
  flipCard.appendChild(cardContainer);
  const { id, name, sprites, height, weight, types } = pokemon;
  const pokeInnerHtml = `
    <img src="${sprites.front_default}" />
    <h2>${name}</h2>
    <span>EXP: ${pokemon.base_experience}</span>
    <div class="tipo-poke">
    ${types
      .map((tipo) => {
        return `<span class="${tipo.type.name} poke__type">${tipo.type.name}</span>`;
      })
      .join("")}

    </div>
    <p class="id-poke">#${id}</p>
    <p class="height">Height:${height}</p>
    <p class="weight">Weight:${weight}Kg</p>
    `;
  div.innerHTML = pokeInnerHtml;

  const cardBack = document.createElement('div');
  cardBack.classList.add('pokemon-block-back');
  cardBack.textContent = "carta de atras";

  cardContainer.appendChild(div);
  cardContainer.appendChild(cardBack);
  caja.appendChild(flipCard);
};

fetchPokemones();


