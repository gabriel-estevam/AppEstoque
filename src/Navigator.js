import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/FontAwesome5'

import Home from './screens/Home/index';
import WareHouse from './screens/WareHouse/index';

const Tab = createBottomTabNavigator();

function Navigator() {
    return (
        <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size = 20 }) => {
             if(route.name === 'Home') {
                return <Icon name='home' color={color} size={size}/>
            }
            else if (route.name === 'WareHouse') {
                return <Icon name='boxes' color={color} size={size}/>
            }

            },

            tabBarActiveTintColor: '#00a6fb',
            tabBarInactiveTintColor: 'gray',
          })}
        >
          <Tab.Screen name="Home" component={Home}  options={{
            title: 'Home'
          }}/>
          <Tab.Screen name="WareHouse" component={WareHouse} options={{
            title: 'Estoque Armazem'
          }} />
        </Tab.Navigator>
      </NavigationContainer>
    );
};

export default Navigator;