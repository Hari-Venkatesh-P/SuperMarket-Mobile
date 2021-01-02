import {
    StyleSheet
  } from 'react-native';

const styles = StyleSheet.create({
    taglinecontainer : {
        margin:10,
        padding:10
    },
    taglinetext:{
    textAlign: 'center', // <-- the magic
    fontWeight: '400',
    fontSize: 18,
    marginTop: 0,
    //fontFamily: "Arial",
    fontWeight:"bold",
    fontStyle:"italic",
    color:"green"
    },
    featurescontainer : {
        margin:5,
        padding:10
    },
    featureheading:{
        textAlign: 'left',
        color:"green",
        fontSize:15
    },
    addresscontainer : {
         marginLeft:10,
        // marginRight:10,

        padding:10
    }
  });

  export default styles;