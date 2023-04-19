import styled from "styled-components";

export const StyledExploreButton = styled.button`
  color: #fffdfa;
  padding: 16px 16px;
  background: rgba(7, 6, 6, 0.01);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  border: 2px solid white;
  font-size: 24px;
  transition: background-color 0.3s;
  -webkit-text-stroke-width: 2px;
  font-family: Incompleeta, sans-serif;
  letter-spacing: 4px;
  left: ${props => props.left};
  right: ${props => props.right};
  top: ${props => props.top};
  bottom: ${props => props.bottom};
  position: ${props => props};
  z-index: 10;

  &:hover {
    color: rgba(255, 255, 255, 0.7);
    border: 2px solid orange;
    transition: 0.5s;
  }
  &:active {
    color: #070606;
  }
`;
