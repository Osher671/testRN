import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import { Button } from 'react-native-elements';





const homescreen = ({ navigation}) => {


    return (
        <View>
        <Text>homescreen</Text>
        <Button title="Move to addFriend" onPress={()=> navigation.navigate('AddFriend')}/>
        <Button title="Move to FriendDetail" onPress={()=> navigation.navigate('FriendDetails')}/>
        </View>
    )
}

const styles = StyleSheet.create({});

export default homescreen;