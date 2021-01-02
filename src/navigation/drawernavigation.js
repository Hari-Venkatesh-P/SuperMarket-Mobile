import * as React from 'react';
import { Button, StyleSheet, Text, View, SafeAreaView,ScrollView,Dimensions} from 'react-native';
import { createDrawerNavigator, DrawerItems } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import ItemScreen from "../screens/itemscreen";
import LandingScreen from  "../screens/landingscreen"


const Drawer = createDrawerNavigator();

export default function DrawerNavigation(props) {

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="LandingScreen">
        <Drawer.Screen name="Home " component={LandingScreen} />
        <Drawer.Screen name="My Orders " component={ItemScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}