import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { propsNavigationStack } from "./models";

import Dashboard from "../../screens/Dashboard/Dashboard";
import Comprovante from "../../screens/Comprovante/Comprovante";

const { Navigator, Screen } =
  createNativeStackNavigator<propsNavigationStack>();

export default function () {
  return (
    <Navigator
      initialRouteName="Dashboard"
      screenOptions={{ headerShown: false }}
    >
      <Screen name="Dashboard" component={Dashboard} />
      <Screen name="Comprovante" component={Comprovante} />
    </Navigator>
  );
}
