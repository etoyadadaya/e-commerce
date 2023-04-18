import React, {FC} from "react";

import {StyledIconButton} from "./IconButton.styled";
import {IButton} from "./IconButton.types";

const IconButton: FC<IButton> = ({children, onClick}) => {
  return (
    <>
      <StyledIconButton onClick={onClick}>{children}</StyledIconButton>
    </>
  );
};

export default IconButton;
