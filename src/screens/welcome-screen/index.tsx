import SafeAreaWrapper from "@/components/shared/safe-area-wrapper"
import { AuthScreenNavigationType, HomeScreenNavigationType, HomeStackParamList} from "@/navigation/types"
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
import ImageSlider from "@/components/shared/listItem"

const WelcomeScreen = () => {
  
    const navigation = useNavigation<AuthScreenNavigationType<"Welcome">>() 
    const navigateToSignInScreen =() => {
      navigation.navigate("SignIn")
    }
     const navigateToSignUpScreen =() => {
        navigation.navigate("SignUp")
    }

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
        <Box alignItems="center" mb="3.5" mt="3">
            <Image source = {injaz}
            style = {{  width: 150,
                  height: 100, }}/>
            </Box>
             
            <Text textAlign="center" variant="textXl" fontWeight="600" >Injaz is designed to help you better manage your task making it easier
        than ever to boost productivity!</Text>
        <Box my="3.5" mx="10" mt="10">
            <Button
              label="Start achieving 💫" 
              onPress={navigateToSignUpScreen}
            />
          </Box>
            
        </Box>
        </LinearGradient>
        </SafeAreaWrapper> 
    )
}

export default WelcomeScreen