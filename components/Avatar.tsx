import React, {FC} from "react";
import {View, Text, Image} from 'react-native';
import tailwind from "tailwind-rn";

type Avatar = {
    source: string,
}

const Avatar = () => {
    return (
        <View style={tailwind('items-end')}>
            <Image 
                style={tailwind('w-24 h-24 mr-2 rounded-full')}
            source={{
                uri: 'https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ec595d45f39760007b05c07%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D989%26cropX2%3D2480%26cropY1%3D74%26cropY2%3D1564'
            }} />
        </View>
    )
}

export default Avatar; 