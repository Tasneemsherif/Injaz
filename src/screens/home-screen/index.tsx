import Loader from "@/components/shared/loader"
import SafeAreaWrapper from "@/components/shared/safe-area-wrapper"
import Task from "@/components/tasks/task"
import TaskActions from "@/components/tasks/task-actions"
import { fetcher} from "@/services/config"
import useUserGlobalStore from "@/store/useUserGlobalStore"
import { ICategory, ITask } from "@/types"
import { getGreeting, ICON_SET } from "@/utils/helpers"
import { AnimatedText, Box, Text } from "@/utils/theme"
import { format } from "date-fns"
import React, { useEffect, useState } from "react"
import { FlatList } from "react-native"
import { ZoomInEasyDown, ZoomOutEasyDown } from "react-native-reanimated"
import useSWR from "swr"
import axiosInstance, { INJAZ_TOKEN_NAME } from "@/services/config"; // Import your axios instance and token name
import * as SecureStore from "expo-secure-store"
import { Image } from "react-native"
import ChartComponent from "@/components/tasks/ChartComponent"
import CreateNewList from "@/components/categories/create-new-list"
import Category from "@/components/categories/category"
const injaz = require('@/asset/injazRB.png');
const quote = require('@/asset/qoute5.jpg');

const today = new Date()

const greeting = getGreeting({ hour: new Date().getHours() })

const HomeScreen = () =>{


const { user, updateUser } = useUserGlobalStore()
 const {
    data: tasks,
    isLoading,
    mutate: mutateTasks,
  } = useSWR<ITask[]>("tasks/", fetcher)

  if (isLoading || !tasks) {
    return <Loader />
  }
//   useEffect(() => {
//   updateUser(null)
//   return() => {}
// },[])
  
     return (
    <SafeAreaWrapper>
      <Box flex={1} mx="4" >
        <Image source = {injaz} style = {{  width: 50  , height: 50, }}resizeMode="contain" 
        />
        <Box>
        
        <AnimatedText
          variant="textXl"
          fontWeight="500"
          entering={ZoomInEasyDown.delay(500).duration(700)}
          
        >
          Good {greeting} {user?.name} {ICON_SET.wavinghand}
        </AnimatedText>
        {/* <Text
          variant="textXl"
          fontWeight="500"
          textAlignVertical="center"
        >
          {user?.name} {ICON_SET.wavinghand}
        </Text> */}
        </Box>
        {/* <ChartComponent /> */}
        {/* <Image source={quote} style= {{width: 350, height: 150, alignItems: "center", alignContent:"stretch"}}/> */}
         
        
<Box height={13} />
        <Text variant="textXl" fontWeight="500" color="gray650">
          It’s {format(today, "eeee, LLL dd")} 

          
        </Text>
        
        <Box height={26} />
        <TaskActions categoryId="" />
        <Box height={26} />
        <Box flexDirection="row" >
        <Text variant="textXl" fontWeight="500" color="primary">
          YOU 
          </Text>
        <Text variant="textXl" fontWeight="500">
         {} have {tasks.length} tasks {ICON_SET.flexedBiceps}
        </Text>
        
        </Box>
        <Box height={26} />
        <FlatList
          data={tasks}
          renderItem={({ item }) => (
            <Task task={item} mutateTasks={mutateTasks} />
          )}
          ItemSeparatorComponent={() => <Box height={14} />}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item._id}
        />
      </Box>
    </SafeAreaWrapper>
  )
}

export default HomeScreen