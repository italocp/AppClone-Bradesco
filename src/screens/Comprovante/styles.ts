import styled from 'styled-components/native';

export const SafeArea = styled.SafeAreaView`
  flex: 0;
  background-color: #ED2154;
  
`;

export const SafeContainer = styled.View`
  background-color: #ED2154;
  padding: 8px 0px 8px 16px;
  flex-direction: row;
  align-items: center;
`;

export const Div = styled.View`
  flex:1;
  margin-left: 140px;
`;

export const SafeTitle = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 19px;
`;

export const Container = styled.View`
  flex:1;
  padding: 16px;
`;

export const GreenContainer = styled.View`
  flex-direction: row;
  padding: 16px;
  align-items: center;
  border-radius: 10px;

  background-color: #D6F4D7;

  margin-bottom: 16px;
`;

export const TextGreen = styled.Text`
  margin-left: 8px;

  font-size: 16px;
  font-weight: bold;
`;

export const SimpleText = styled.Text`
  margin-top: 16px;
  margin-bottom: 16px;
  
  color: #656669;
  font-weight: 600;
  font-size: 16px;
`;

export const CampoText = styled.Text`
  margin-top: 16px;
  color: #757677;
  font-weight: 600;

`;

export const DadoText = styled.Text`
  margin-top: 8px;
  margin-bottom: 16px;

  color: #000;
  font-size: 18px;
  font-weight: bold;
`;

export const LineContainer = styled.View`
  border: 1px;
  border-color: #e6e6e6;

  margin-bottom: 16px;
`;
export const MenuPix = styled.View`

`;
export const Button = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;

  margin-bottom: 16px;
`;
export const BackgroundIcon = styled.View`
 width: 45px;
 height: 45px;
 border-radius: 99px;

 align-items: center;
 justify-content: center;

 background-color: #3A68FF;

 margin-right: 16px;
`;
export const TextButton = styled.Text`
  font-size: 20px;
  font-weight: 500;
`;
export const ButtonInicio = styled.TouchableOpacity`
  padding: 16px;
  border-radius: 50px;

  justify-content: center;
  align-items: center;
  
  background-color: #ED2154;

  margin-top: 16px;
  margin-bottom: 16px;
`;
export const TextInicio = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #FFF;
`;
export const ButtonFinish = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;

  margin-bottom: 24px;
`;
export const TextFiinish = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color:  #3A68FF;
`;