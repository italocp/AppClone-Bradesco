import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const GradientLinear = ({ children }) => {
  return (
    <LinearGradient colors={["#F31C5B", "#DF1C42", "#B81a6e"]}>
      {children}
    </LinearGradient>
  );
};

import {
  MenuContainer,
  Headers,
  TextHeader,
  UserHearder,
  UserRow,
  UserRowLeft,
  UserText,
  BorderLine,
  CashContainer,
  CashLeft,
  CashText,
  CashIconsRow,
  CashAmount,
  CashBold,
  CashRight,
  LineBorder,
  CashExctrate,
} from "./styles";

const Header = () => {
  return (
    <GradientLinear>
      <MenuContainer>
        <Headers>
          <Ionicons name="menu-outline" size={30} color="#fff" />
          <TextHeader>bradesco</TextHeader>
          <Ionicons name="notifications-outline" size={25} color="#fff" />
        </Headers>

        <UserHearder>
          <UserRow>
            <UserRowLeft>
              <Ionicons name="person-outline" size={25} color="#fff" />
              <UserText>Olá, Tiago</UserText>
            </UserRowLeft>

            <Ionicons name="enter-outline" size={25} color="#fff" />
          </UserRow>

          <BorderLine />
        </UserHearder>

        <CashContainer>
          <CashLeft>
            <CashText>Meu saldo disponível</CashText>
            <CashIconsRow>
              <CashAmount>
                R$ <CashBold>7.345,30</CashBold>
              </CashAmount>
              <Ionicons name="eye-outline" size={20} color="#fff" />
            </CashIconsRow>
          </CashLeft>

          <CashRight>
            <CashIconsRow>
              <CashExctrate>Ver extrato</CashExctrate>
              <Ionicons name="chevron-forward-outline" size={20} color="#fff" />
            </CashIconsRow>
            <LineBorder />
          </CashRight>
        </CashContainer>
      </MenuContainer>
    </GradientLinear>
  );
};

export default Header;
