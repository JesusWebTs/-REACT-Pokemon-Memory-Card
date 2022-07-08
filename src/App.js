import logo from "./logo.svg";
import "./App.css";
import usePokemon from "./hooks/usePokemon";
import { PokeCard } from "./components";

function App() {
  const { pokemons } = usePokemon();
  return (
    <div className="App">
      {pokemons.map((pokeInfo) => (
        <PokeCard key={pokeInfo.id} pokeInfo={pokeInfo} />
      ))}
    </div>
  );
}

export default App;
