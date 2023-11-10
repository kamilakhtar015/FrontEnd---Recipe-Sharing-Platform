import Navbar from "./components/Navbar";
// import Register from "./components/Register";
// import Login from "./components/Login";
import HeroSection from "./components/HeroSection";
import ImproveSkills from "./components/improveSkilss";
import QouteSection from "./components/QuoteSection";



function App() {
  return (
    <main className="App">
        <Navbar />
      <div className="container main"> 
        <HeroSection />
        <ImproveSkills />
        <QouteSection />
      </div>

    </main>
  );
}

export default App;
