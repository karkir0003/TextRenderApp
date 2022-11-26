import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import UserInput from './components/main-app-screen/user-input/UserInput';

export default function App() {
  return (
    <View style={styles.container}>
      <UserInput/>
      {/* <Text>Hello World! Welcome to React Native</Text> */}
      <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#00BCD4" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
