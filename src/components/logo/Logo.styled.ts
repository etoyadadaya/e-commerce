import styled from "styled-components";

export const StyledLogo = styled.button`
  width: 100%;
  color: #fffdfa;
  padding: 10px 6px;
  background: rgba(7, 6, 6, 0.01);
  border-radius: 6px;
  font-size: 32px;
  transition: background-color 0.3s;
  -webkit-text-stroke-width: 2px;
  font-family: Incompleeta, sans-serif;
  letter-spacing: 4px;

  &:hover {
    color: orange;
    transition: 0.5s;
  }
  &:active {
    background: rgba(7, 6, 6, 0.1);
    color: #070606;
  }
`;
