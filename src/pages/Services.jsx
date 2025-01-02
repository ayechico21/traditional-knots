import React from "react";
import styled from "styled-components";

function Services() {
  return (
    <Wrapper>
      <IconSection>
        <IconImageWrapper>
          <IconImage
            src={new URL("/images/invite.png", import.meta.url).href}
            alt="Services Icon Image"
          ></IconImage>
        </IconImageWrapper>
        <IconImageWrapper>
          <IconImage
            src={new URL("/images/decor.png", import.meta.url).href}
            alt="Services Icon Image"
          ></IconImage>
        </IconImageWrapper>
        <IconImageWrapper>
          <IconImage
            src={new URL("/images/hospitality.png", import.meta.url).href}
            alt="Services Icon Image"
          ></IconImage>
        </IconImageWrapper>
        <IconImageWrapper>
          <IconImage
            src={new URL("/images/food.png", import.meta.url).href}
            alt="Services Icon Image"
          ></IconImage>
        </IconImageWrapper>
        <IconImageWrapper>
          <IconImage
            src={new URL("/images/entertainment.png", import.meta.url).href}
            alt="Services Icon Image"
          ></IconImage>
        </IconImageWrapper>
      </IconSection>
      <SectionWrapper>
        <SectionImageWrapper>
          <SectionImage
            src={new URL("/images/servicesBg.jpg", import.meta.url).href}
            alt="Wedding Image"
          ></SectionImage>
        </SectionImageWrapper>
        <ContentWrapper>
          <CursiveHeadings>Our Services</CursiveHeadings>
          <p>
            We believe in making wedding planning a seamless and joyful
            experience with
            <ColoredText>
              {" "}
              Comprehensive wedding planning made easy.{" "}
            </ColoredText>
            Whether it’s a grand celebration or an intimate affair, we focus on
            <ColoredText>
              {" "}
              Tailored Services for Every Tradition and Style,{" "}
            </ColoredText>
            ensuring your special day reflects your unique vision.
            <ColoredText> Venue to Vows: We Handle It All, </ColoredText>
            offering elegant décor, exquisite cuisine, and entertainment that
            creates
            <ColoredText> Unforgettable Memories. </ColoredText>For those
            dreaming of a far-off celebration, our
            <ColoredText>
              {" "}
              Destination Weddings with a Personal Touch{" "}
            </ColoredText>
            service takes care of every detail, from travel arrangements to
            local vendor coordination. With a focus on
            <ColoredText>
              {" "}
              Stress-Free Planning, Magical Celebrations,{" "}
            </ColoredText>{" "}
            we ensure your guests have an incredible experience, redefining
            hospitality and care. Trust us to deliver
            <ColoredText>
              {" "}
              Customized Solutions for Your Perfect Day,{" "}
            </ColoredText>
            turning your dream wedding into reality with ease and excellence.
          </p>
        </ContentWrapper>
      </SectionWrapper>
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

const IconSection = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const IconImageWrapper = styled.div`
  height: 150px;
  width: 150px;
  overflow: hidden;
  position: relative;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    height: 100px;
    width: 100px;
  }
`;

const IconImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;
  object-position: center;
  display: block;
`;

const SectionWrapper = styled.div`
  display: flex;
  gap: 16px;

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

const SectionImageWrapper = styled.div`
  flex: 1;
  overflow: hidden;
  position: relative;

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
const ColoredText = styled.span`
  color: var(--primary-theme);
  font-family: var(--cursive-font);
  line-height: 1;
  font-weight: 600;
  @supports (font-family: var(--cursive-font)) {
    font-size: 2rem;
  }
`;

export default Services;
