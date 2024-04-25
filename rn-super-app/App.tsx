import React, {useRef, useState} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View, Button, TouchableOpacity, Image} from 'react-native';
import {Federated} from '@callstack/repack/client';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const App1 = React.lazy(() => Federated.importModule('rnminiappone', './App'));
const App2 = React.lazy(() => Federated.importModule('rnminiapptwo', './App'));
const Dashboard = React.lazy(() => Federated.importModule('rnminiappone', './Dashboard'));

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeScreen = ({navigation}: any) =>{
  return (
    <View>
      <Text>
          Login Screen..
      </Text> 
      <TouchableOpacity onPress={()=>{navigation.navigate('LoginSuccessScreen')}}>
        <Text>
          Go to Dashboard screen..
        </Text>  
      </TouchableOpacity>
      
    </View>
  )
}

const DashboardTabComponent = ({navigation}:any) =>{
  return (
    <View>
       <Text>
          User will be redirected here after successful login.
       </Text>

       <TouchableOpacity onPress={()=>{navigation.navigate('HomeScreen')}}>
        <Text style={style.logout}>
         (Logout)
        </Text>  
      </TouchableOpacity>
    </View>
  )
}

const ExploreTabComponent = ({navigation}:any) =>{

  return (
    <View>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={()=>{navigation.navigate('CP_ONE_DASHBOARD')}}>
            <View>
                <React.Suspense fallback={<Text>Loading App1</Text>}>
                  <View  style={{ 
                          width: 100, 
                          height: 100, 
                          borderWidth: 2, 
                          borderColor : '#FFF',
                          borderRadius: 20,
                          padding: 5,
                          margin:   10
                        }}>
                    <Image
                        style={{ 
                          width: 90, 
                          height: 90, 
                          
                        }}
                        source={require('./asset/image/partner/disney.png')}
                      />    
                  </View>
                
                </React.Suspense>
            </View>  
          </TouchableOpacity>

          <TouchableOpacity>
            <View>
                <React.Suspense fallback={<Text>Loading App1</Text>}>
                <View  style={{ 
                          width: 100, 
                          height: 100, 
                          borderWidth: 2, 
                          borderColor : '#FFF',
                          borderRadius: 20,
                          padding: 5,
                          margin: 10
                        }}>
                    <Image
                        style={{ 
                          width: 90, 
                          height: 90, 
                          
                        }}
                        source={require('./asset/image/partner/hbo.png')}
                      />    
                  </View>
                </React.Suspense>
            </View>  
          </TouchableOpacity>
        </View>
    </View>
  )
}

const SupportTabComponent = ({navigation}:any) =>{
  return (
    <View>
       <Text>
          Our content Support Screen
       </Text>
       <TouchableOpacity onPress={()=>{navigation.navigate('HomeScreen')}}>
        <Text style={style.logout}>
          (Logout)
        </Text>  
      </TouchableOpacity>
    </View>
  )
}

const LoginSuccessScreenWithBottomTabBar = ({ navigation }: any) =>{
  const [tab, setTab] = useState('home')
  const changeBackground = (tab : string) => {
    setTab(tab)
  }

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#8200d6",
        tabBarStyle: {
          height: 50,
        }
      }}
    >
      
      {/* First Tab.Screen is the default screen after login */}
      <Tab.Screen
        name="DashboardTab"
        component={DashboardTabComponent}
        options={{
          tabBarLabel: '',
          headerShown: false,
          tabBarIcon: ({ color }) => {
            return (
              <TouchableOpacity
                onPress={() => { changeBackground('home'); navigation.navigate('DashboardTab') }}
              >
                <View style={tab === 'home' ? style.selected : style.notSelected}>
                  <Image
                    style={{ width: 30, height: 30 }}
                    source={require('./asset/image/tabbar/dashboard.png')}
                  />
                </View>
              </TouchableOpacity>
            )
          },
        }}
      />
      <Tab.Screen
        name="ExploreTab"
        component={ExploreTabComponent}
        options={{
          tabBarLabel: '',
          headerShown: true,
          tabBarIcon: ({ color }) => {
            return (
              <TouchableOpacity
                onPress={() => { changeBackground('explore'); navigation.navigate('ExploreTab') }}
              >
                <View style={tab === 'explore' ? style.selected : style.notSelected}>
                  <Image
                    style={{ width: 30, height: 30, }}
                    source={require('./asset/image/tabbar/explore.png')}
                  />
                </View>
              </TouchableOpacity>
            )
          },
        }}
      />

      <Tab.Screen
        name="SupportTab"
        component={SupportTabComponent}
        options={{
          tabBarLabel: '',
          headerShown: false,
          tabBarIcon: ({ color }) => {
            return (
              <TouchableOpacity
                onPress={() => { changeBackground('support'); navigation.navigate('SupportTab') }}
              >
                <View style={tab === 'support' ? style.selected : style.notSelected}>
                  <Image
                    style={{ width: 40, height: 40, }}
                    source={require('./asset/image/tabbar/support.png')}
                  />
                </View>
              </TouchableOpacity>
            )
          },
        }}
      />


    </Tab.Navigator>
  );
}


// const Left = ({ navigation }: any) => {
//   return (
//     <TouchableOpacity >
//       <View style={{ height: 36, width: 36, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', borderRadius: 10, borderWidth: 0 }}>
//         <Image
//           style={{ width: 30, height: 30 }}
//           source={require('./asset/image/tabbar/dashboard.png')}
//         />
//       </View>
//     </TouchableOpacity>
//   );
// }
// const Right = ({ navigation }: any) => {
//   return (
//     <TouchableOpacity>
//       <View style={{ height: 36, width: 36, justifyContent: 'center', alignItems: 'center', borderRadius: 10, borderWidth: 0 }}>
//         <Image
//           style={{ width: 30, height: 30 }}
//           source={require('./asset/image/tabbar/close.png')}
//         />
//       </View>
//     </TouchableOpacity>
//   );
// }

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="LoginSuccessScreen" component={LoginSuccessScreenWithBottomTabBar} options={{ headerShown: false }} />
          <Stack.Screen 
            name="CP_ONE_DASHBOARD" 
            component={Dashboard} 
            options={({ navigation, route }) => ({
              headerShown: true,
              headerTitleAlign: 'left',
              title: "Content",
            })}
          />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

const style = StyleSheet.create({
  notSelected: {
    height: 50,
    width: 50,
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center'
  },
  selected: {
    height: 60,
    width: 60,
    backgroundColor: "#FFFFFF",
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 4,
  },
  logout:{
    width : 57,
    height:23,
    borderBottomColor: '#ffff00',
    backgroundColor: '#ff0000',
    color: '#FFFFFF',
    margin: 15,
  },
  playerWrapper: {
    position: 'relative',
    paddingtTop: '56.25%' 
  },
  reactPlayer: {
    position: 'absolute',
    top: 0,
    left: 0
  },
  video: {
    width: '80%',
    height: 200,
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10, // Adjust the vertical padding to change the button's height
    paddingHorizontal: 20,
    borderRadius: 5,
    height:40,
    width: 100,
    marginTop : 20
  },
  buttonPause: {
    backgroundColor: 'orange',
    paddingVertical: 10, // Adjust the vertical padding to change the button's height
    paddingHorizontal: 20,
    borderRadius: 5,
    height:40,
    width: 100,
    marginTop : 20
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
})

export default App;
