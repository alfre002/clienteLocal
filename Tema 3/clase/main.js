const id = "ditto";
const fetchPokemon = async (id) => {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const json = await res.json();
    console.log(json);
    //if (!res.ok) throw new Error ("Ocurrió un error al solicitar los datos");
    if (!res.ok) throw { status: res.status, statusText: res.statusText };
  } catch (err) {
    console.error(err);
  }
};
fetchPokemon(id);
