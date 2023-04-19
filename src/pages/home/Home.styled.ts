import styled from "styled-components";

export const StyledContentBody = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const StyledContentWrap = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: center;
  position: relative;
`;

export const StyledPromo = styled.div`
  display: flex;
`;

export const StyledSubTextWrap = styled.div`
  display: flex;
  position: relative;
  z-index: 3;
`;

export const StyledTextWrap = styled.div`
  display: flex;
`;

export const StyledText = styled.h1`
  font-size: ${props => props};
  font-weight: ${props => props.fontWeight};
  position: ${props => props.position};
  left: ${props => props.left};
  right: ${props => props.right};
  top: ${props => props.top};
  bottom: ${props => props.bottom};
  color: ${props => props.color};
  -webkit-text-stroke-width: 4px;
  -webkit-text-stroke-color: white;
  z-index: 1;
  margin-top: ${props => props.marginTop};
  transform: scale(1, 1);
  font-family: Incompleeta, sans-serif;
}
`;

export const StyledSubText = styled.span`
  font-size: ${props => props};
  font-weight: ${props => props.fontWeight};
  position: ${props => props.position};
  left: ${props => props.left};
  right: ${props => props.right};
  top: ${props => props.top};
  bottom: ${props => props.bottom};
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: ${props => props};
  z-index: 1;
  margin-top: ${props => props.marginTop};
  transform: scale(1, 1);
  rotate: ${props => props};
  font-family: Incompleeta, sans-serif;
`;

export const StyledImage = styled.img`
  position: absolute;
  z-index: 2;
  top: 100px;
  margin-left: 250px;
  height: 900px;
  width: 900px;
  opacity: 1;
  filter: brightness(90%);
`;
