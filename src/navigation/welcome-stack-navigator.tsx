import SignInScreen from "@/screens/sign-in-screen"
import SignUpScreen from "@/screens/sign-up-screen"
import WelcomeScreen from "@/screens/welcome-screen"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React from "react"
import { AuthStackParamList, WelcomeParamList } from "./types"
import WelcomeScreen1 from "@/screens/fisrt-welcome-screen"
import WelcomeScreen2 from "@/screens/second-welcome-screen"
import AuthStackNavigator from "./auth-stack-navigator"
import FirstWelcomeScreen from "@/screens/fisrt-welcome-screen"
import SecondWelcomeScreen from "@/screens/second-welcome-screen"

const Stack = createNativeStackNavigator<WelcomeParamList>()

const WelcomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="FirstWelcomeScreen"
        component={FirstWelcomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SecondWelcomeScreen"
        options={{ headerShown: false }}
        component={SecondWelcomeScreen}
      />
      <Stack.Screen 
        name="Welcome"
              options={{ headerShown: false }}

        component={WelcomeScreen}
      />
    </Stack.Navigator>
  )
}

export default WelcomeStackNavigator