import React, {FC} from "react";

import {StyledExploreButton} from "./ExploreButton.styled";
import {IButton} from "./ExploreButton.types";

const IconButton: FC<IButton> = ({children, onClick}) => {
  return (
    <>
      <StyledExploreButton onClick={onClick}>{children}</StyledExploreButton>
    </>
  );
};

export default IconButton;
