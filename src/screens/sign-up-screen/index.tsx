//import {Button} from "react-native"
import {Box, Text} from "@/utils/theme"
import { useNavigation } from "@react-navigation/native"
import React from 'react'
import { registerUser } from "@/services/api"
import { IUser } from "@/types"
import { Controller, useForm } from "react-hook-form"

import { AuthScreenNavigationType } from "@/navigation/types"
import SafeAreaWrapper from "@/components/shared/safe-area-wrapper"
import Input from "@/components/shared/input"
import Button from "@/components/shared/Button"
const injaz = require('@/asset/injazRB.png');
import { Image, Pressable, ScrollView } from "react-native"

const SignUpScreen = () =>{

    const navigation = useNavigation <AuthScreenNavigationType<"SignUp">>() 
    const navigateToSignInScreen =() => {
        navigation.navigate("SignIn")
    }

  const { control,
     handleSubmit,
    formState: { errors },
      }
   = useForm<IUser>({
    defaultValues: {
      email: "",
      password: "",
    },
  })

     const onSubmit = async (data: IUser) => {
    try {
      const { email, name, password } = data
    
      await registerUser({
        email,
        name,
        password,
      })
      navigateToSignInScreen()
    } catch (error) {}
  }


    return (
        <SafeAreaWrapper> 
        <ScrollView>
        <Box flex={1} px="5.5" mt={"13"} >
            <Box alignItems="center" >
            <Text variant="text3Xl" fontWeight="900" color="primary" >Welcome to </Text>

            <Image source = {injaz} style = {{  width: 200,height: 100, }}/>
           
            <Text variant="textXl" fontWeight="700" mb="6" color="violet500">Achieving Starts here</Text>
            </Box>
            <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              label="Name"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Name"
              error={errors.name}
            />
          )}
          name="name"
        />
        <Box mb="6" />
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              label="Email"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Email"
              error={errors.email}
            />
          )}
          name="email"
        />
        <Box mb="6" />
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              label="Password"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Password"
              error={errors.name}
              secureTextEntry
            />
          )}
          name="password"
        />
                <Box mb="5.5" />
            <Button label= "Register" onPress={handleSubmit(onSubmit)}/>
            <Box flexDirection="row" justifyContent="center" >
                <Text variant="textBase" fontWeight="500" color="gray8" mt="3.5"> 
                Already have an account ?
                </Text>
                <Text variant="textXl" fontWeight="500" color="violet500" mt="3.5" ml="1" onPress={navigateToSignInScreen}>
                Sign in 
                </Text>
            </Box>
        </Box>
        </ScrollView>
        </SafeAreaWrapper> 

    )
}

export default SignUpScreen