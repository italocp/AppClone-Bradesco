import styled from 'styled-components/native';
import { Dimensions } from 'react-native'

const { width } = Dimensions.get('window')


export const ContainerBia = styled.View`
  padding: 30px;
  position: absolute;

  margin-top: 230px;
  
`;

export const BiaRow = styled.View`
  flex-direction: row;

`;

export const SearchContainer = styled.View`
  
  width: ${width * 0.70}px;
  
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 16px;

  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;



  background-color: #FFF;
`;

export const SearchText = styled.Text`
  font-size: 16px;

  color: #9B9C9D;
  font-weight: 600;
  font-style: italic;
  margin-left: 32px;
`;

export const RedText = styled.Text`
  font-style: italic;
  color: #F31C5B;
  font-weight: bold;
`;

export const MicContainer = styled.View`
  background-color: #F31C5B;
  width: 64px;

  align-items: center;
  justify-content: center;

  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;

`;


export const Container = styled.View`
  background-color: #F0F1F5;
  position: absolute;
  margin-top: 320px;
  
`;

// distancia q alinha com o resto
export const ContainerRed = styled.View`
  padding: 8px 32px 16px 32px;

  flex-direction: row;
`;

export const RedIcons = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-right: 8px;
`;

export const BackgroundIcon = styled.View`
 background-color: #F31C5B;

 width: 50px;
 height: 50px;

 border-radius: 10px;

 align-items: center;
 justify-content: center;

 margin-right: 8px;
`;

export const TextIcon = styled.Text`
  margin-right: 8px;
`;

export const ContainerCol = styled.View`
  padding: 0px 32px 8px 32px;
`;

export const ContainerRow = styled.View`
  flex-direction: row;
  margin-bottom: 12px;
`;

export const ContentIcon = styled.View`
  background-color: #fff;

  width: ${width * 0.4}px;

  padding: 32px 0px 32px 8px;
  border-radius: 10px;
  
  margin-right: 12px;
  flex-direction: row;
  align-items: center;

  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

export const ContentText = styled.Text`


  margin-left: 16px;
`;

export const ContainerPix = styled.View`
  flex-direction: row;
  align-items: center;

  padding: 0px 32px 0px 32px;
`;

export const BackgroundIconPix = styled.View`
  background-color: #F31C5B;

  align-items: center;
  justify-content: center;
  
  width: 60px;
  height: 60px;

  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;

`;

export const WhitePix = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: ${width * 0.68}px;
  height: 60px;
  background-color: #fff;
  padding-right: 4px;

  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const PixText = styled.Text`
  padding-left: 16px;
  padding-right: 16px;
`;

export const Base = styled.View`
  flex-direction: row;
  background-color: #fff;
  align-items: center;
  justify-content: center;

  margin-top: 16px;

  margin-right: 13px;
  

  border-top-left-radius: 30px;
  border-top-right-radius: 30px;

  padding-top: 32px;
  padding-bottom: 50px;
`;

export const TextBase = styled.Text`
  margin-right: 16px;

  color: #F31C5B;
`;