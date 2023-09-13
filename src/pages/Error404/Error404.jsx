import Header from "../../components/Header/header";
import Error from "../../components/error";
import Footer from "../../components/Footer/footer";

function Error404() {
  return (
    <div className="error">
      <Header />
      <Error />
      <Footer />
    </div>
  );
}

export default Error404;
