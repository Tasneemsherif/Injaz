import SafeAreaWrapper from "@/components/shared/safe-area-wrapper"
import { AuthScreenNavigationType, WelcomeParamList, WelomeScreenNavigationType } from "@/navigation/types"
import {Box, Text} from "@/utils/theme"
import { useNavigation } from "@react-navigation/native"
import { LinearGradient } from "expo-linear-gradient"
import React from 'react'
import Button from "@/components/shared/Button"
const rockett = require('@/asset/rocket.png');
const injaz = require('@/asset/injazRB.png');
const topImage = require ("@/asset/Capture13-.png")
import { Image, useWindowDimensions } from "react-native"

import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedRef,
  useAnimatedStyle,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated'
import WelcomeStackNavigator from "@/navigation/welcome-stack-navigator"


const FirstWelcomeScreen = () => {
const navigation = useNavigation <WelomeScreenNavigationType<"FirstWelcomeScreen">>() 
    const navigateToWelcome2Screen =() => {
        navigation.navigate("SecondWelcomeScreen")
    }


  
    // const navigation = useNavigation <WelcomeStackNavigator<"Welcome1">>
    // () 
    // const navigateToSignInScreen =() => {
    //     navigation.navigate("Welcome2")
    // }
    //  const navigateToSignUpScreen =() => {
    //     navigation.navigate("SignUp")
    // }

    return (
        <SafeAreaWrapper> 
        <LinearGradient  colors={[
          "#ffffff",
          "#fcecff",
          "#f8daff",
          "#fae2ff",
          "#fae2ff",
          "#ffffff",
        ]}
        style = {{flex: 1}}>
        
        <Box flex={1} justifyContent="center"> 
        <Box alignItems="center" >
            <Image source = {topImage}
            style = {{  width: 350,
                  height: 250, }}/>
            </Box>
        <Box alignItems="center" mb="3.5">
            <Image source = {injaz}
            style = {{  width: 250,
                  height: 150, }}/>
            </Box>
             
            <Text textAlign="center" variant="textXl" fontWeight="600" >Injaz is designed to help you better manage your task making it easier
        than ever to boost productivity!</Text>
        <Box my="3.5" mx="10" mt="10">
            <Button
              label="Start achieving 💫" 
              onPress={navigateToWelcome2Screen}
            />
          </Box>
            
        </Box>
        </LinearGradient>
        </SafeAreaWrapper> 
    )
}

export default FirstWelcomeScreen