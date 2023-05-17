import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Nav";
import Header from "./components/Header";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contacts from "./components/Contacts";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Portfolio />
      <Contacts />
    </>
  );
}

export default App;
