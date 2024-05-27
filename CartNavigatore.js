import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer,StackActions } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Cart} from "../pages/Cart"


export default function CartNavigatore() {
    const Stack = createBottomTabNavigator()
    return (
        <Tab.Navigator>
            <Tab.Screen name="Cart" component={Cart} />
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
