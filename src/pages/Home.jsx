import React from "react";
import styled from "styled-components";
import Parallax from "../component/ParallexContainer";

function Home() {
  return (
    <Wrapper>
      <MainImageWrapper>
        <MainImage
          src={new URL("/images/homeMain.jpg", import.meta.url).href}
          alt="Wedding Image"
        />
      </MainImageWrapper>
      <Intro>
        <CursiveHeadings>Planning a Dream Wedding?</CursiveHeadings>
        <p>
          We are a team of dedicated wedding planners, enthusiasts, and creative
          visionaries who take great joy in crafting unforgettable moments. The
          smiles and memories we help create are endless, filled with love and
          happiness beyond imagination.
        </p>
      </Intro>
      <ContentWrapper>
        <Parallax image="/images/pinkBoard.jpg" height="500px">
          <SectionHeading>We are there for you, From</SectionHeading>
          <SectionCursiveHeading>Reception to Conception</SectionCursiveHeading>
          <p>
            Planning an Indian wedding is a journey filled with love, culture,
            and celebration, and we're here to make it seamless and
            unforgettable. From the initial stages of ideation to the final
            reception, we handle every detail with precision and care. Whether
            it’s designing the perfect theme, curating rituals, or ensuring
            smooth execution, we bring your dream wedding to life. Let us take
            the stress off your shoulders, so you can cherish every moment of
            this beautiful journey. Trust us to turn your vision into reality,
            every step of the way.
          </p>
        </Parallax>
        <Parallax image="/images/pic0.jpg" height="600px">
          <SectionHeading>Tailored to Perfection</SectionHeading>
          <SectionCursiveHeading>Wedding Services</SectionCursiveHeading>
          <p>
            We offer a comprehensive range of services to make your Indian
            wedding a grand success. From venue selection and exquisite décor to
            catering with authentic flavors and entertainment that dazzles, we
            cover it all. Our team specializes in coordinating traditional
            ceremonies, contemporary themes, and everything in between. With
            expert planning and meticulous attention to detail, we ensure your
            special day is flawless and stress-free. Let us handle the logistics
            while you focus on creating cherished memories with your loved ones.
          </p>
        </Parallax>
        <Parallax image="/images/destination.jpg" height="500px">
          <SectionHeading>Your Dream Destination Wedding,</SectionHeading>
          <SectionCursiveHeading>Perfectly Planned</SectionCursiveHeading>
          <p>
            Turn your wedding into an unforgettable experience with our expertly
            curated destination wedding services. Whether it’s a royal affair in
            Rajasthan, a serene celebration in the hill stations of Shimla or
            Mussoorie, or an exotic international locale, we bring your vision
            to life. From travel arrangements and venue scouting to managing
            local vendors and personalized décor, we handle every detail with
            care. Let us craft a magical setting that reflects your style and
            traditions, ensuring your destination wedding is as unique as your
            love story.
          </p>
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
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--primary-theme);
  @supports (font-family: var(--cursive-font)) {
    font-size: 3.5rem;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  color: white;
  font-size: 1.2rem;
`;

const SectionHeading = styled.p`
  font-size: 1.2rem;
  text-transform: uppercase;
  line-height: 1;
`;
const SectionCursiveHeading = styled.p`
  font-size: 1.5rem;
  font-family: var(--cursive-font);
  color: var(--primary-theme);
  line-height: 1.2;
  padding-bottom: 8px;
  font-weight: 600;
  @supports (font-family: var(--cursive-font)) {
    font-size: 3.5rem;
  }
`;
export default Home;
