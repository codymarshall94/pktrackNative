import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Main from './components/MainComponent';
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading'; 

const getFonts = () => {
  return Font.loadAsync({
    'mainText': require('./assets/fonts/Poppins-Regular.ttf')
  })
}

export default function App() {

  const [fontsLoaded, setFontsLoaded] = useState(false);

  if(fontsLoaded){
    return(
      <View style={styles.container}>
      <Main />
      </View>
    );
  }else {
    return(
      <AppLoading 
        startAsync={getFonts}
        onFinish={()=> setFontsLoaded(true)} 
        onError={() => console.log('error')}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50
  },
});
