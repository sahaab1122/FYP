import React from 'react'
import { Animated, Dimensions, Image, View } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';

export const Carousal = ({ images, width, height, active, inActive }) => {

    const anim = new Animated.Value(0)

    const flatList = React.useRef()

    const defaultWidth = '100%'
    const defaultHeight = 280
    const totalWidth = Dimensions.get('window').width;

    const Dot = ({ offset }) => {
        const color = anim.interpolate({
            inputRange: [offset - totalWidth, offset, offset + totalWidth],
            outputRange: [inActive, active, inActive],
        })

        return (
            
            <TouchableOpacity onPress={() => flatList.current.scrollTo({ x: offset, animated: true })} style={{ marginHorizontal: 5 }}  >
                <Animated.View style={{ backgroundColor: color, width: 40, height: 2, borderRadius: 1 }} />
            
            </TouchableOpacity>

        )
    }

    const animate = (val) => {
        Animated.timing(anim, {
            toValue: val,
            duration: 0,
            useNativeDriver: false
        }).start()
    }


    return (
        
        <View style={{ width: totalWidth, height: height, }}>
            
            <Animated.ScrollView horizontal pagingEnabled style={{ height: '100%', }}
                scrollEventThrottle={16}
                // onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: anim } } }], { useNativeDriver: false, })}
                onScroll={val => animate(val.nativeEvent.contentOffset.x)} showsHorizontalScrollIndicator={false}
                ref={flatList} // keyExtractor={(item, index) => index.toString()} data={images}

            >
                {
                    images.map((img, index) =>
                        <Image key={index} resizeMode='stretch' source={img} style={{ width: totalWidth, height: defaultHeight, }} />
                    )
                }

            </Animated.ScrollView>
            <View style={{ flexDirection: 'row', width: '100%', height: 50, alignItems: 'center', bottom: 0, justifyContent: 'center', position: 'absolute' }} >
                {
                    images.map((_, index) =>
                        <Dot offset={index * totalWidth} key={index} />
                    )
                }
            </View>
            
            
        </View>
    );
}