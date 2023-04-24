import Header from "./components/header/header.js";
import Promo from "./components/promo/promo.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Promo />
      </main>
    </div>
  );
}

export default App;
