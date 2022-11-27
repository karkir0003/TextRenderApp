import React, {useState} from "react";
import { StyleSheet, Button, Pressable, Text, View } from "react-native";
import OutputRender from "./OutputRender";
export default function ShowTextButton(props) {
    const [showOutput, setShowOutput] = useState(props.shouldShow)
    function onClick() {
        setShowOutput(true);
    }
    function onClear() {
        setShowOutput(false);
    }
    return (
        <View>
            <Button title='Show Text Button' color="green" onPress={() => onClick()}/>
            <View style={styles.space} />
            <Button title="Clear" color="green" onPress={() => onClear()}/>
            {showOutput ?
            (
            <OutputRender data={props.text}/>
            ) : null}
        </View>
    )
}

const styles = StyleSheet.create({
    // button: {
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     paddingVertical: 12,
    //     paddingHorizontal: 32,
    //     borderRadius: 4,
    //     elevation: 3,
    //     backgroundColor: 'green',
    // }, want to use this style for pressable
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    space: {
        width: 20,
        height: 20,
    },
})