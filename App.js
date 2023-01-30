import { StyleSheet, SafeAreaView, StatusBar, Platform, View, Text } from 'react-native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';

const App = () => {
  return (
    <>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <Text>Welcome to MealsToGo</Text>
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
  container: {
    flex: 1,
    padding: 16,
  },
});

export default App;
