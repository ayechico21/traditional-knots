import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <Wrapper>
      <h2>Traditional Knots</h2>
      <p>NCR | Kanpur | Rishikesh | Mussoorie | Jaipur | Agra</p>
      <p>
        © 2024 <span>Traditional Knots</span> All rights reserved
      </p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border: 2px dotted red;
  padding: 16px 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background-color: black;
  color: ${(props) => props.color || "grey"};
`;

export default Footer;
