import styled from "styled-components";

export const StyledIconButton = styled.button`
  width: 100%;
  color: #fffdfa;
  border: 1px solid rgba(7, 6, 6, 0.1);
  padding: 10px 6px;
  background: rgba(7, 6, 6, 1);
  border-radius: 6px;
  font-size: 20px;
  transition: background-color 0.3s;

  &:active {
    background: rgba(7, 6, 6, 0.1);
    color: #070606;
  }

  svg:active {
    fill: black;
  }
`;
