import React, { Suspense, useRef, useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';
import { Federated } from '@callstack/repack/client';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation, useRoute } from '@react-navigation/native';
import Spinner from 'react-native-loading-spinner-overlay';

const Dashboard = React.lazy(() => Federated.importModule('rnminiappone', './Dashboard'));
const MediaPlayer = React.lazy(() => Federated.importModule('rnsuperapp', './MediaPlayer'));

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeScreen = ({ navigation }: any) => {
  return (
    <View style={style.container}>
      <View style={style.middleContent}>
        <Text style={style.loginText}>
          Welcome to Grameenphone
        </Text>
        <Image
          style={{
            width: 150,
            height: 90,

          }}
          source={require('./asset/image/logo/gp.png')}
        />
      </View>
      <TouchableOpacity onPress={() => { navigation.navigate('LoginSuccessScreen') }} style={style.bottomButton}>
        <Text style={style.buttonText}>
          Login
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const SupportTabComponent = ({ navigation, route }: any) => {

  const statsData = route.params?.statsData;
  return (
    <View style={style.containerSupport}>
      <Text style={style.heading}>This is the support page.</Text>
      {statsData?.views &&
        <View style={style.statsContainer}>
          {statsData?.views && <Text style={style.stat}>Views: {statsData.views}</Text>}
          {statsData?.likes && <Text style={style.stat}>Likes: {statsData.likes}</Text>}
          {statsData?.shares && <Text style={style.stat}>Shares: {statsData.shares}</Text>}
          {statsData?.internetProvider && <Text style={style.stat}>IP Provider: {statsData.internetProvider}</Text>}
          {statsData?.random && <Text style={style.stat}>Random value for ChildApp: {statsData.random}</Text>}
          {statsData?.comment && <Text style={style.stat}>User comment: {statsData.comment}</Text>}
        </View>
      }
    </View>
  )
}

const ExploreTabComponent = ({ navigation, route }: any) => {

  return (
    <View>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={() => { navigation.navigate('CP_ONE_DASHBOARD') }}>
          <View>
            <React.Suspense fallback={<Text>Loading...</Text>}>
              <View style={{
                width: 120,
                height: 90,
                borderBottomWidth: 3,
                borderBottomColor: '#33AFFF',

                padding: 3,
                margin: 10
              }}>
                <Image
                  style={{
                    width: 110,
                    height: 80,

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

const DashboardTabComponent = ({ navigation }: any) => {
  return (
    <View style={style.loadingContainer}>
      <Text style={style.heading}>This is the dashboard page.</Text>
    </View>
  )
}

const LoginSuccessScreenWithBottomTabBar = ({ navigation, routes }: any) => {

  return (
    <Tab.Navigator  
    screenOptions={{
      tabBarActiveTintColor: "#33AFFF",
      tabBarStyle: {
        height: 60,
      },
      tabBarHideOnKeyboard : true,
    }}
    
    >

      {/* First Tab.Screen is the default screen after login */}
      <Tab.Screen
        name="DashboardTab"
        component={DashboardTabComponent}
        options={({ navigation }) => ({
          tabBarLabel: 'Home',
          headerShown: true,
          title: 'Dashboard',
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('HomeScreen');
              }}
              style={style.logoutButton}
            >
              <Text style={style.logoutButtonText}>Logout</Text>
            </TouchableOpacity>
          ),
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Image
              style={{ width: 20, height: 20, tintColor: focused ? '#33AFFF' : '#585E62' }}
              source={{
                uri:
                  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA6ElEQVR4nO2YwQ3DIAxFPRRkhkbZJ7BdYYWKLJBkgHiCVFHUQ8mhgroQNf9Jvlr++sYYiAAA4JyYR0cmzGTDmhgT9UMbp2s8d8ovs/a8poTyPCnHh3yf2QpJL34PE8Y43VZIavH6FY7HHAHrVxGRXbzfAwIIDjBaKA0c4j8bo8pxmyXC8ajvy626gPJYCKiMhQM/3W7LOyC83dYQUHiqWQh4Bw6kIn3oijvQD22WiK14G467C+6V2sCBqznQSP+klRagpJ+ApQVo6W8QCEgEDsSgha7WQkp+jJZ9UirpnzTp7RYAAOgMPAHP9980iQ9XfQAAAABJRU5ErkJggg==',
              }}
            />
            )
          },
          tabBarLabelStyle: {
            fontSize: 14, 
            marginBottom: 7
          },
        })}
      />

      <Tab.Screen
        name="ExploreTab"
        component={ExploreTabComponent}
        options={{
          tabBarLabel: 'Explore',
          headerShown: true,
          title: `Explore our partners`,

          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                // Perform logout action
                navigation.navigate('HomeScreen');
              }}
              style={style.logoutButton}
            >
              <Text style={style.logoutButtonText}>Logout</Text>
            </TouchableOpacity>
          ),
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Image
              style={{ width: 20, height: 20, tintColor: focused ? '#33AFFF' : '#585E62' }}
              source={{
                uri:
                  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABmUlEQVR4nO2Yz0rEMBDGB1w9LvgKIoLe25seWl/BJxA8ePAVetuZPRabgb5Cz+Jln0MR9urqQfBSL/6BSguy6ybYbW1NsuYHuZS0zZfJfJkEwLGuMBXfmnWwE6AZFwHduAjoxqoIMAppwHVNUALGkGUbIPC6gYAJRNEAjCKOhiDopn7m8Q4Yt8FIGHdA4NMPAp7hcrQHRpPgEQh6VQz+HRiPwQoEncpLZ3wOVsELzmSE4zClkKabLZypmeNk1XsxdM6X/TVxkLJvk/5xNASmq342vvl6noKg/c6/n4x2gfG2v5172Q67dBQeH0r22znyhvQBTBeqrsXJwVYeeuM88B/ywJvloU/lM/V38QwEvv2+dmpay8yblNzlgF9Cv1hs5TMpWZmo9X87FCAldznzCgGPymRlIwV4M1mAd2+qgHSlJRT42O8S6jyJfaoS+M+SuI41stGpzRvZxOJSAkWLoqx5MRdFg+pf2jGunP43B5rE5iMl23yoj22+Vslsv9hi268WVfRe2/SNE6AbFwHduAjoxvoIOGAlPgHzpJI27lJMpwAAAABJRU5ErkJggg==',
              }}
            />
            )
          },
          tabBarLabelStyle: {
            fontSize: 14, 
            marginBottom: 7
          },
        }}
      />

      <Tab.Screen
        name="SupportTab"
        component={SupportTabComponent}
        options={{
          tabBarLabel: 'Support',
          headerShown: true,
          title: 'Support',
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                // Perform logout action
                navigation.navigate('HomeScreen');
              }}
              style={style.logoutButton}
            >
              <Text style={style.logoutButtonText}>Logout</Text>
            </TouchableOpacity>
          ),
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Image
              style={{ width: 20, height: 20, tintColor: focused ? '#33AFFF' : '#585E62' }}
              source={{
                uri:
                  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFc0lEQVR4nO2Xe2zTVRTHf4DGt/GFZNDex+/3a3/tvf317daxrmN0Aze2dVLWPQQHGRlIGJ24ggGBDTFBk4myRCaJmZsEBxL/MEZlGkCDwUwSE/7QPwQTFSVoMGZlvDa55o51tt1m1m0dM+knOUl7m55zvufee+69gpAiRYoUKVJMIg6H406j0Z3nml+4w7OgtC3LXdLm9pS0Wh0LawAwY2G64nTm5eR6Ax+UBYJnm5o6+lpbj7OOjtMD1t7ezZqbP2Qbgs1/FpfUdGdmFTfLsvygMF2AED7kK6291N7+zVDS3LiIlpajrK3tVMz4vtbjzJtf/qkwHdCIBhNA9FRBYXUvr3LN6u3nC5ZUH8vK9u13pi+qd7mWrHdlFuzK9Qbe95etP/3itrevcQHubN8lUSTgtiYPMK2BiPwCRVJpNGbo+DpP0+sf+6//WBzzczOzCl9GMtkFMf1NKxK3cDuAIn0WYPL9PFnVjNcHkFQHQORnhOhiYSpBiFRDRM5gbJozUV8QEivE5LwG0yeEqUArU4lP/TzRqJs0n9iUDxH9QVGUB4QkMxMi0g2waflkOwaIvgYx3S8kEyjSpRDRz5LiG8K7+X7gM5wM/zO0omkNktRfMaarhSQBENmDJfVbIKm1POakOdZiWqxacnqL/MGbss52QUgSkt52sXhZkKlWTxhgWjQZPmdA0Vwh6W1ns70Vf2/eeYQh0XRDSBJINN3gMTzeqn5JbzunlWj5RGZipqS3HTDbF4aXr97Fivx1bCQBc+aY70NIVYScnDuixzUa8ki8QwjpAkVR5g70/0HTapW58QJKyxtY5apGptpyw5Jif5fnknD2smJvznD7ekM7OgcSL/ZvGCaAJw4wPQURbQGYfhFpgwDRFRCT52M9ls0CmLynRTQIEfkIYrobYLIPInIkXsBTFSG2cftB1rCjk/EcJJ31lYSSB8CQJiuOy/VbOwaSHk0AT5T38IHqYrrz1rotmwURORnf06FIVvHfeScD2Jg3OFYFRfLCaAL4Z56DrLf38JzGLABC01pPXuXVSPKjCYig0bjuAZicQMgIISQrAaKh6E3I3wgQ08PR65mPAUy/jhY6koBbe6LyCkCEd6axgSXzqyVl9SxGwLLgiAIkiWr52QAw9Q9W/6vZhNwPETkdc+mDxoKYImG6jguNHvtXQEOMAJ4Llsy7xywAiGoov3BVX7QAvh7jBWgkIvPKQ0iN/LsW0Wf4BQ9i+hZE9A+EyJpb1SeHoqvPZ4wLTEtz3DuSgEisiOUVruwDEm1I6IJlMGWGQ02Hh5xUrmwcJgBi8kZkPXNk2Tp7qMNg8h2/7/OpR4guiqv+FoBIXXzciICna15iocZDA/E2NR5mBpMrjBC1CImgMzg/L/LX9UcErGtoHS4A0nqAyTG+hLghZPRE320GRXYMKxCme2VZvms0AWs3vjlUuCJ/XZ/emN4lJIoomh/nB1h+Uc2157YeGHI4joNszD0cDQrgxmPmL6m5Lin2czwXYTzww0hWHJ2ibLkaWLGlb6pO4sCKLX08pqy3HwRAfXjijhGpznD7wrXBvUyUrZeFJCHKlsu1wRbmyi7t5TEnzTHv1XrF2aXTO36SdJax9+MEkWXbJp3B0aNTnEen4nEzqTDGHg1t3naGqul7hf8bjDHP2XM/XqCm9L/GvWFvB4yxWYyxxosXf+93Zy/qEXXmCmG6wJ+IqvXJTkdm4IQjI9YsTl/XxtA2b39//5cff9J102p39yhGx1phOmE05oR85a/fDFS/w4ZbG8vxll+32rPCFltWd8Kn7FSgEE/V4pKmKyMJWFrVyojqPQmhgoTpjEFdWK/aCg/Em8mcv4ffWIUUKVKkSJFCmBj/ANUqi7vGvLR4AAAAAElFTkSuQmCC',
              }}
            />
            )
          },
          tabBarLabelStyle: {
            fontSize: 14, 
            marginBottom: 7
          },
        }}
      />


    </Tab.Navigator>
  );
}

