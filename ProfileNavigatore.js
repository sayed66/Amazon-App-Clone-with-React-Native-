import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer,StackActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Profile} from "../pages/profile"


export default function ProfileNavigatore() {
    const Stack = createBottomTabNavigator()
    return (
        <Tab.Navigator>
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
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
