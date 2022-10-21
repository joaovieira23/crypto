import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

const Transaction = () => {
    const navigation = useNavigation();
    
    return (
        <View style={styles.container}>
            <Text>Transaction</Text>
            <TouchableOpacity
            onPress={()=> navigation.navigate('Home')}>
                <Text>Return</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    }
})

export default Transaction;