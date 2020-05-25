import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import home from './src/screens/home';
import addFriend from './src/screens/addFriend';
import friendDetails from './src/screens/friendDetails';


const Stack = createStackNavigator();

export default function App({ navigation }) {
  return (
    <NavigationContainer> 
        <Stack.Navigator initialRouteName="Home"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#26a8f1',
              
            },
            headerTintColor: '#fff',
            headerTitleStyle:{
              fontWeight:'bold'
            },
            headerTitleAlign: {
              alignSelf: 'center'
            }
          }}
        
        
        >
      <Stack.Screen 
      name ="Home"
      component={home} 
      options={{ title: 'Home Screen'}}
      />
      <Stack.Screen 
      name ="AddFriend"
      component={addFriend} 
      options={{ title: 'Add Friend' }}
      />
      <Stack.Screen 
      name ="FriendDetails"
      component={friendDetails} 
      options={{ title: 'Friend Details' }}
      />
        </Stack.Navigator>
    </NavigationContainer>
  );
}



