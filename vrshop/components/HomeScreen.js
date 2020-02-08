import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableHighlight} from 'react-native';
import { DrawerActions, } from 'react-navigation';

export default class HomeScreen extends Component {
    static navigationOptions = {
        drawerLabel: 'Home',
    };
    render() {
        return (
            <View style={styles.view}>
                <TouchableHighlight style={styles.touchableHighlight} underlayColor={'rgba(0,0,0,0.8)'}
                    onPress={() => { this.props.navigation.dispatch(DrawerActions.openDrawer()); }}>
                    <Text style={styles.open}>OPEN </Text> 
                </TouchableHighlight>
                <Text style={styles.text}> This is homescreen </Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    view: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    text: {
        fontSize: 26,
        color: 'purple'
    },
    touchableHighlight: {
        width: 50,
        height: 50,
        backgroundColor: 'red',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute', 
        left: 10, 
        top: 10,
    },
    open: {
        color: 'white', 
        fontSize: 16,
        fontWeight: 'bold',
    },
});