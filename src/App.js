import Navbar from "./components/Navbar";
// import Register from "./components/Register";
// import Login from "./components/Login";
import HeroSection from "./components/HeroSection";


function App() {
  return (
    <main className="App">
        <Navbar />
      <div className="container main"> 
        <HeroSection />
      </div>

    </main>
  );
}

export default App;
