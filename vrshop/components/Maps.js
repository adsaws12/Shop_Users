import React from 'react';
import MapView from 'react-native-maps';
import {StyleSheet, View, Dimensions, Platform, Alert, TouchableOpacity,Image, MapViewDirections} from 'react-native';

const LATITUDE_DELTA  = 0.01;
const LONGITUDE_DELTA = 0.01;

export default class Maps extends React.Component {
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
      constructor(props) {
        super(props);
        this.state = {
            region: {
                latitude:       37.78825,
                longitude:      -122.4324,
                latitudeDelta:  LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
            },
        };
      }

    componentDidMount() {
        this.getCurrentPosition();
    }

    setRegion(region) {
        this.setState({region});
        this.setReady(true);

    }

    setReady(ready) {
        this.setState({ready: ready});
    }

    getCurrentPosition() {
        try {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const region = {
                        latitude:       position.coords.latitude,
                        longitude:      position.coords.longitude,
                        latitudeDelta:  LATITUDE_DELTA,
                        longitudeDelta: LONGITUDE_DELTA,
                    };
                    this.setRegion(region);
                },
                (error) => {
                    switch (error.code) {
                        case 1:
                            if (Platform.OS === "ios") {
                                Alert.alert("", "Error in IOS");
                            } else {
                                Alert.alert("", "ERROR in Android");
                            }
                            break;
                        default:
                            Alert.alert("", "Error al detectar tu locación");
                    }
                }
            );
        } catch (e) {
            alert(e.message || "");
        }
    }

    markers() {
        // let markers = [];
        // for (i = 0; i < this.state.marker.length; i++) {
        //     let marker = this.state.marker[i];
        //     markers.push(<MapView.Marker
        //         coordinate={{
        //             latitude:  marker.latitude,
        //             longitude: marker.longitude
        //         }}
        //         title={marker.title}
        //         description={marker.subtitle}
        //         onCalloutPress={() => this.props.navigation.navigate('Details', {
        //             shop_id: marker.shop_id,
        //             currentPos: this.state.region,
        //             goToPos: marker
        //         })}
        //         key={marker.shop_id}
        //     />)
        // }
        // return markers;
    }

    render() {
        const latitude = Number.parseFloat(this.props.navigation.state.params.latitude);
        const longitude = Number.parseFloat(this.props.navigation.state.params.longitude);
           
                mapview = <MapView
                    style={styles.mapStyle}
                    initialRegion={
                        {
                        latitude:       latitude,
                        longitude:      longitude,
                        latitudeDelta:  LATITUDE_DELTA,
                        longitudeDelta: LONGITUDE_DELTA,
                    }
                    // this.state.region
                    }
                    followUserLocation={true}
                    showsUserLocation={true}
                >
                    <MapView.Marker
                        coordinate={{
                            latitude:  latitude,
                            longitude: longitude
                        }}
                    />
                    {/* <MapViewDirections
                    origin={{
                        latitude:  this.state.region.latitude,
                        longitude: this.state.region.longitude
                    }}
                    destination={{
                        latitude:  latitude,
                        longitude: longitude
                    }}
                    strokeWidth={4}
                    strokeColor={"blue"}
                    lineDashPattern={[15,15]}
                    apikey={'AIzaSyDYip5_J-mUcIk1hrDE0qxdz2epCYY6IQ0'}
                /> */}
                </MapView>
        return (
            <View style={styles.container}>
                {mapview}
            </View>
        );  
    }
}

const styles = StyleSheet.create({
    container:      {
        flex:            1,
    },
    mapStyle:       {
        width:  Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    nameshop:       {
        color:             'black',
        fontWeight:        'bold',
        fontSize:          20,
        marginVertical:    8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    label:          {
        color:           'violet',
        fontWeight:      'bold',
        fontSize:        15,
        marginBottom:    5,
        textShadowColor: '#585858',
    },
    buttonView:     {
        flex:           1,
        flexDirection:  'row',
        justifyContent: 'space-around',
    },
    requestButton:  {
        marginLeft: 20,
    },
    pricerangeflex: {
        flex:           1,
        flexDirection:  'row',
        justifyContent: 'space-around',
    },
    lineright:      {
        borderRightWidth: 2
    },
    viewheader:     {
        backgroundColor: '#C100C1',
        height:          60,
        width:           '90%',
        marginTop:       0,
        marginRight:     'auto',
        marginBottom:    0,
        marginLeft:      'auto',
        borderRadius:    10,
    },
    textHeader:     {
        fontSize:       35,
        alignItems:     'center',
        justifyContent: 'center',
        padding:        10,
        fontWeight:     'bold',
        color:          '#fff',
    },
});



