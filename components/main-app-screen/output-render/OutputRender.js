import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function OutputRender(props) {
    return (
        <View>
           <Text style={styles.text}>{props.data}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        textAlignVertical: "top",
        fontFamily: 'monospace',
        fontSize: 20,
        fontWeight: "300",
    },
})