import React from "react";
import {Text, View, StyleSheet} from 'react-native';

const Stats = () => {
    return (
        <View style={styles.three}>
            <Text>Height 5'11''</Text>
            <Text>Weight 170 </Text>
            <Text>Primary Position</Text>
            <Text>Secondary Position</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    three: {
        backgroundColor: "purple",
        alignContent: "center",
        marginTop: 15,
        flex: 1
    },
})

export default Stats;