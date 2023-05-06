import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import { ActivityIndicator } from 'react-native';
import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence, getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, collection, getDocs, getDoc } from 'firebase/firestore';
import { Feather } from '@expo/vector-icons';
import { auth } from './Firebase'

import FavoriteCrypto from './src/Navigation/FavoriteCrypto';
import CalculatorPage from './src/Navigation/CryptoList';
import Login from './src/Navigation/Login';

const Tab = createBottomTabNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, [auth]);

  if (loading) {
    return null; // or a loading indicator
  }

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'My Cryptos') {
              iconName = 'home';
            } else if (route.name === 'Cryptos') {
              iconName = 'list';
            } 

            return <Feather name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
          <Tab.Screen name="My Cryptos" component={FavoriteCrypto} />
          <Tab.Screen name="Cryptos" component={CalculatorPage} />
        </Tab.Navigator>
      ) : (
        <Login />
      )}
    </NavigationContainer>
  );
}
