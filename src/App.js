import "./App.css";
import FlipPage from "./components/flippage";
import Header from "./components/header/header";
import Mint from "./components/mint/mint";

function App() {
  return (
    <div className="App">
      <Header />
      <FlipPage></FlipPage>
      <Mint />
    </div>
  );
}

export default App;
