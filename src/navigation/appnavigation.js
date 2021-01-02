import React from 'react';
import { StyleSheet, Text, View , Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";

import LandingScreen from "../screens/landingscreen"
import DrawerNavigation from "./drawernavigation"

const Stack = createStackNavigator();

const ApplicationNavigation = () => { 

  return ( 
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' >
          {/* <Stack.Screen name='Home' component={LandingScreen} 
                        options={{
                        title: 'Reminders',
                        headerStyle: {backgroundColor: '#9363db'},
                        header: ({ scene, previous, navigation }) => {
                            return (
                             <View style={{backgroundColor:"#9363db",width:"100%",height:80,flexDirection:"column"}}>
                                      <View style={{position:"absolute",top:40,marginLeft:10}}>
                                          <Text style={{color:"black",fontSize:20}}>Reminders</Text>
                                      </View>
                             </View>
                            );
                          }
                        }}
                    /> */}
            <Stack.Screen   name="Home"
                            component={LandingScreen}
                            options={{
                            headerTitle: "HARI STORES",
                            // headerLeft : () => (
                            //   <DrawerNavigation></DrawerNavigation>
                            // ),
                            }}
            />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default  ApplicationNavigation