import "./App.css";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Specials from "./components/Specials";
import SpecialsCards from "./components/SpecialsCards";

function App() {
  return (
    <>
      <Nav />
      <Main />
      <Specials></Specials>
      <SpecialsCards></SpecialsCards>
      <Footer />
    </>
  );
}

export default App;
