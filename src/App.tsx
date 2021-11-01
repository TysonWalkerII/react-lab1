import "./App.css";
import AdDesigner from "./components/adDesigner";
import Header from "./components/Header";
import Votes from "./components/Votes";

function App() {
  return (
    <div className="App">
      <Header user="PorkyMcPorkstr" />
      <main className="main">
        <AdDesigner />
        <Votes />
      </main>
    </div>
  );
}

export default App;
