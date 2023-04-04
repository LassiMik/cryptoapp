import React from 'react';
import CryptopriceNow from '../CryptopriceNow'
import { View, StyleSheet } from 'react-native';


export default function GraphPage() {
    return (
        <View style={styles.container}>
            <CryptopriceNow />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    }
})