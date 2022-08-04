import React from "react";
import { ScrollView } from "react-native";
import * as Print from "expo-print";
import { shareAsync } from "expo-sharing";

import { Ionicons } from "@expo/vector-icons";

import {
  SafeArea,
  SafeContainer,
  Div,
  SafeTitle,
  Container,
  GreenContainer,
  TextGreen,
  SimpleText,
  CampoText,
  DadoText,
  LineContainer,
  MenuPix,
  Button,
  BackgroundIcon,
  TextButton,
  ButtonInicio,
  TextInicio,
  ButtonFinish,
  TextFiinish,
} from "./styles";

const Comprovante = () => {
  const html = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
      div#container {
        display: flex;
        flex-direction: column;
  
        justify-content: center;
        align-items: center;
  
        margin-top: 30px;
        margin-bottom: 16px;
      }
  
      p#title {
        font-weight: bold;
      }
  
  
      p#subtitle {
        margin-top: -16px;
        font-size: 17px;
      }
      
      div#containerBox{
        border: 1px solid;
        border-color: #000;
        display: flex;
        flex-direction: column;
        padding: 4px;
        margin-right: 60px;
      }
  
      div#row{
        display: flex;
        flex-direction: row;
  
        align-items: center;
  
        margin-bottom: 8px;
      }
  
      div#header {
        text-align: center;
        margin-top: 24px;
      }
  
      img#logo{
        width: 225px;
        height: 75px;
        
        margin-right: 50px;
      }
      
      p#cpm{
        font-size: 18px;
        font-weight: bolder;
        margin-bottom: -8px;
      }
      Text {
        margin-bottom: 4px;
      }
  
      BoldText {
        font-weight: bold;
      }
  
      SimpleText {
        margin-top: 16px;
        margin-bottom: 4px;
      }
  
      div#rowSpace{
        display: flex;      
        justify-content: space-between;
        margin-right: 150px;
      }
  
      div#boxContainer {
        border: 1px solid;
        border-color: #000;
  
        display: flex;
        flex-direction: column;
        padding: 4px;
  
        
        margin-right: 60px;
        margin-top: 16px;
      }
  
      TextAuth#bold {
        text-align: center;
        margin-bottom: 24px;
      }
  
      div#rowAuth {
        display: flex;
        flex-direction: row;
        justify-content: center;
  
        padding: 8px 8px 16px 16px;
      }
  
      div#coll{
        display: flex;
        flex-direction: column;
        
        margin-right: 4px;
      }
  
      TextTest {
        font-size: 14px;
        text-align: center;
      }
  
    </style>
    <title>Document</title>
  </head>
  <body>
    <div id="container">
      <p id="title">Recomendamos a impressão desse Comprovante</p>
      <P id="subtitle">Por tanto, utilize a opção da impressão de seu browser</P>
    </div>
    <div id="containerBox">
      <div id="row">
        <img id="logo"
        src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Banco_Bradesco_logo_%28horizontal%29.png" />
        <div id="header">
          <p id="cpm" >Comprovante Pix</p>
          <p>Transferência para chave Pix</p>
        </div>
      </div>
      <Text>
        Data e hora: <BoldText>05/07/2022 - 12:43:35</BoldText>
      </Text>
      
      <Text>
        Número de Controle: <BoldText>D34234683465345684A3236QFBouX</BoldText>
      </Text>
      
      <SimpleText>DADOS DA CONTA</SimpleText>
  
      <Text>
        Nome: <BoldText>Fulano de Tal</BoldText>
      </Text>
      
      <Text>
        CPF/CNPJ: <BoldText>***.342.347-**</BoldText>
      </Text>
  
      <Text>
        Instituição: <BoldText>Banco Bradesco S.A.</BoldText>
      </Text>
  
      <SimpleText>DADOS DE QUEM RECEBEU</SimpleText>
  
      <Text>
        Nome: <BoldText>João Ninguem</BoldText>
      </Text>
  
      <Text>
        CPF/CNPJ: <BoldText>***.874.278-**</BoldText>
      </Text>
  
      <Text>
        Instituição: <BoldText>BCO C6 S.A.</BoldText>
      </Text>
  
      <Text>
        Chave: <BoldText>21 99999-9999</BoldText>
      </Text>
  
      <SimpleText>DADOS DA TRANSFERÊNCIA</SimpleText>
  
      <Text>
        Valor: <BoldText>R$ 2.500,00</BoldText>
      </Text>
  
      <Text>
        Tarifa: <BoldText>R$ 0,00</BoldText>
      </Text>
  
      <div id="rowSpace">
        <Text>Descrição: </Text>
        <Text>Identificador: </Text>
      </div>
  
      <Text>
        Data e hora: <BoldText>05/07/2022 - 12:43:35</BoldText>
      </Text>
  
      <Text>
        Debitado da: <BoldText>Corrente</BoldText>
      </Text>
      <Text>Transação concluída pelo Bradesco Celular</Text>
    </div>
  
    <div id="boxContainer">
      <TextAuth id="bold">AUTENTICAÇÃO</TextAuth>
      <div id="rowAuth">
        <div id="coll">
          <TextTest>fd7ksrbd</TextTest>
          <TextTest>xk8Delq</TextTest>
          <TextTest>pzMWR@rb</TextTest>
        </div>
        <div id="coll">
          <TextTest>NSYJcdOJ</TextTest>
          <TextTest>Nkvwubfz</TextTest>
          <TextTest>QGtVkia</TextTest>
        </div>
        <div id="coll">
          <TextTest>1@aToW5S</TextTest>
          <TextTest>dKthAMuq</TextTest>
          <TextTest>Rk*d29a*</TextTest>
        </div>
        <div id="coll">
          <TextTest>fscNaPC8</TextTest>
          <TextTest>nk4*r2#j</TextTest>
          <TextTest>SLf?1Zei</TextTest>
        </div>
        <div id="coll">
          <TextTest>*gV0DUx3</TextTest>
          <TextTest>OQzwRMAI</TextTest>
          <TextTest>Ya6HnwyP</TextTest>
        </div>
        <div id="coll">
          <TextTest>qweXRLAr</TextTest>
          <TextTest>J1gEUVxd</TextTest>
          <TextTest>P40QdpZT</TextTest>
        </div>
        <div id="coll">
          <TextTest>uCfMeLG</TextTest>
          <TextTest>rSNrs?da</TextTest>
          <TextTest>63 87720</TextTest>
        </div>
        <div id="coll">
          <TextTest>v2X#kd@P</TextTest>
          <TextTest>*rAYqXTq</TextTest>
          <TextTest>4721382</TextTest>
        </div>
      </div>
    </div>
  </body>
  </html>
  `;

  const printToFile = async () => {
    // On iOS/android prints the given html. On web prints the HTML from the current page.
    const { uri } = await Print.printToFileAsync({
      html,
    });
    console.log("File has been saved to:", uri);
    await shareAsync(uri, { UTI: ".pdf", mimeType: "application/pdf" });
  };

  return (
    <>
      <SafeArea />
      <SafeContainer>
        <Ionicons name="chevron-back" size={35} color="#fff" />
        <Div>
          <SafeTitle>Pix</SafeTitle>
        </Div>
      </SafeContainer>
      <ScrollView style={{ marginTop: 2 }}>
        <Container>
          <GreenContainer>
            <Ionicons name="checkbox-outline" size={35} color="#2FD268" />
            <TextGreen>Tranferência concluída.</TextGreen>
          </GreenContainer>
          <SimpleText>DADOS DA CONTA</SimpleText>
          <CampoText>Nome</CampoText>
          <DadoText>João Ninguem</DadoText>

          <CampoText>CPF</CampoText>
          <DadoText>***.543.434-**</DadoText>

          <CampoText>Instituição</CampoText>
          <DadoText>Banco Bradesco S.A.</DadoText>

          <SimpleText>DADOS DE QUEM VAI RECEBER</SimpleText>

          <CampoText>Nome</CampoText>
          <DadoText>Fulano de Tal</DadoText>

          <CampoText>CPF/CNPJ</CampoText>
          <DadoText>***.257.435-**</DadoText>

          <CampoText>Chave</CampoText>
          <DadoText>(21) 99999-9999</DadoText>

          <SimpleText>DADOS DA TRANSFERÊNCIA</SimpleText>

          <CampoText>Valor</CampoText>
          <DadoText>R$ 5.000,00</DadoText>

          <CampoText>Nome</CampoText>
          <DadoText>João Ninguem</DadoText>

          <CampoText>Data do débito</CampoText>
          <DadoText>05/07/2022</DadoText>

          <CampoText>Debitar da</CampoText>
          <DadoText>Conta-Corrente</DadoText>

          <CampoText>Tarifa</CampoText>
          <DadoText>R$ 0,00</DadoText>

          <CampoText>Identificação</CampoText>
          <DadoText>W3324244345453454354EWWoxW</DadoText>

          <LineContainer />

          <MenuPix>
            <Button>
              <BackgroundIcon>
                <Ionicons name="document-outline" size={30} color="#fff" />
              </BackgroundIcon>

              <TextButton>Ir para o extrato Pix</TextButton>
            </Button>

            <Button>
              <BackgroundIcon>
                <Ionicons name="document-text-outline" size={30} color="#fff" />
              </BackgroundIcon>

              <TextButton>Fazer nova transferência Pix</TextButton>
            </Button>

            <Button onPress={() => printToFile()}>
              <BackgroundIcon>
                <Ionicons name="document-text-outline" size={30} color="#fff" />
              </BackgroundIcon>

              <TextButton>Comprovante</TextButton>
            </Button>
          </MenuPix>

          <LineContainer />

          <ButtonInicio>
            <TextInicio>Início</TextInicio>
          </ButtonInicio>

          <ButtonFinish>
            <TextFiinish>Encerrar sessão</TextFiinish>
          </ButtonFinish>
        </Container>
      </ScrollView>
    </>
  );
};

export default Comprovante;
