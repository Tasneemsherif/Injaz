import { Box, Text } from '@/utils/theme';
import React from 'react';
import { Image, StyleSheet } from 'react-native';
import Carousel from 'react-native-snap-carousel';

interface ImageSliderProps {
  data: Array<{ image: string; title: string }>;
}

const ImageSlider = ({string: Image, string: title }  ) => {
  const renderItem = ({ item }: { item: { image: string; title: string } }) => (
    <Box style={styles.item}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text>{item.title}</Text>
    </Box>
  );

  return (
    <Carousel
      data={data}
      renderItem={renderItem}
      sliderWidth={300}
      itemWidth={300}
      loop={true}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    width: 300,
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
});

export default ImageSlider;
