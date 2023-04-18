import {Header} from "@components";
import {
  StyledContentBody,
  StyledContentWrap,
  StyledText,
} from "@pages/home/Home.styled";
import React from "react";

const Home = () => {
  return (
    <>
      <Header />
      <StyledContentBody>
        <StyledContentWrap>
          <StyledText>E-COMMERCE</StyledText>
        </StyledContentWrap>
      </StyledContentBody>
    </>
  );
};

export default Home;
