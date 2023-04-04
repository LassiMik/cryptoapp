import { useEffect, useState } from "react"
import { StyleSheet, View, Text } from 'react-native';

export default function PriceNow() {
    const [prices, setPrices] = useState([]);

    var options = {
        method: 'get',
        headers: {'X-CoinAPI-Key': '1A1B9DE6-7EE1-437D-84A2-13ECC9BB8F3D'}
    }
    useEffect(() => {
        fetch('https://rest.coinapi.io/v1/exchangerate/BTC/EUR', options)
            .then(response => response.json())
            .then(responseData => {
                setPrices(responseData.rate);
            })
            .catch(err => console.log(err))
    });
    return (
        <View >
            <Text >Bitcoin hinta: {prices}</Text>
        </View>

    )

}
