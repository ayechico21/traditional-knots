import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <Wrapper>
      <h3>Traditional Knots</h3>
      <p>NCR | Kanpur | Rishikesh | Mussoorie | Jaipur | Udaipur |  Agra</p>
      <p>
        © 2024 <span>Traditional Knots</span> All rights reserved
      </p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 16px 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  text-align: center;
  background-color: black;
  color: ${(props) => props.color || "grey"};
  margin-top: var(--spacing);
  @media screen and (max-width: 768px) {
  }
`;

export default Footer;
