import Armoring from "./pages/Armoring";

const player = {
  armoringLvl: 0,
  linen: 0,
  courseLeather: 0,
  ironIngot: 0,
}
  

function App() {
  return (
    <div className="App">
      <Armoring playerInfo={player}/>
    </div>
  );
}

export default App;
