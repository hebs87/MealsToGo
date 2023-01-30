import React from 'react';
import { StyleSheet, SafeAreaView, StatusBar, Platform, View } from 'react-native';
import { Searchbar } from 'react-native-paper';

import RestaurantInfo from '../components/RestaurantInfo.component';

const RestaurantsScreen = () => {
  return (
    <>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.containerOne}>
          <Searchbar placeholder="Search" />
        </View>
        <View style={styles.containerTwo}>
          <RestaurantInfo />
        </View>
      </SafeAreaView>
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

export default RestaurantsScreen;
