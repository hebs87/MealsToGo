import React from 'react';
import { StyleSheet, SafeAreaView, StatusBar, Platform, View, Text } from 'react-native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { Searchbar } from 'react-native-paper';

const App = () => {
  return (
    <>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.containerOne}>
          <Searchbar placeholder="Search" />
        </View>
        <View style={styles.containerTwo}>
          <Text>list</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  containerOne: {
    padding: 16,
    backgroundColor: 'green',
  },
  containerTwo: {
    flex: 1,
    padding: 16,
    backgroundColor: 'blue',
  },
});

export default App;
