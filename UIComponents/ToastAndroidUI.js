import React from 'react';
import { View, StyleSheet, ToastAndroid, Button, StatusBar } from 'react-native';

function ToastAndroidUI() {
  
  const showToast=()=> {
    ToastAndroid.show('Enviando...!', ToastAndroid.SHORT);
  }

  return (
    <View style={styles.container}>
      <Button title="Show Toast" onPress={showToast} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: StatusBar.currentHeight,
    backgroundColor: 'transparent',
    padding: 8,
  },
});


export default ToastAndroidUI;