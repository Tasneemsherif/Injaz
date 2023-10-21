import Loader from "@/components/shared/loader"
import NavigateBack from "@/components/shared/navigate-back"
import SafeAreaWrapper from "@/components/shared/safe-area-wrapper"
import Task from "@/components/tasks/task"
import { fetcher } from "@/services/config"
import { ITask } from "@/types"
import { Box, Text } from "@/utils/theme"
import React from "react"
import { FlatList } from "react-native"
import useSWR from "swr"

const TodayScreen = () => {
  const {
    data: tasks,
    isLoading: isLoadingTasks,
    mutate: mutateTasks,
  } = useSWR<ITask[]>(`tasks/today`, fetcher,
  {
    refreshInterval: 1000,
  })

  if (isLoadingTasks || !tasks) {
    return <Loader />
  }

  return (
    <SafeAreaWrapper>
      <Box flex={1} mx="4">
        <Box height={16} />
        <Box flexDirection="row">
          <Text variant="text3Xl" fontWeight="700" mb="2" mt="2" color="primary">
            Today
          </Text>
        </Box>
        <Box height={16} />

        <FlatList
          data={tasks}
          renderItem={({ item, index }) => {
            return <Task task={item} mutateTasks={mutateTasks} />
          }}
          ItemSeparatorComponent={() => <Box height={14} />}
          keyExtractor={(item) => item._id}
        />
      </Box>
    </SafeAreaWrapper>
  )
}

export default TodayScreen