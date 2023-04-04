import { StatusBar } from 'expo-status-bar';
import { React } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

import GraphPage from './src/Navigation/GraphPage';
import CalculatorPage from './src/Navigation/CalculatorPage';


export default function App() {

  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'md-flash-outline';
          } else if (route.name === 'Calculator') {
            iconName = 'md-calculator-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },

        tabBarActiveTintColor: 'green',
        tabBarInactiveTintColor: 'gray',
      })}>
        <Tab.Screen name="Home" component={GraphPage} />
        <Tab.Screen name="Calculator" component={CalculatorPage} />
      </Tab.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
};