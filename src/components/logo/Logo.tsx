import React, {FC} from "react";

import {StyledLogo} from "./Logo.styled";
import {ILogo} from "./Logo.types";

const Logo: FC<ILogo> = ({children, onClick}) => {
  return (
    <>
      <StyledLogo onClick={onClick}>{children}</StyledLogo>
    </>
  );
};

export default Logo;
