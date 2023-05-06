import React from 'react';
import CryptoAssets from '../components/CryptoAssets'
import { View, StyleSheet } from 'react-native';
import styles from '../styles/StyleSheet'


export default function CryptoList() {
    return (
        <View style={styles.container}>
            <CryptoAssets />
        </View>
    )
}

