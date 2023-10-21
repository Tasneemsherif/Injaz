import React from 'react';
import { View } from 'react-native';
import ImageSlider from '@/components/shared/listItem'; // Import your ImageSlider component

const MyScreen: React.FC = () => {
  const imageData = [
    {
      image: require('@/asset/rocket.png'),
      title: 'Image 1',
    },
    {
      image: require('@/asset/rocket.png'),
      title: 'Image 2',
    },
    {
      image: require('@/asset/rocket.png'),
      title: 'Image 3',
    },
  ];

  return (
    <View>
      <ImageSlider data={imageData} />
    </View>
  );
};

export default MyScreen;
