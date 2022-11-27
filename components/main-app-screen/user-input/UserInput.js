import React from 'react';
import ShowTextButton from '../output-render/ShowTextButton';
import { StyleSheet, View, TextInput } from 'react-native';

export default function UserInput() {
  const [text, setText] = React.useState("")
  
  return (
    <View>
      <TextInput 
        style={styles.input} 
        onChangeText={setText}
        placeholder={"Enter Text Here"}
        keyboardType={"Letter"}
      />
      <ShowTextButton text={text} shouldShow={false}/>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontStyle: "HelveticaNeue-Light",
    fontWeight: 300,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    textAlignVertical: "top",
    fontFamily: "Roboto",
    fontWeight: "300",
  },
  input: {
    height: 40,
    width: 200,
    margin: 22,
    borderWidth: 1,
    padding: 10,
  }
});