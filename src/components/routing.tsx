import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import SCREENS from '../literals/screens';
import WelcomeScreen from '../screens/WelcomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import SignUpScreen from '../screens/SignUpScreen';
import LoginScreen from '../screens/LoginScreen';

const Stack = createNativeStackNavigator();

const Routing = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={SCREENS.Welcome}>
        <Stack.Screen
          name={SCREENS.Welcome}
          component={WelcomeScreen}
          options={{
            title: 'Task Buddy is Here!!!',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name={SCREENS.SignUp}
          component={SignUpScreen}
          options={{
            title: "YoHoo let's Create Account",
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name={SCREENS.Login}
          component={LoginScreen}
          options={{
            title: 'Welcome Back Bruh!!!',
            headerTitleAlign: 'center',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routing;
