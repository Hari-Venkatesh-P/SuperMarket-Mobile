import * as React from 'react';
import { Button, ScrollView, Text, View} from 'react-native';
import styles from "../styles/landingpage";

import Header from "../components/header";
import CustomImageSlider from "../components/imageslider"
import AddressMap from "../components/googlemap"

export default function LandingScreen({ navigation }) {
      return (
            <ScrollView>
                  <Header navigation={navigation}></Header>
                  <View style={styles.taglinecontainer}>
                        <Text style={styles.taglinetext}>
                              Quality you’d expect at prices you wouldn’t. Get the best in everything here .!
                        </Text>
                  </View>
                  <View >
                        <CustomImageSlider></CustomImageSlider>
                  </View>
                  <View style={styles.featurescontainer}>
                        <View >
                              <Text style={styles.featureheading}>  WHO WE ARE ?   </Text>
                        </View>
                        <View  style={{padding:10}}>
                              <Text><Text style={{color:"green" ,fontSize:20}}> {'\u2022'}  </Text>Super Market with High quality and standards</Text>
                              <Text><Text style={{color:"green",fontSize:20}}> {'\u2022'}  </Text>Customer satisfaction and loyalty</Text>
                              <Text><Text style={{color:"green",fontSize:20}}> {'\u2022'}  </Text>Branded products at ever lowest price</Text>
                              <Text><Text style={{color:"green",fontSize:20}}> {'\u2022'}  </Text>Affordable to all peeps</Text>
                        </View>
                  </View>
                  <View  style={styles.addresscontainer}>
                        <View>
                              <Text style={styles.featureheading}> ADDRESS :  </Text> 
                        </View>
                        <View  style={{padding:10}}>
                              <Text>5 , Anna Nagar Main Road , Near Outer Arch , Opp to Suguna Store bustand. Madurai - 10.</Text>
                        </View>
                  </View>
                  <AddressMap ></AddressMap>
            </ScrollView>
      );
}