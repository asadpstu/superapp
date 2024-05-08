import React, { useRef, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from './Dashboard';
import { Text, TouchableOpacity, View } from 'react-native';

const Stack = createNativeStackNavigator();


const HomeScreen = ({navigation}: any) =>{
  return (
    <View>
      <Text>
          Child App
      </Text> 
      <TouchableOpacity onPress={()=>{navigation.navigate('DashboardScreen')}}>
        <Text>
          Explore More
        </Text>  
      </TouchableOpacity>
      
      
    </View>
  )
}

function App(): JSX.Element {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="DashboardScreen" component={Dashboard} 
          options={{ 
            headerShown: true,
            headerTitle: 'Child App Dashboard'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};



export default App;
