import React from "react";
import styled from "styled-components";

function Gallery() {
  const imgLinks = [
    new URL("/images/pic0.jpg", import.meta.url).href,
    new URL("/images/pic7.jpg", import.meta.url).href,
    new URL("/images/pic1.jpg", import.meta.url).href,
    new URL("/images/destination.jpg", import.meta.url).href,
    new URL("/images/pic3.jpg", import.meta.url).href,
    new URL("/images/pic5.jpg", import.meta.url).href,
    new URL("/images/pic4.jpg", import.meta.url).href,
    new URL("/images/perfection.jpg", import.meta.url).href,
    new URL("/images/homeMain.jpg", import.meta.url).href,
    new URL("/images/pic6.jpg", import.meta.url).href,
    new URL("/images/pic2.jpg", import.meta.url).href,
    new URL("/images/pic8.jpg", import.meta.url).href,
  ];
  return (
    <>
      <GalleryList>
        {imgLinks.map((imgLink, idx) => (
          <GalleryItem key={idx}>
            <GalleryImg src={imgLink} loading="lazy" />
          </GalleryItem>
        ))}
      </GalleryList>
    </>
  );
}

const GalleryList = styled.ul`
  --gap: 16px;
  column-count: 3;
  column-gap: var(--gap);
  padding: var(--gap);
`;
const GalleryItem = styled.li`
  break-inside: avoid;
`;
const GalleryImg = styled.img`
  --gap: 16px;
  display: block;
  width: 100%;
  margin-bottom: var(--gap);
`;

export default Gallery;
