import styled from "styled-components";
import backgroundImage from '../../assets/background-texture.png';

export const HomePageWrapper = styled.div`
  width: calc(100% - 80px);
  height: calc(100% - 80px);
  background: lightblue;

  overflow-y: auto; 
  
  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
`;
export const BackgroundImage = styled.div`
  width: 100%;
  height: 5417px;
    background-image: url(${backgroundImage});
  background-size: 100%;
  background-position: center;
  
  background-position: top center;
  background-position: center top; 
  background-repeat: no-repeat;
`;
