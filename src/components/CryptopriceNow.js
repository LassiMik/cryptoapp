import { useState, useEffect } from 'react';
import { collection, getDocs, getFirestore, query, where, doc } from 'firebase/firestore';
import { View, Text, FlatList, Button, TouchableOpacity } from 'react-native';
import styles from '../styles/StyleSheet'
import { db, auth } from '../../Firebase'

export default function CryptopriceNow() {
    const [cryptoData, setCryptoData] = useState([]);

    const fetchFavoriteCryptos = async () => {
        const userId = auth.currentUser.uid;
        const q = query(collection(db, "cryptos"), where("userId", "==", userId));
        const cryptoSnap = await getDocs(q);
        if (cryptoSnap) {
            const cryptoData = cryptoSnap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setCryptoData(cryptoData);
        }
    };

    const handleRefresh = () => {
        fetchFavoriteCryptos();
        fetchFavoriteCryptosPrices();
    };

    useEffect(() => {
        fetchFavoriteCryptos();
        fetchFavoriteCryptosPrices();
    }, []);

    var options = {
        "method": "GET",
        "headers": { 'X-CoinAPI-Key': '1A1B9DE6-7EE1-437D-84A2-13ECC9BB8F3D' }
    };

    const fetchFavoriteCryptosPrices = async () => {
        const newCryptoData = [];
        for (const crypto of cryptoData) {
            try {
                const response = await fetch(`https://rest.coinapi.io/v1/exchangerate/${crypto.asset_id}/EUR`, options);
                const data = await response.json();
                const cryptoprice = data.rate;
                newCryptoData.push({ ...crypto, price: cryptoprice });
            } catch (error) {
                console.error(error);
                newCryptoData.push(crypto);
            }
        }
        setCryptoData(newCryptoData);
    };

    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <Text style={styles.itemTitle}>{item.asset_name}  </Text>
            <Text style={styles.itemTitle}>{item.asset_id}  </Text>
            <Text style={styles.itemTitle}>
                {item.price !== undefined ? `Price: ${item.price}` : 'Price not available'}
            </Text>
        </View>
    );

    return (
        <View>
            <TouchableOpacity style={styles.refreshButton} onPress={handleRefresh}>
                <Text style={styles.refreshButtonText}>Refresh</Text>
            </TouchableOpacity>
            {cryptoData.length > 0 ? (
                <FlatList
                    data={cryptoData}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                />
            ) : (
                <>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>You haven't favorited any cryptos.</Text>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Use the right navigation tab to favorite some cryptos</Text>
                </>
            )}
            <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>If price is undefined, you have reached the maximum amount of api calls for 24 hours</Text>
        </View>
    );
}