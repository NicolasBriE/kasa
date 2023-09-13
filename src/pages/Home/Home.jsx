import Header from "../../components/Header/header";
import Background from "../../components/Background/background";
import Cards from "../../components/Cards/cards";
import Footer from "../../components/Footer/footer";
import backgroundHome from "../../assets/images/backgroundHome.png";
let texte = "Chez vous, partout et ailleurs";

function Home() {
  return (
    <div className="home">
      <Header />
      <Background image={backgroundHome} texte={texte} />
      <Cards />
      <Footer />
    </div>
  );
}

export default Home;
