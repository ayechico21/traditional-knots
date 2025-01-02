import React from "react";
import styled from "styled-components";
import Parallax from "../component/ParallexContainer";

function Contact() {
  return (
    <Wrapper>
      <ContentWrapper>
        <Parallax image="/images/contactBg.jpg" height="500px">
          <SectionHeading>Here For you,</SectionHeading>
          <SectionCursiveHeading>
            From First Call to Final Touch
          </SectionCursiveHeading>
          <p>
            If you'd like us to be part of creating that perfect beginning,
            don’t hesitate to reach out. We believe there’s no greater joy than
            helping others craft celebrations that are unforgettable, unique,
            and deeply personal. Rest assured, every little detail will be
            thoughtfully considered, ensuring you enjoy the event just as much
            as your guests. We’re excited to get to know you and learn how we
            can help bring your vision for your big day to life.
          </p>
        </Parallax>
      </ContentWrapper>
      <CursiveHeadings>Get In Touch</CursiveHeadings>
      <InfoWrapper>
        <InfoSection>
          <IconImageWrapper>
            <IconImage
              src={new URL("/images/smartphone.png", import.meta.url).href}
              alt="Wedding Image"
            />
          </IconImageWrapper>
          <div>
            <Info href="tel:+91 75052 81599">+917505281599</Info>
            <Info href="tel:+91 87652 59889">+918765259889</Info>
            <Info href="tel:+91 78303 91929">+917830391929</Info>
          </div>
        </InfoSection>
        <InfoSection>
          <IconImageWrapper>
            <IconImage
              src={new URL("/images/instagram.png", import.meta.url).href}
              alt="Wedding Image"
            />
          </IconImageWrapper>
          <Info href="https://www.instagram.com/trad_itionalknots/">@trad_itionalknots</Info>
        </InfoSection>
      </InfoWrapper>
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
const InfoWrapper = styled.div`
  display: flex;
  gap: 16px;
  justify-content: space-evenly;
  width: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const InfoSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0px 8px;
  gap: 16px;
  width: fit-content;
`;

const IconImageWrapper = styled.div`
  height: 70px;
  min-width: 70px;
  overflow: hidden;
  position: relative;
  margin: 0 auto;
`;

const IconImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;
  object-position: center;
  display: block;
`;

const Info = styled.a`
  font-size: 1.4rem;
  text-decoration: underline;
  color: var(--primary-theme);
  word-wrap: break-word; /* Ensures long words break onto the next line */
  overflow-wrap: break-word; /* Ensures word breaks in modern browsers */
  max-width: 100%; /* Ensures the anchor stays within its container */
  display: block; /* Ensures the <a> tag behaves like a block element */
  word-break: break-all;
  font-family: initial;
  @media screen and (max-width: 768px) {
    font-size: 1.2rem; /* Slightly reduce font size on mobile if needed */
  }
`;
export default Contact;
