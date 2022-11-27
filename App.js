import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View} from 'react-native';
import UserInput from './components/main-app-screen/user-input/UserInput';
import Title from './components/main-app-screen/title-banner/Title';
import {React} from 'react';


export default function App() {
  return (
    
    <View style={styles.container}>
      <Title/>
      <UserInput/>
      <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#00BCD4" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
    // width: getScreenWidth(),
    // height: getScreenHeight()
  },
});
