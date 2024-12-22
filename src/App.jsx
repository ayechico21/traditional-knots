import styled from "styled-components";
import "./App.css";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Home from "./pages/Home";

function App() {
  return (
    <Wrapper>
      <Header />
      <main>
        <Home />
      </main>
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-family: "Playfair Display", serif;
`;

export default App;
