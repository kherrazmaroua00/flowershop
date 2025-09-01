import { Nav } from "./components/Nav/Nav";
import { Section1 } from "./components/Section1/Section1";
import "./App.css";
import { Section2 } from "./components/Section2/Section2";
import { Section3 } from "./components/Section3/Section3";
import Footer from "./components/Footer/Footer";
import Section4 from "./components/Section4/Section4";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Form from "./components/Form/Form";
import { CartProvider } from "./CartContext";

function App() {
  return (
    <CartProvider>
      <Nav />

      <Section1 />
      <Section4 />
      <Section2 />
      <Section3 />
      <Form />
      <Footer />
      <ToastContainer position="top-right" autoClose={2000} />
    </CartProvider>
  );
}

export default App;
