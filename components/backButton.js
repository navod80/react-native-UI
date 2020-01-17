import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


const BackButton = () => {
    return (
        <Image source={require('../assets/inCompo/back.svg')} style={{width: '27%', height: '25%'}} />
        );
}

export default BackButton;
