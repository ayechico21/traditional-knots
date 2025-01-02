import React from "react";
import styled from "styled-components";

function Gallery() {
  const imgLinks = [
    new URL("/images/p8.jpg", import.meta.url).href,
    new URL("/images/p9.jpg", import.meta.url).href,
    new URL("/images/p10.jpg", import.meta.url).href,
    new URL("/images/p11.jpg", import.meta.url).href,
    new URL("/images/p13.jpg", import.meta.url).href,
    new URL("/images/p14.jpg", import.meta.url).href,
    new URL("/images/p15.jpg", import.meta.url).href,
    new URL("/images/p0.jpg", import.meta.url).href,
    new URL("/images/homeMain.jpg", import.meta.url).href,
    new URL("/images/p3.jpg", import.meta.url).href,
    new URL("/images/p6.jpg", import.meta.url).href,
    new URL("/images/perfection.jpg", import.meta.url).href,
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
