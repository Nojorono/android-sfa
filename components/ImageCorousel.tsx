import React, { useRef, useState } from 'react';
import {
    View,
    FlatList,
    Image,
    Dimensions,
    StyleSheet,
    NativeScrollEvent,
    NativeSyntheticEvent,
} from 'react-native';

const { width } = Dimensions.get('window');

const images = [
    require('../assets/image1.jpg'),
    require('../assets/image2.jpg'),
    require('../assets/image1.jpg'),
];

const ITEM_WIDTH = width * 0.85;
const SPACING = 10;

export default function ImageCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const onScroll = ({ nativeEvent } : { nativeEvent: any }) => {
        const { contentOffset, layoutMeasurement } = nativeEvent;
        const index = Math.round(contentOffset.x / layoutMeasurement.width);
        setCurrentIndex(index);
    };

    return (
        <View>
            <FlatList
                data={images}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(_, index) => index.toString()}
                pagingEnabled={false}
                snapToInterval={ITEM_WIDTH + SPACING * 2}
                snapToAlignment="start"
                decelerationRate="fast"
                bounces={false}
                onScroll={onScroll}
                scrollEventThrottle={16}
                renderItem={({ item }) => (
                    <View style={styles.imageContainer}>
                        <Image source={item} style={styles.image} resizeMode="cover" />
                    </View>
                )}
            />

            <View style={styles.dotsContainer}>
                {images.map((_, index) => (
                    <View
                        key={index}
                        style={[
                            styles.dot,
                            currentIndex === index && styles.activeDot,
                        ]}
                    />
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    imageContainer: {
        width: ITEM_WIDTH,
        height: 200,
        marginHorizontal: SPACING,
        borderRadius: 12,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    dotsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 12,
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#bbb',
        marginHorizontal: 5,
    },
    activeDot: {
        backgroundColor: '#333',
        width: 10,
        height: 10,
    },
});
