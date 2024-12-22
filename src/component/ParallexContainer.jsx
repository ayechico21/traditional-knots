import React from "react";
import styled from "styled-components";

// Styled components
const ParallaxContainer = styled.div`
  position: relative;
  height: ${(props) => props.height || "500px"}; /* Allow dynamic height */
  overflow: hidden;
`;

const ParallaxBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.image}); /* Dynamic image */
  background-size: cover; /* Ensure the image covers the container */
  background-attachment: fixed; /* Keeps the background fixed */
  background-position: center;
  z-index: -1; /* Place behind content */
`;

const ParallaxContent = styled.div`
  position: relative;
  z-index: 1; /* Content above the background */
  padding: 20px;
  color: white;
  text-align: center;
`;

// Reusable component
const Parallax = ({ image, height, children }) => {
  return (
    <ParallaxContainer height={height}>
      <ParallaxBackground image={image} />
      <ParallaxContent>{children}</ParallaxContent>
    </ParallaxContainer>
  );
};

export default Parallax;
