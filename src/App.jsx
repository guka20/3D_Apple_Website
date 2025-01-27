import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Highlights from "./components/Highlights";
const App = () => {
  return (
    <main className="bg-blue">
      <Navbar />
      <Hero />
      Hello
      <Highlights />
    </main>
  );
};

export default App;
