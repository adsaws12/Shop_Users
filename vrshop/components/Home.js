import React, {Component} from 'react';
import {
  StyleSheet,
  TouchableOpacity, 
  Image, 
  Text, 
  View, 
  ImageBackground, 
  ScrollView,
  RefreshControl ,

} from 'react-native';
import Item from './Item';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
        shopRequestInfo: [],
          isLoading: true,
          refreshing: false
        };
    this.acceptRequest = this.acceptRequest.bind(this);
  }
  _onRefresh = () => {
    this.setState({refreshing: true});
    this.acceptRequest();
  }
    componentDidMount() {
      //unahon og basa acceptrequest function
      this.acceptRequest();
    }

    //ang kani nga function kay maoy unahon og basa
    acceptRequest() {
      //g constant ang token sa user para ma simple og tawag
       const token = this.props.navigation.state.params.token     //id sa shop plus token
       fetch('https://707d547f.ngrok.io/api/shop/users/request/'+ this.props.navigation.state.params.shop_id + '?api_token='+ token , {
          method: 'GET',
        })
        
        .then(response => response.json())
        .then(json => {
            this.setState({
              //ang shoprequestinfo kay gstore ran na og mga data
              shopRequestInfo: json,
              refreshing: false
            });
            
        })
        .catch(error => {
            console.error(error);
        });
    }

    //Mao ni siya ang DrawerNavigator
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
      
    render() {

      //pang refresh sa display
      if (this.props.refresh) {
          this.acceptRequest();
      }

      //g constant ang mga data para matawag sa uban
      const shoplong = this.props.navigation.state.params.longitude
      const shoplat = this.props.navigation.state.params.latitude
      const items = this.state.shopRequestInfo.map((item, key) =>
          <Item item={item} key={item.id} latitude={shoplat} longitude={shoplong} acceptRequest={this.acceptRequest} handleClick={this.props}></Item>
      );
          return (
            <ImageBackground style={styles.imagebackground} source={require('../assets/img/background.png')} >
              <ScrollView
              refreshControl={
                <RefreshControl
                  refreshing={this.state.refreshing}
                  onRefresh={this._onRefresh}
                />
              }
              >
                <View style={styles.view}>

                    <View style={styles.headertable}>
                        <Text style={styles.textheader}>User's Name</Text>
                        <Text style={styles.textheader}>Number</Text>
                        <Text style={styles.textheader}>Type of Vehicle</Text>
                    </View>
                  {/* mga ni request gkan sa Item.js */}
                  {items}
                </View>
              </ScrollView>
            </ImageBackground>
            
          );
        
    }
}
const styles = StyleSheet.create({
  container:{
      flex:1,
      backgroundColor: '#fff',
      padding:10,
      justifyContent:  'center',
      
  },
  itemview:{
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  tdtable:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor:'#eee',
    padding: 10,
    borderWidth: 0.5,
  },
  textheader:{
    fontWeight: 'bold',
    borderRightWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    flex: 1,
    color: '#fff'
  },
  headertable: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#a81da6',
    padding: 10,
    borderWidth: 1,
      
  },
  text: {
    fontSize: 20,
    color: 'black',
  },
  view: {
    padding: 10,
  },
  textbutton :{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  touchableHighlight: {
    backgroundColor: 'orange',
    paddingVertical: 20,
    paddingHorizontal: 50,
    margin: 10,
  
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },
  imagebackground: {
    flex: 1,
    flexDirection: 'column',
  },
});