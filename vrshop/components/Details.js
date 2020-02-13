import React, {Component} from 'react';
import {
  StyleSheet,
  TouchableOpacity, 
  Image, 
  Text, 
  View, 
  Alert,
  TouchableHighlight,
  ImageBackground
} from 'react-native';

export default class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
        shopRequestInfo: null,
    };
  }
    static navigationOptions = ({ navigation }) => ({
        headerStyle: {
          backgroundColor: '#d477d4',
        },
        headerTitle:(<Image style={{width:100, height: 100, resizeMode: 'contain', marginLeft: '60%'}} source={require('../assets/img/headerlogo.png')}/>), 
        headerTitleStyle:{textAlign: 'center',alignSelf:'center'}, 
        headerLeft: (
          <View>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Image
                style={{ marginLeft: 10, height: 25, width: 25 }}
                source={require('../image/drawer.png')}
              />
            </TouchableOpacity>
          </View>
        ),
    

      });   
      deleteRequest(id) {
        
       const token = this.props.navigation.state.params.token
        fetch('https://6b4c99ab.ngrok.io/api/shop/users/shopusers/delete/' + id + '?api_token='+ token, {
           method: 'GET',
          })

          this.props.navigation.state.params.acceptRequest();

          Alert.alert('Delete successful.')
          this.props.navigation.navigate('Home', {
              refresh: true
          })
      
     }
      
    render() {
      const itemDetail = this.props.navigation.state.params.itemDetail;
        return (
          <ImageBackground style={styles.imagebackground} source={require('../assets/img/background.png')} >
            <View style={styles.view}>
               <Text style={styles.request}>REQUEST NOTIFCATION</Text>
                  <Text style={styles.label}>Name of the User</Text>
                  <Text style={styles.nameshop}>{ itemDetail.name}</Text>
                  <Text style={styles.label}>Contact Number</Text>
                  <Text style={styles.nameshop}>{ itemDetail.number}</Text>
                  <Text style={styles.label}>Type of Vehicle</Text>
                  <Text style={styles.nameshop}>{ itemDetail.typeofvehicle}</Text>
                  <Text style={styles.label}>State of the Problem</Text>
                  <Text style={styles.nameshop}>{ itemDetail.problem}</Text>
                  <View style={styles.buttons}>      
                    <TouchableHighlight style={[styles.buttonContainer, styles.mapButton]} onPress={() => this.props.navigation.navigate('Maps',{
                        latitude: itemDetail.latitude,
                        longitude: itemDetail.longitude,
                        shoplat: this.props.navigation.state.params.latitude,
                        shoplong: this.props.navigation.state.params.longitude,
                        token : this.props.navigation.state.params.token
                      })}>
                        <Text style={styles.locationText}>User's Location</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={[styles.buttonContainer, styles.deleteButton]} onPress={() => {this.deleteRequest(itemDetail.id)}}>
                        <Text style={styles.deleteText}>Remove</Text>
                    </TouchableHighlight>
                  </View>
            </View>
          </ImageBackground>
        );
    }
}
const styles = StyleSheet.create({
    view: {
      flex: 1,
      padding: 10,
    },
    imagebackground: {
      flex: 1,
      flexDirection: 'column'
    },
    deleteButton: {
      backgroundColor: "#fa3737",
      marginLeft:5
    },
    deleteText: {
      color: 'white',
      fontWeight : 'bold',
      fontSize: 15
    },
    buttonContainer: {
      height:45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:20,
      width:120,
      borderRadius:30,
    },
    textButton: {
      backgroundColor: "#00b5ec",
      marginRight: 5
    },
    mapButton: {
      backgroundColor: "#00b5ec",
    },
    buttons: {
      flexDirection:  'row',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    text: {
        fontSize: 20,
        color: 'black',
    },
    touchableHighlight: {
        backgroundColor: 'orange',
        paddingVertical: 20,
        paddingHorizontal: 50,
        margin: 10,
    },
    request: {
      color:             '#a81da6',
      fontWeight:        'bold',
      fontSize:          30,
      marginVertical:    8,
      marginBottom: 20,
    },
    label:          {
      color:           'violet',
      fontWeight:      'bold',
      fontSize:        15,
      marginBottom:    5,
      textShadowColor: '#585858',
  },
  nameshop:{
    color:             '#000',
    fontWeight:        'bold',
    fontSize:          20,
    marginVertical:    8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  locationText: {
    fontWeight : 'bold',
    fontSize: 15,
    color: '#fff',
  }
});