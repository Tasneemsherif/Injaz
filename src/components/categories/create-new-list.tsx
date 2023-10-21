import {Box, Text, Theme} from "@/utils/theme"
import React from 'react'
import { Pressable } from "react-native"
import { CategoriesNavigationType } from "@/navigation/types"
import { useNavigation } from "@react-navigation/native"
import Fearther from "@expo/vector-icons/Feather"
import { useTheme } from "@shopify/restyle"

const CreateNewList = () =>{ 
    const theme = useTheme<Theme>()
    const navigation = useNavigation< CategoriesNavigationType>()
    const navigateToCreateNewCatergory = () => {
        navigation.navigate ("CreateCategory",{})
    }
    return (
        <Pressable onPress={navigateToCreateNewCatergory}>
        <Box p="3" bg="primary" borderRadius="rounded-5xl"
         flexDirection="row" alignItems="center" >
            <Fearther name="plus" size={24} 
            color={theme.colors.white} />
            <Text variant="textXl" fontWeight="500"
             color="white" ml="3">Create New Category</Text> 
        </Box>
        </Pressable>
    )}

export default CreateNewList 