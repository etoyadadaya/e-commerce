import React, {FC} from "react";

import {StyledDefaultButton} from "./DefaultButton.styled";
import {IButton} from "./DefaultButton.types";

const DefaultButton: FC<IButton> = ({children, onClick}) => {
  return (
    <>
      <StyledDefaultButton onClick={onClick}>{children}</StyledDefaultButton>
    </>
  );
};

export default DefaultButton;
