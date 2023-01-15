import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Task1 from '../screens/Task1';
import Task2 from '../screens/Task2';
import Home from '../screens/Home';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'Welcome', headerShown: false}}
        />
        <Stack.Screen
          name="Task1"
          component={Task1}
          options={{title: 'Task1', headerShown: false}}
        />
        <Stack.Screen
          name="Task2"
          component={Task2}
          options={{title: 'Task2', headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Routes;
