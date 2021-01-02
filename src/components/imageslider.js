import React  , { Component } from 'react';
import { SliderBox } from "react-native-image-slider-box";
import { Image, Text, View , SafeAreaView ,TouchableHighlight} from 'react-native';

import styles from "../styles/imageslider"

export default class CustomImageSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        'https://www.freshproduceshoppe.com/wp-content/uploads/2018/07/online-vegetables-in-gurgaon-768x422.jpg',
        'https://lh3.googleusercontent.com/proxy/GLkbe5Se7Dyic98a7iRuxU06r5ixTwp2GD3OwfMZVHYnhD9-Dozw4xdde9JqsHtqq8KKdf_BnlNlmUDCI8pIb_siRELGzRz7OKaMknVjR54C1-mZDcKnSu5MdZ6GHgrJ8bw',
        'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/xh09b4xfqz1gppbryu6d'
      ]
    };
  }
  render() {
    return(
        <SliderBox 
          images={this.state.images} 
          sliderBoxHeight={200}
          onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
          ImageComponentStyle={{borderRadius: 35, width: '95%',margin:20}}
          imageLoadingColor="#2196F3"
          autoplay
          circleLoop
          />
      )
  }
}