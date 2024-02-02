
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Movie from '../Home/MovieList/Movie';
import Detailpage from '../DetailScreen/DetailPage/Detailpage';


export default function Navigation() {

    const Stack= createNativeStackNavigator();

  return (
   <NavigationContainer>
    <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Movie}  options={{headerShown:false}} />
        <Stack.Screen name='DetailScreen' component={Detailpage} options={{headerShown:false}}/>
    </Stack.Navigator>
   </NavigationContainer>
  )
}