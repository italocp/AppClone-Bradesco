import React from "react";
import { Ionicons } from "@expo/vector-icons";

import Header from "../../components/Header/Header";

import {
  ContainerBia,
  BiaRow,
  SearchContainer,
  SearchText,
  RedText,
  MicContainer,
  Container,
  ContainerRed,
  RedIcons,
  BackgroundIcon,
  TextIcon,
  ContainerCol,
  ContainerRow,
  ContentIcon,
  ContentText,
  ContainerPix,
  BackgroundIconPix,
  WhitePix,
  PixText,
  Base,
  TextBase,
} from "./styles";

const Dashboard = () => {
  return (
    <>
      <Header />
      <ContainerBia>
        <BiaRow>
          <SearchContainer>
            <SearchText>
              Fale com a <RedText>BIA</RedText>
            </SearchText>
            <Ionicons name="search" size={20} color="red" />
          </SearchContainer>
          <MicContainer>
            <Ionicons name="mic-outline" size={20} color="#fff" />
          </MicContainer>
        </BiaRow>
      </ContainerBia>
      <Container>
        <ContainerRed>
          <RedIcons>
            <BackgroundIcon>
              <Ionicons name="mic-outline" size={20} color="#fff" />
            </BackgroundIcon>
            <TextIcon>Meus Bancos</TextIcon>
            <Ionicons
              name="chevron-forward-outline"
              size={20}
              color="#F31C5B"
            />
          </RedIcons>

          <RedIcons>
            <BackgroundIcon>
              <Ionicons name="mic-outline" size={20} color="#fff" />
            </BackgroundIcon>
            <TextIcon>Meus Bancos</TextIcon>
            <Ionicons
              name="chevron-forward-outline"
              size={20}
              color="#F31C5B"
            />
          </RedIcons>
        </ContainerRed>

        <ContainerCol>
          <ContainerRow>
            <ContentIcon>
              <Ionicons name="card-outline" size={30} color="#F31C5B" />
              <ContentText>Tranferência</ContentText>
            </ContentIcon>

            <ContentIcon>
              <Ionicons name="card-outline" size={30} color="#F31C5B" />
              <ContentText>Pix</ContentText>
            </ContentIcon>
          </ContainerRow>

          <ContainerRow>
            <ContentIcon>
              <Ionicons name="card-outline" size={30} color="#F31C5B" />
              <ContentText>Tranferência</ContentText>
            </ContentIcon>

            <ContentIcon>
              <Ionicons name="card-outline" size={30} color="#F31C5B" />
              <ContentText>Pix</ContentText>
            </ContentIcon>
          </ContainerRow>

          <ContainerRow>
            <ContentIcon>
              <Ionicons name="card-outline" size={30} color="#F31C5B" />
              <ContentText>Tranferência</ContentText>
            </ContentIcon>

            <ContentIcon>
              <Ionicons name="card-outline" size={30} color="#F31C5B" />
              <ContentText>Pix</ContentText>
            </ContentIcon>
          </ContainerRow>
        </ContainerCol>
        <ContainerPix>
          <BackgroundIconPix>
            <Ionicons name="card-outline" size={30} color="#FFF" />
          </BackgroundIconPix>
          <WhitePix>
            <PixText>Pix: pague, receba e transfira gratuitamente!</PixText>
            <Ionicons name="chevron-forward-outline" size={20} color="#000" />
          </WhitePix>
        </ContainerPix>
        <Base>
          <TextBase> Mais serviços</TextBase>
          <Ionicons name="chevron-up-outline" size={20} color="#F31C5B" />
        </Base>
      </Container>
    </>
  );
};

export default Dashboard;
