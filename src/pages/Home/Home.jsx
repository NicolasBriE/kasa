import Header from "../../components/Header/header";
import Background from "../../components/Background/background";
import Cards from "../../components/Cards/cards";
import Footer from "../../components/Footer/footer";

function Home() {
  return (
    <div className="home">
      <Header />
      <Background />
      <Cards />
      <Footer />
    </div>
  );
}

export default Home;
