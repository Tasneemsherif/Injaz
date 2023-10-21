import Button from "@/components/shared/Button"
import {Box, Text} from "@/utils/theme"
import { useNavigation } from "@react-navigation/native"
import React from 'react'
import { AuthScreenNavigationType } from "@/navigation/types"
import SafeAreaWrapper from "@/components/shared/safe-area-wrapper"
import Input from "@/components/shared/input"
import { loginUser } from "@/services/api"
import useUserGlobalStore from "@/store/useUserGlobalStore"
import { IUser } from "@/types"
import { Controller, useForm } from "react-hook-form"

const SignInScreen = () =>{
    const navigation = useNavigation <AuthScreenNavigationType<"SignIn">>() 
    const navigateToSignUpScreen =() => {
        navigation.navigate("SignUp") }
    
  const { updateUser } = useUserGlobalStore()
  const {
    control,
    handleSubmit,
    formState: { errors },} = useForm<Omit<IUser, "name">>({
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const onSubmit = async (data: Omit<IUser, "name">) => {
    try {
      const { email, password } = data
      const _user = await loginUser({
        email: email.toLowerCase(),
        password: password.toLowerCase(),
      })
      updateUser({
        email: _user.email,
        name: _user.name,
      })
    } catch (error) {}
  }

    return (
        <SafeAreaWrapper> 
    
        <Box flex={1} px="5.5" justifyContent="center">
        <Text variant="text3Xl" fontWeight="700" color="primary" textAlign="center">
          Welcome Back!
        </Text>
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
              error={errors.password}
              secureTextEntry
            />
          )}
          name="password"
        />
        <Box mt="5.5" />
        
          <Text color="violet500" textAlign="right" onPress={handleSubmit(onSubmit)}>
            forgot password?
          </Text>
        
        <Box mb="5.5" />

        <Button label="Login" onPress={handleSubmit(onSubmit)} uppercase />
          
        <Box flexDirection="row" justifyContent="center" >
                <Text variant="textBase" fontWeight="500" color="gray8" mt="3.5"> 
                Don't have an account?
                </Text>
                <Text variant="textBase" fontWeight="400" color="violet500" mt="3.5" ml="1" onPress={navigateToSignUpScreen}>
                Sign UP
                </Text>
            </Box>
        </Box>
        
        </SafeAreaWrapper> 

    )
}

export default SignInScreen