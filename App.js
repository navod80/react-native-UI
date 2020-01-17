import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { createStore, combineReducers } from 'redux';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import Background from './components/backgroundImage';
import BackButton from './components/backButton';

// const fetchFonts = () => {
//     return Font.loadAsync({
//       'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
//       'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
//     })
//   }

const App = () => {
  // const [fontLoaded, setFontLoaded] = useState(false);
  
  // if(!fontLoaded){
  //   return <AppLoading startAsync={fetchFonts} onFinish={() => setFontLoaded(true)} />
  // }
// const fetchFonts = () => {
//   setFontLoaded(true);
//   return Font.loadAsync({
//     'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
//     'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
//   })
// }

// useEffect(() => {
//   fetchFonts();
// },[]);

  return (
    <View>
      <Background />
      <View><BackButton /></View>
      </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
