//import { Rect } from "react-native-safe-area-context";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React from "react"
import { AppStackParamList } from "./types"
import BottomTabNavigator from "./bottom-tab-navigator"
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from '@/components/shared/CustomDrawer';
import { NavigationContainer } from '@react-navigation/native';


const Stack = createNativeStackNavigator<AppStackParamList>()
const Drawer = createDrawerNavigator();


const AppStackNavigator = () => {

    return (
       
        <Stack.Navigator>
            <Stack.Screen
                name="Root"
                component={BottomTabNavigator}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
    

  )
}

export default AppStackNavigator