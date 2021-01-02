import * as React from 'react';
import { Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';  

export default function Header(props) {
  return (
        <View style={{backgroundColor:"#94ab8a",width:"100%",flexDirection:"row",height:80,alignItems:"center",justifyContent:"flex-start"}}>
              <View style={{marginTop:20,marginLeft:20}}>
                <Icon  onPress={() => props.navigation.openDrawer()}   name="md-menu"  size={30}  /> 
              </View>
              <View style={{marginTop:20,marginLeft:20}}>
                <Text style={{color:"black",fontSize:20}}>SUPER MARKET</Text>
            </View>
        </View>
  );
}