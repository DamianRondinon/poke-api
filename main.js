const baseURL = "https://pokeapi.co/api/v2";
const caja = document.querySelector("#caja");

const cantidadPokemones = 15;

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

const pintarPoke = (pokemon) => {
  const div = document.createElement("div");
  div.classList.add("poke");
  const { id, name, sprites, height, weight, types } = pokemon;
  const pokeInnerHtml = `
    <img src="${sprites.front_default}" />
    <h2>${name}</h2>
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
  caja.appendChild(div);
};

fetchPokemones();
