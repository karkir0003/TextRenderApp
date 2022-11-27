import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Title() {
  return (
    <View>
      <Text style={styles.text}>Hello World! Welcome to the basic Text Render App. This app will pretty much echo whatever text you enter</Text>
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
    fontFamily: 'monospace',
    fontWeight: "300",
    fontSize: 20,
    maxWidth: 300
  }
});