import React from "react";
import styled from "styled-components";

// Reusable component
function Parallax({ image, height, children }) {
  return (
    <ParallaxContainer height={height}>
      <ParallaxBackground image={image} />
      <ParallaxContent>{children}</ParallaxContent>
    </ParallaxContainer>
  );
}

const ParallaxContainer = styled.div`
  position: relative; 
  min-height: ${(props) => props.height || "600px"}; /* Allow dynamic height */
  overflow: hidden;
  /**center the content box */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 32px 0px; /**For mobile devices */
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
  text-align: center;
  max-width: 800px;
  background-color: hsl(
    355.8857142857143,
    82.93838862559242%,
    41.37254901960784%,
    0.5
  );
  background-color: hsl(274, 65%, 71%, 0.5);
  /* border: 2px solid var(--primary-theme); */
  box-shadow: inset 4px 0 0 2px var(--primary-theme); /* Inner border */
`;
export default Parallax;
