import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Tabs} from './Navigations/Tabs'



export default function App() {
    const stack = createNativeStackNavigator()
    return (
        < NavigationContainer >
            <Stack.navigator>
                <stack.screen name="Tabs" component={Tabs} />
            </Stack.navigator>
        </NavigationContainer >

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
