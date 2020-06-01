import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Platform,
  TouchableHighlight
} from "react-native";

export default class CustomComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.containertopRow}>
          <Image
            style={styles.imageTopRow}
            source={require('../assets/img/logo.png')}
          />
        </View>
        <View style={styles.containerBottom}>
       
          <View>
           
            <TouchableHighlight 
              underlayColor = {'#c42dbf'}
              onPress={() => navigate('Home')}
              style={styles.containerBottomItem}
            >
              <View style={styles.button}>
                <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/material-sharp/24/000000/home.png'}}/>
                <Text style={styles.txtBottom}>Home</Text>
              </View>
            </TouchableHighlight>
          </View>
      

          <TouchableHighlight 
            underlayColor = {'#c42dbf'}
            onPress={() => navigate('Login')}
            style={styles.containerBottomItem}
          >
            <View style={styles.button}>
            <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/metro/26/000000/logout-rounded-down.png'}}/>
              <Text style={styles.txtBottom}>Log Out
              </Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  containertopRow: {
    marginTop: 10,
    marginLeft: 10,
    justifyContent: "center",
    alignItems: 'center'
  },
  txtBottom: {
    marginLeft: 10,
    color: '#000',
    fontSize: 15,
    fontWeight: '100'
  },
  imageTopRow: {
    height: 80,
    marginTop: 50,
    width: 80,
    ...Platform.select({
      ios: {
        borderRadius: 80 / 2
      },
      android: {
        borderRadius: 80
      }
    })
  },
  icon: {
    height: 25,
    width: 25,
    marginRight: 10
  },
  button: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },

  containertopRowText: {
    flexDirection: 'column',
    marginLeft: 5
  },

  containerBottom: {
    backgroundColor: '#fff',
    marginTop: 20
  },
  containerBottomItem: {
    padding: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    borderRadius:5
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius:30,
    borderBottomWidth: 1,
    width:250,
    height:45,
    marginBottom:20,
    flexDirection: 'row',
    alignItems:'center'
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
});