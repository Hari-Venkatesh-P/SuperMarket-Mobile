import React from 'react';
import MapView, { AnimatedRegion, Animated } from 'react-native-maps';
import {View} from 'react-native';

 export default class AddressMap extends Component {
    constructor(props){  
        super(props);  
        this.state = {
            region: new AnimatedRegion({
                latitude: 9.9216,
                longitude: 78.1443,
                //latitudeDelta: LATITUDE_DELTA,
                //longitudeDelta: LONGITUDE_DELTA,
              }),
        }
   }  
     
      onRegionChange = (region) => {
        this.state.region.setValue(region);
      }

     render () {
        return (
            <View>
                <Animated
              region={this.state.region}
              onRegionChange={this.onRegionChange}
            />
            </View>
            
          );
     }
}


  
