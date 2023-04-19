import styled from "styled-components";

export const StyledIconButton = styled.button`
  width: 100%;
  color: #fffdfa;
  padding: 10px 6px;
  background: rgba(7, 6, 6, 0.01);
  border-radius: 6px;
  font-size: 20px;
  transition: color 0.5s;
  &:active {
    color: #070606;
  }

  svg:hover {
    fill: orange;
    transition: 0.5s;
  }
  svg:active {
    fill: black;
  }
`;
