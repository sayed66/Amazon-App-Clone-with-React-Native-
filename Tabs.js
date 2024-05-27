import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer,StackActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {HomeNavigatore, ProfileNavigatore,CartNavigatore} from './'

export default function Tabs() {
    const Tab = createBottomTabNavigator()
    return (
        <Tab.Navigator>

            <Tab.Screen name="HomeNavigatore" component={HomeNavigatore} />
            <Tab.Screen name="ProfileNavigatore" component={ProfileNavigatore} />
            <Tab.Screen name="CartNavigatore" component={CartNavigatore} />

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
