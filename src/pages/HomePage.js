import Footer from "../components/Footer";
import Specials from "../components/Specials";
import SpecialsCards from "../components/SpecialsCards";
import CallToAction from "../components/CallToAction";

function HomePage() {
  return (
    <>
      <CallToAction />
      <Specials></Specials>
      <SpecialsCards></SpecialsCards>
      <Footer />
    </>
  );
}

export default HomePage;
