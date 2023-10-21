import { NavigationContainer } from "@react-navigation/native"
import React, { useEffect } from "react"
import AppStackNavigator from "./app-stack-navigator"
import AuthStackNavigator from "./auth-stack-navigator"
import useUserGlobalStore from "@/store/useUserGlobalStore"

const Navigation = () => {
 const {user} = useUserGlobalStore();
  
//  useEffect(() => {
//       updateUser(null)
//       return () => {}
//       },[])
 
  return (
    <NavigationContainer>
            {user ? <AppStackNavigator /> : <AuthStackNavigator />}

    </NavigationContainer>
  )
}

export default Navigation