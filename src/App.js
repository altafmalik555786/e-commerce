import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-container">
        <Nav />
        <Main />
      </div>
      <Footer />
    </div>
  );
}

export default App;
