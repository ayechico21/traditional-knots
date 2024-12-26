import React from "react";
import styled from "styled-components";
import Parallax from "../component/ParallexContainer";

function Home() {
  return (
    <Wrapper>
      <MainImageWrapper>
        <MainImage
          src={new URL("/images/img2.jpg", import.meta.url).href}
          alt="Wedding Image"
        />
      </MainImageWrapper>
      <Intro>
        <CursiveHeadings>Planning a Dream Wedding?</CursiveHeadings>
        <p>
          {/*  We take pride in bringing to life the many intricate details that make
          your event truly exceptional. Rest assured, every element—no matter
          how small—will be thoughtfully considered, allowing you to enjoy your
          celebration as much as your guests do. Whether it’s a
          once-in-a-lifetime wedding, a Mehendi, a Haldi, or a milestone 50th
          wedding anniversary, we immerse ourselves in creating a memorable
          tapestry of moments that will leave a lasting impression on you, your
          family, and your guests. We look forward to getting to know you and
          helping you plan your special day. */}
          We are a team of dedicated wedding planners, enthusiasts, and creative visionaries who take great joy in crafting unforgettable moments. The smiles and memories we help create are endless, filled with love and happiness beyond imagination.
        </p>
      </Intro>
      <ContentWrapper>
        <Parallax image="/images/img1.jpg" height="500px">
          <h1>First Section</h1>
          <p>This is some content for the first parallax section.</p>
        </Parallax>
        <Parallax image="/images/img2.jpg" height="400px">
          <h1>Second Section</h1>
          <p>This is different content with another image.</p>
        </Parallax>
        <Parallax image="/images/img1.jpg" height="600px">
          <h1>Third Section</h1>
          <p>And here's another section with even more content!</p>
        </Parallax>
      </ContentWrapper>
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

const MainImageWrapper = styled.div`
  max-height: 600px;
  overflow: hidden;
  position: relative;
  margin: 0 auto;
`;

const MainImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;
  object-position: center;
  display: block;
`;

const Intro = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  max-width: 800px;
  text-align: center;
  font-size: 1.2rem;
  @media screen and (max-width: 768px) {
    font-size: 1rem;
    padding: 0 8px;
  }
`;

const CursiveHeadings = styled.p`
  font-family: var(--cursive-font);
  font-size: 3rem;
  font-weight: 600;
  color: var(--primary-theme);
`;

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
export default Home;
