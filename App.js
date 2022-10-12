import * as React from 'react';
import {View, Text, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../DemoProject/src/Home';
import NotificationScreen from '../DemoProject/src/Notification';
import ProfileScreen from '../DemoProject/src/Profile';
import ChartScreen from '../DemoProject/src/Chart';
import OrderScreen from '../DemoProject/src/Order';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        sceneContainerStyle={{backgroundColor: '#3B414A'}}
        style={{backgroundColor: 'red'}}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: () => (
              <Image
                source={require('./src/Homeicon.png')}
                style={{width: 20, height: 20, resizeMode: 'contain'}}
              />
            ),
            tabBarShowLabel: false,

            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Chart"
          component={ChartScreen}
          options={{
            tabBarIcon: () => (
              <Image
                source={require('./src/Charticon.png')}
                style={{width: 20, height: 20, resizeMode: 'contain'}}
              />
            ),
            tabBarShowLabel: false,
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Notification"
          component={NotificationScreen}
          options={{
            tabBarIcon: () => (
              <Image
                source={require('./src/Notificationicon.png')}
                style={{width: 20, height: 20, resizeMode: 'contain'}}
              />
            ),
            tabBarShowLabel: false,
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: () => (
              <Image
                source={require('./src/Profileicon.png')}
                style={{width: 20, height: 20, resizeMode: 'contain'}}
              />
            ),
            tabBarShowLabel: false,
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Order"
          component={OrderScreen}
          options={{
            tabBarIcon: () => (
              <Image
                source={require('./src/Profileicon.png')}
                style={{width: 20, height: 20, resizeMode: 'contain'}}
              />
            ),
            tabBarShowLabel: false,
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
