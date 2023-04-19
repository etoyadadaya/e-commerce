import styled from "styled-components";

export const StyledDefaultButton = styled.button`
  width: 100%;
  color: #fffdfa;
  padding: 10px 6px;
  background: rgba(7, 6, 6, 0.01);
  border-radius: 6px;
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

  &:hover {
    color: orange;
    transition: 0.5s;
  }
  &:active {
    color: #070606;
  }
`;
