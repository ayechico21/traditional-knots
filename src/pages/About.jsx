import React from "react";
import styled from "styled-components";

function About() {
  return (
    <Wrapper>
      <SectionWrapper>
        <SectionImageWrapper>
          <SectionImage
            src={new URL("/images/perfection.jpg", import.meta.url).href}
            alt="Wedding Image"
          ></SectionImage>
        </SectionImageWrapper>
        <ContentWrapper>
          <CursiveHeadings>About Us</CursiveHeadings>
          <p>
            At Traditional Knots, we are passionate about creating unforgettable
            wedding experiences that beautifully blend tradition and modern
            elegance. With years of expertise in Indian wedding planning, our
            dedicated team ensures that every couple's dream wedding becomes a
            reality. From grand celebrations to intimate gatherings, we offer a
            full spectrum of services that reflect the unique cultural essence
            of each love story.
          </p>
        </ContentWrapper>
      </SectionWrapper>
      <ReversedSection>
        <SectionImageWrapper>
          <SectionImage
            src={new URL("/images/pinkBoard.jpg", import.meta.url).href}
            alt="Wedding Image"
          ></SectionImage>
        </SectionImageWrapper>
        <ContentWrapper>
          <CursiveHeadings>Our Approach</CursiveHeadings>
          <p>
            We believe that every wedding is as unique as the couple it
            celebrates. Our approach is personalized, thoughtful, and
            detail-oriented, ensuring that your special day unfolds exactly as
            you’ve envisioned. We handle everything from venue selection and
            décor to managing vendors and coordinating every ceremony with
            precision. Our team works relentlessly to bring your dream wedding
            to life, ensuring every moment is seamless, beautiful, and
            unforgettable.
          </p>
        </ContentWrapper>
      </ReversedSection>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionWrapper = styled.div`
  display: flex;
  gap: 16px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const SectionImageWrapper = styled.div`
  flex: 1;
  overflow: hidden;
  position: relative;
  margin: 0 auto;

  --mask: radial-gradient(
        35.78px at 50% calc(100% - 48px),
        #000 99%,
        #0000 101%
      )
      calc(50% - 32px) 0/64px 100%,
    radial-gradient(35.78px at 50% calc(100% + 32px), #0000 99%, #000 101%) 50%
      calc(100% - 16px) / 64px 100% repeat-x;
  -webkit-mask: var(--mask);
  mask: var(--mask);
`;

const SectionImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;
  object-position: center;
  display: block;
`;
const ContentWrapper = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  color: white;
  font-size: 1.2rem;
  text-align: center;
  padding: 16px;
  text-shadow: 2px 4px 4px var(--primary-theme);
`;
const CursiveHeadings = styled.p`
  font-family: var(--cursive-font);
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1;
  color: var(--primary-theme);
  @supports (font-family: var(--cursive-font)) {
    font-size: 3.5rem;
  }
`;
const ReversedSection = styled(SectionWrapper)`
  flex-direction: row-reverse;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
export default About;
