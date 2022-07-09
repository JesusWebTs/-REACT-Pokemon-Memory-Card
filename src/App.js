import "./App.css";
import { StaticNavigator } from "./navigation";
import { CardsProvider } from "./context/cardContext";
import { PlayersProvider } from "./context/playersContext";

function App() {
  return (
    <div className="App">
      <PlayersProvider>
        <CardsProvider>
          <StaticNavigator />
        </CardsProvider>
      </PlayersProvider>
    </div>
  );
}

export default App;
