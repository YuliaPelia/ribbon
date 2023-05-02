import AppHeader from "../appHeader/appHeader.js";
import Promo from "../promo/promo.js";
import Empower from "../empower/empower.js";
import Certified from "../certified/certified.js";
import AboutCompany from "../aboutCompany/aboutCompany.js";
import OurSolution from "../ourSolutions/ourSolutions.js";
import Carousel from "../carousel/carousel.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <AppHeader />
      <main>
        <Promo />
        <Empower>
          <Certified />
          <AboutCompany />
          <OurSolution>
            <Carousel />
          </OurSolution>
        </Empower>
      </main>
    </div>
  );
}

export default App;
