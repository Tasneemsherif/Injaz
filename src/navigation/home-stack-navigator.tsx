import SignInScreen from "@/screens/sign-in-screen"
import SignUpScreen from "@/screens/sign-up-screen"
import WelcomeScreen from "@/screens/welcome-screen"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React from "react"
import { AuthStackParamList, HomeStackParamList } from "./types"
import HomeScreen from "@/screens/home-screen"
import EditTaskScreen from "@/screens/edit-task"

const Stack = createNativeStackNavigator<HomeStackParamList>()

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
       <Stack.Screen
        name="EditTask"
        component={EditTaskScreen}
        options={{
          headerShown: false,
        }}
      />
      
    </Stack.Navigator>
  )
}

export default HomeStackNavigator