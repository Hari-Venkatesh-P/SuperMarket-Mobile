import {
    StyleSheet
  } from 'react-native';

const styles = StyleSheet.create({
    container: {
        marginTop:100,
      flex: 1,
      backgroundColor: '#F5FCFF',
    },
    slider: { backgroundColor: '#000', height: 350 },
    content1: {
      width: '100%',
      height: 50,
      marginBottom: 10,
      backgroundColor: '#000',
      justifyContent: 'center',
      alignItems: 'center',
    },
    content2: {
      width: '100%',
      height: 100,
      marginTop: 10,
      backgroundColor: '#000',
      justifyContent: 'center',
      alignItems: 'center',
    },
    contentText: { color: '#fff' },
    buttons: {
      zIndex: 1,
      height: 15,
      marginTop: -25,
      marginBottom: 10,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
    },
    button: {
      margin: 3,
      width: 15,
      height: 15,
      opacity: 0.9,
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonSelected: {
      opacity: 1,
      color: 'red',
    },
    customSlide: {
      backgroundColor: 'green',
      alignItems: 'center',
      justifyContent: 'center',
    },
    customImage: {
      width: 100,
      height: 100,
    },
  });

  export default styles;