const DashboardScreen = () => {
  const navigation = useNavigation();
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Dashboard navigation={navigation} MediaPlayer={MediaPlayer} />
    </Suspense>
  );
};

const LoadingFallback = () => (
  <View style={style.loadingContainer}>
        <Spinner
          visible={true}
          textContent={'Please wait..'}
          textStyle={style.spinnerTextStyle}
          overlayColor="rgba(0, 0, 0, 0.9)"
          animation="fade"
          indicatorStyle={{
            position: 'absolute',
            top: '35%', 
            left: '32%', 
            width: 250, 
            height: 400, 
            borderRadius: 10, 
            justifyContent: 'center',
            alignItems: 'center',
            transform: [{ translateX: -50 }, { translateY: -50 }] // Center the spinner
          }}
        />
  </View>
);

function App(): JSX.Element {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="LoginSuccessScreen" component={LoginSuccessScreenWithBottomTabBar} options={{ headerShown: false }} />
          {/* <Stack.Screen 
            name="CP_ONE_DASHBOARD" 
            component={Dashboard} 
            options={({ navigation, route }) => ({
              headerShown: true,
              headerTitleAlign: 'left',
              title: "Content",
            })}
          /> */}
          <Stack.Screen
            name="CP_ONE_DASHBOARD"
            component={DashboardScreen}
            options={({ navigation, route }) => ({
              headerShown: false,
              headerTitleAlign: 'left',
              title: "Content",
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Suspense>
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
  logout: {
    width: 57,
    height: 23,
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
    height: 40,
    width: 100,
    marginTop: 20
  },
  buttonPause: {
    backgroundColor: 'orange',
    paddingVertical: 10, // Adjust the vertical padding to change the button's height
    paddingHorizontal: 20,
    borderRadius: 5,
    height: 40,
    width: 100,
    marginTop: 20
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  middleContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
  },
  loginText: {
    fontSize: 16,
    marginBottom: 100,
    color: '#33AFFF',
    borderBottomColor: '#33AFFF',
    borderBottomWidth: 4,
    width: '90%',
    textAlign: 'center',
    padding: 10
  },
  bottomButton: {
    marginBottom: 20,
    backgroundColor: '#33AFFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    width: '90%'
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center'
  },
  logoutButton: {
    marginRight: 10,
  },
  logoutButtonText: {
    fontSize: 16,
    color: '#FF0000', // Adjust the color as needed
  },
  spinnerTextStyle: {
    color: '#FFF'
  },
  containerSupport: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  statsContainer: {
    width: '100%',
    padding: 10,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  stat: {
    marginBottom: 5,
  },
})

export default App;
