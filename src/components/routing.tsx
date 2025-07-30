import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import SCREENS from '../literals/screens';
import WelcomeScreen from '../screens/WelcomeScreen';
import { NavigationContainer } from '@react-navigation/native';

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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routing;
