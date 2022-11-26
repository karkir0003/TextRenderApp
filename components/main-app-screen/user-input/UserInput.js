import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function UserInput() {
  return (
    <View>
      <Text style={styles.text}>Hello World! Welcome to React Native</Text>
      {/* <StatusBar style="auto" /> */}
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
    justifyContent: 'center',
  },
  text: {
    textAlignVertical: "center",
    fontFamily: "Roboto",
    fontWeight: "300"
  }
});