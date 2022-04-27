import React, { useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import SplashScreen from "react-native-splash-screen";

import {
  OnBoarding,
  SignIn,
  SignUp,
  ForgotPassword,
  Otp,
  MainLayout,
} from "./screens";

const Stack = createStackNavigator();

const App = () => {
  const [token, setToken] = useState("rwewfsf");

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={token == "" ? "OnBoarding" : "Home"}
      >
        <Stack.Screen name="OnBoarding" component={OnBoarding} />

        <Stack.Screen name="SignIn" component={SignIn} />

        <Stack.Screen name="SignUp" component={SignUp} />

        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />

        <Stack.Screen name="Otp" component={Otp} />

        <Stack.Screen name="Home" component={MainLayout} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
