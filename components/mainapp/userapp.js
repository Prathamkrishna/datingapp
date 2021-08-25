import {
    SafeAreaView,
    View,
    Text
} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

//icons
import Icon from 'react-native-vector-icons/FontAwesome5'

//components
import MatchingUser from './matchingscreen';
import UserProfile from './userprofile';

const BottomTabNavigator = createBottomTabNavigator();

function UserApp(){
    return (
        <NavigationContainer independent={true}>
            <BottomTabNavigator.Navigator
                screenOptions={({route})=>({
                tabBarActiveBackgroundColor: 'black',
                // tabBarActiveTintColor: 'red',
                tabBarInactiveBackgroundColor: 'black',
                tabBarStyle: {backgroundColor: 'black', borderTopWidth: 0, color: 'red'},
                tabBarIcon: ({ focused, size }) => {
                    let iconName;
                    let color;
                    if (route.name === 'User') {
                      iconName = focused ? 'heart' : 'heart';
                      color = focused ? 'red' : 'pink'
                    } else if (route.name === 'Profile') {
                      iconName = focused ? 'heartbeat' : 'heartbeat';
                      color = focused ? 'red' : 'pink'
                    }
                    return <Icon name={iconName} size={size} color={color} />
            }})
        }>
                <BottomTabNavigator.Screen name="User" component={MatchingUser} options={
                    {headerShown: false}
                } />
                <BottomTabNavigator.Screen name="Profile" component={UserProfile} options={
                    {headerShown: false}
                }/>
            </BottomTabNavigator.Navigator>
        </NavigationContainer>
    )
}

export default UserApp;