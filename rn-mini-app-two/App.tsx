/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
} from 'react-native';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.mainContainer}>
          <Text>Mini Two One</Text>
          <Button
            title="Two One"
            onPress={() => Alert.alert('App Two Title', 'App Two Message')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFF00',
    height : 100,
    width : 110,
    borderRadius: 10,
    margin : 10
  },
  scrollContainer: {
    height: 100,
  },
});

export default App;
