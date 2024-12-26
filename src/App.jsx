import styled from "styled-components";
import "./App.css";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Contact from "./pages/Contact";
function App() {
  return (
    <Wrapper>
      <Header />
      <main>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/home" element={<Home />}></Route>
          <Route exact path="/services" element={<Services />}></Route>
          <Route exact path="/gallery" element={<Gallery />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route path="*" element={<Home />}></Route>
        </Routes>
      </main>
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.div``;

export default App;
