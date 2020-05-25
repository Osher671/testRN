import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';



const addFriend = ({ navigation }) => {
    const [friend, setFriend] = useState('');
    const [phone, setPhone] = useState('');

    return (

        <View style={styles.container}>

            <Input
                placeholder='שם החבר'
                onChangeText={friend => setFriend(friend)}
                leftIcon={
                    <Icon
                        name='user'
                        size={24}
                        color='grey'
                    />
                }
            />
            <Input
                onChangeText={phone => setPhone(phone)}
                placeholder='טלפון'
                leftIcon={
                    <Icon
                        name='phone'
                        size={24}
                        color='grey'
                    />
                }
            />


            <Button
                title="הוסף"
                onPress={() => {
                    navigation.navigate('FriendDetails', { friend, phone })

                }}

            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 15,


    },
});


export default addFriend;
