import React, {Component} from 'react';
import {
    StyleSheet, 
    View, 
    Text,
    TouchableHighlight,
    Button
} from 'react-native';

export default class Items extends Component {
    constructor(props) {
        super(props);
      }
    render() {
        return (
            <TouchableHighlight  onPress={() => {this.props.handleClick.navigation.navigate('Details', {
                // samtang mo navigate niya kay tagaan siya og data padong didto sa Details.js 
                itemDetail: this.props.item,
                acceptRequest: this.props.acceptRequest,   
                latitude : this.props.latitude,
                longitude : this.props.longitude,
                token: this.props.handleClick.navigation.state.params.token
            }),{
                
            }}}>
                <View style={styles.tdtable}>
                    <View key={this.props.item.id} style={styles.itemview}>
                        {/* display sa home.js nya gtawag na ang mga data gkan sa database */}
                        <Text style={styles.textheader}>{this.props.item.name}</Text>
                        <Text style={styles.textheader}>{this.props.item.number}</Text>
                        <Text style={styles.textheader}>{this.props.item.typeofvehicle}</Text> 
                    </View>
                </View>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
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
        opacity: 0.7
      },
      textheader:{
        fontWeight: 'bold',
        borderRightWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        flex: 1,
      },
  });