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
          <Route exact path="/services" element={<Services />}></Route>
          <Route exact path="/gallery" element={<Gallery />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route path="*" element={<Home />}></Route>
        </Routes>
      </main>
      <Footer />
      <WhatsappIconWrapper href="https://api.whatsapp.com/send?phone=7505281599&text=Hello!%20Welcome%20to%20Traditionalknots%20Wedding%20Planner">
        <WhatsppIcon
          src={new URL("/images/whatsapp.png", import.meta.url).href}
        ></WhatsppIcon>
      </WhatsappIconWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div``;
const WhatsappIconWrapper = styled.a`
  width: 48px;
  height: 48px;
  overflow: hidden;
  position: fixed;
  bottom: 16px;
  right: 16px;
  z-index: 1;
`;
const WhatsppIcon = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;
export default App;
