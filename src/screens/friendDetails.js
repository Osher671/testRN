import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const FriendDetails = ({ route, navigation }) => {
    const { friend } = route.params;
    const { phone } = route.params;
    return (

        <View style={styles.container}>
            <Text>{JSON.stringify(friend)} {JSON.stringify(phone)}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});


export default FriendDetails;