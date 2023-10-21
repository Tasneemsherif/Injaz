//import Button from "@/components/Button"
import {Button, FlatList} from "react-native"
import {Box, Text} from "@/utils/theme"
import { useNavigation } from "@react-navigation/native"
import React from 'react'
import { AuthScreenNavigationType } from "@/navigation/types"
import SafeAreaWrapper from "@/components/shared/safe-area-wrapper"
import Loader from "@/components/shared/loader"
import useSWR from "swr"
import { fetcher } from "@/services/config"
import { ICategory } from "@/types"
import Category from "@/components/categories/category"
import CreateNewList from "@/components/categories/create-new-list"
import { colors } from "@/utils/theme/colors"

const CategoriesScreen = () => {
  const { data, isLoading, error } = useSWR<ICategory[]>(
    "categories/",
    fetcher,
     {
      refreshInterval: 1000,
    }
  )
   if (isLoading) {
    return <Loader />
  }


    const renderItems = ({item}:{item:ICategory}) => (
            <Category category={item }/>
    )
    return (
        <SafeAreaWrapper>
        <Box flex={1} px="4">
            <Text variant="text3Xl" fontWeight="700" mb="2" mt="2" color="primary"> Categories </Text>
            <FlatList data ={data} showsVerticalScrollIndicator={false}  numColumns={1} 
            renderItem={renderItems} ItemSeparatorComponent={()=> <Box height={14} />}
            keyExtractor={(item)=> item._id}  />
            <CreateNewList />
        </Box>
        </SafeAreaWrapper> 

    )
}

export default CategoriesScreen