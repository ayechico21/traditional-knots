import React from "react";
import styled from "styled-components";

function About() {
  return (
    <Wrapper>
      <h2>About Us</h2>
      <p>
        At Traditional Knots Weddings, we specialize in planning, designing, and
        coordinating unforgettable celebrations. Our passionate team brings
        extensive experience and resources, providing clients with dedicated
        professionals who ensure an unparalleled experience. By collaborating
        with highly skilled and respected vendors, we create the perfect team to
        suit your unique event. With our hands-on approach, we are committed to
        the success of every celebration we coordinate. As a boutique company,
        we offer a personalized planning experience. We value building
        meaningful relationships and understand the importance of having a
        flexible and attentive team to cater to your special occasion.
      </p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

export default About;
