import React from 'react';
import CryptopriceNow from '../components/CryptopriceNow'
import { View, StyleSheet } from 'react-native';
import styles from '../styles/StyleSheet'

export default function GraphPage() {
    return (
        <View style={styles.container}>
            <CryptopriceNow />
        </View>
    )
}

