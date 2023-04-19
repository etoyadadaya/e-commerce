import {Header} from "@components";
import {
  StyledContentBody,
  StyledContentWrap,
  StyledImage,
  StyledPromo,
  StyledSubText,
  StyledSubTextWrap,
  StyledText,
  StyledTextWrap,
} from "@pages/home/Home.styled";
import React from "react";

import logo from "../../../public/promo.png";
import {StyledExploreButton} from "../../components/button/explore/ExploreButton.styled";

const Home = () => {
  return (
    <>
      <Header />
      <StyledContentBody>
        <StyledContentWrap>
          <StyledPromo>
            <StyledTextWrap>
              <StyledText
                color="black"
                fontSize="250px"
              >
                SPR
              </StyledText>
              <StyledText
                color="black"
                fontSize="250px"
              >
                ING
              </StyledText>
              <StyledText
                color="black"
                fontSize="220px"
                marginTop="30px"
              >
                `23
              </StyledText>
            </StyledTextWrap>
            <StyledImage
              src={logo}
              alt=""
            />
            <StyledSubTextWrap>
              <StyledSubText
                position="absolute"
                fontWeight="100"
                right="850px"
                marginTop="210px"
                color="white"
                fontSize="30px"
                rotate="0deg"
              >
                COZY
              </StyledSubText>
              <StyledSubText
                position="absolute"
                fontWeight="100"
                color="white"
                right="850px"
                marginTop="270px"
                fontSize="30px"
                rotate="0deg"
              >
                CLASSIC
              </StyledSubText>
              <StyledSubText
                position="absolute"
                fontWeight="100"
                right="850px"
                marginTop="240px"
                color="orange"
                fontSize="30px"
                rotate="0deg"
              >
                CRAZY
              </StyledSubText>
            </StyledSubTextWrap>
            <StyledExploreButton
              right="1100px"
              top="750px"
              position="absolute"
            >
              Explore
            </StyledExploreButton>
          </StyledPromo>
        </StyledContentWrap>
      </StyledContentBody>
    </>
  );
};

export default Home;
