import { useEffect, useState } from "react"
import { ActivityIndicator, FlatList, StyleSheet, View, Text, Button, TouchableOpacity, Alert } from 'react-native';
import cryptos from '../cryptoList.json'
import styles from '../styles/StyleSheet'
import { addCryptoToFavorites } from "../dbFunctions";
import { auth } from '../../Firebase'

export default function CryptoAssets() {
    const [isLoading, setLoading] = useState(false);
    const [assets, setAssets] = useState(cryptos);

    const userId = auth.currentUser.uid;
    
/*
    var options = {
        "method": "GET",
        "headers": {'X-CoinAPI-Key': '1A1B9DE6-7EE1-437D-84A2-13ECC9BB8F3D'}
    };

    useEffect(() => {
        fetch(`https://rest.coinapi.io/v1/assets?id=${assets.id}`, options)
            .then(response => response.json())
            .then(responseData => {
                setAssets(responseData);
            })
            .catch(err => console.log(err))
    }, []);
*/
    const renderItem = ({ item }) => {
        const HandleOnPress = () => {
            const cryptoData = {
                asset_id: item.asset_id,
                asset_name: item.name,
                userId: userId
            };
            addCryptoToFavorites(cryptoData);
            Alert.alert("Crypto Favorited", `${item.name} has been added to your favorites.`);
        };
        console.log(item.asset_id)
        return (
          <View style={styles.itemContainer}>
            <Text style={styles.itemTitle}>{item.name}</Text>
            <Text style={styles.itemTitle}>{item.asset_id}</Text>
            <TouchableOpacity style={styles.itemButton} onPress={HandleOnPress}>
                <Text style={styles.itemButtonText}>Favorite this crypto</Text>
            </TouchableOpacity>
          </View>
        );
    };


    return (
        <View>
            <FlatList
                data={assets}
                renderItem={renderItem}
                keyExtractor={(item) => item.asset_id}
            />
        </View>
    )
}