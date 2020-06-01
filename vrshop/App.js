import React from 'react';
import {
  createAppContainer,
} from "react-navigation";
import Home from "./components/Home";
import Details from "./components/Details";
import Maps from "./components/Maps";
import Login from "./components/Login";
import Items from "./components/Item";

import CustomComponent from "./components/DrawerNavigator";
import { createStackNavigator } from 'react-navigation-stack'
import { createDrawerNavigator } from 'react-navigation-drawer';

const entry = createStackNavigator({
    Login: {
      screen: Login
    },  
    Home:{
      screen: Home,
      
    },
    Items:{
      screen: Items
    },
    Details: {
      screen: Details,
    },
    Maps: {
      screen: Maps,
    },  
  },
  // {
  //   initialRouteName: 'Login',
  // }
);

const drawer = createDrawerNavigator(
  {
    entry,
  },
  {
    contentComponent: props => <CustomComponent {...props} />,
  }
);
const App = createAppContainer(drawer);
export default App;