import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Weather from "./pages/Weather";
import Todo from "./pages/Todo";
function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/todo" element={<Todo />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
  