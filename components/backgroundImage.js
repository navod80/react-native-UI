import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';


const Background = () => {
    return (
        <ImageBackground source={require('../assets/main-background.png')} style={{width: '100%', height: '100%'}} />
        );
}

export default Background;
