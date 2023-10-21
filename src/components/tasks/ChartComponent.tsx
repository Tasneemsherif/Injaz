import React from 'react';
import { View, StyleSheet } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import useSWR from "swr"
import { fetcher } from "@/services/config"
import { ITask } from "@/types"
import Loader from "@/components/shared/loader"


const { data, isLoading } = useSWR("tasks/completed", fetcher) 
const { data_tasks, isLoading_tasks } = useSWR("tasks/", fetcher)

const {
    data: task_completed,
    isLoading: isLoadingTasks,
    mutate: mutateTasks,
  } = useSWR<ITask[]>(`tasks/completed`, fetcher, {
    refreshInterval: 1000,
  })
  const {
    data: tasks,
    isLoading,
    mutate: mutateTasks,
  } = useSWR<ITask[]>("tasks/", fetcher)

  if (isLoading || !tasks) {
    return <Loader />
  }


  

const piData = [
  {
    name: 'Completed',
    population: data.length,  
    color: 'green',
    legendFontColor: 'black',
    legendFontSize: 15,
  },
  {
    name: 'All tasks',
    population: tasks.length || 10,
    color: 'red',
    legendFontColor: 'black',
    legendFontSize: 15,
  },
];

const ChartComponent: React.FC = () => {
  return (
    <View style={styles.container}>
      <PieChart
        data={piData}
        width={300}
        height={200}
        chartConfig={{
          backgroundGradientFrom: 'white',
          backgroundGradientTo: 'white',
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        }}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="15"
        absolute
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ChartComponent;