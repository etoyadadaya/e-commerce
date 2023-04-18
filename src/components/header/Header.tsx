import React from "react";

import {DefaultButton, IconButton, Logo} from "../index";
import {
  StyledButtonsWrap,
  StyledHeader,
  StyledHeaderBody,
  StyledIconsWrap,
  StyledLogoWrap,
} from "./Header.styled";

const Header = () => {
  return (
    <>
      <StyledHeader>
        <StyledHeaderBody>
          <StyledLogoWrap>
            <Logo>SHADOW</Logo>
          </StyledLogoWrap>
          <StyledButtonsWrap>
            <DefaultButton onClick={() => console.log("WOMAN")}>
              WOMAN
            </DefaultButton>
            <DefaultButton onClick={() => console.log("MAN")}>
              MAN
            </DefaultButton>
            <DefaultButton onClick={() => console.log("KIDS")}>
              KIDS
            </DefaultButton>
            <DefaultButton onClick={() => console.log("COLLECTIONS")}>
              COLLECTIONS
            </DefaultButton>
          </StyledButtonsWrap>
          <StyledIconsWrap>
            <IconButton onClick={() => console.log("FIND")}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="white"
              >
                <g
                  id="_01_align_center"
                  data-name="01 align center"
                >
                  <path d="M24,22.586l-6.262-6.262a10.016,10.016,0,1,0-1.414,1.414L22.586,24ZM10,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,10,18Z" />
                </g>
              </svg>
            </IconButton>
            <IconButton onClick={() => console.log("SHOPPING CART")}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="Outline"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="white"
              >
                <path d="M22.713,4.077A2.993,2.993,0,0,0,20.41,3H4.242L4.2,2.649A3,3,0,0,0,1.222,0H1A1,1,0,0,0,1,2h.222a1,1,0,0,1,.993.883l1.376,11.7A5,5,0,0,0,8.557,19H19a1,1,0,0,0,0-2H8.557a3,3,0,0,1-2.82-2h11.92a5,5,0,0,0,4.921-4.113l.785-4.354A2.994,2.994,0,0,0,22.713,4.077ZM21.4,6.178l-.786,4.354A3,3,0,0,1,17.657,13H5.419L4.478,5H20.41A1,1,0,0,1,21.4,6.178Z" />
                <circle
                  cx="7"
                  cy="22"
                  r="2"
                />
                <circle
                  cx="17"
                  cy="22"
                  r="2"
                />
              </svg>
            </IconButton>
          </StyledIconsWrap>
        </StyledHeaderBody>
      </StyledHeader>
    </>
  );
};

export default Header;
