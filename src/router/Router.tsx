import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../screens/home/HomeScreen';
import {ROUTES} from './routes';

export default function Router() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={ROUTES.HOME_SCREEN}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={ROUTES.HOME_SCREEN} component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
