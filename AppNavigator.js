import React, { Profiler } from 'react';
import { createStackNavigator, TransitionPresets, TransitionSpecs } from '@react-navigation/stack';

import { NavigationContainer } from '@react-navigation/native';
import * as Font from 'expo-font'
import SplashScreen from  "react-native-splash-screen";

// import Forgetpass from './src/screen/Forgetpass';
import AddToCart from './src/screen/AddToCart';
import Home from './src/screen/Home';
import Login from './src/Auth/Login'
import MyCart from './src/screen/MyCart';
import Next from './src/screen/Next';
import PlaceOrder from './src/screen/PlaceOrder'
import Register from './src/Auth/Register';
import RegisterLogin from './src/screen/RegisterLogin';
import User from './src/screen/User';
import Form from './src/screen/Form';
import List from './src/screen/List';
import Forgetpass from './src/screen/Forgetpass';
import SuccessfulRegister from './src/screen/SuccessfulRegister';
import Landing from './src/screen/Landing';
import Categories from './src/screen/Categories'
import CompleteOrder from './src/screen/CompleteOrder';
// import Todo from './src/screen/Todo';

import WishList from './src/screen/Wishlist'



// import Rapp from './src/store/redux/Rapp';
// import AddCart from './src/component/AddCart'
// import BottomHeader from './src/component/BottomHeader';
// import Btn from './src/component/Btn';
// import Card from './src/component/Card';
// import Carousel from './src/component/Carousel';
// import CartPrice from './src/component/CartPrice';
// import EmptyCart from './src/component/EmptyCart';
// import Inputfield from './src/component/Inputfield';
// import Lets from './src/component/Lets';
// import Middle from './src/component/Middle';
// import Smallchair from './src/component/Smallchair';

import { ActivityIndicator, Text, View } from 'react-native';
// import Counter from './src/store/redux/Counter';
// import { Provider } from 'react-redux';
// import store from './src/store/Store';
// import { startClock } from 'react-native-reanimated';
import Wishlist from './src/screen/Wishlist';
import { connect } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';

 

 
const Stack = createStackNavigator();





 


  


class AppNavigator extends React.Component {

    state = {
        fontsLoaded: false
      }

    async componentDidMount() {
        await Font.loadAsync({
          Montserrat: require('./assets/fonts/Montserrat-Black.ttf'),
          Poppins: require('./assets/fonts/Poppins-Light.ttf'),
          Poppin: require('./assets/fonts/Poppins-Bold.ttf'),
          sp: require('./assets/fonts/sf-ui-display-bold-58646a511e3d9.otf'),
          sf: require('./assets/fonts/sf-ui-display-semibold-58646eddcae92.otf'),
          Rock: require('./assets/fonts/RockSalt-Regular.ttf'),
    
        });
        this.setState({ fontsLoaded: true });
      }

    AuthStack = () => {
        return (
            <Stack.Navigator headerMode="none" screenOptions={{ ...TransitionPresets.SlideFromRightIOS, gestureEnabled: true, gestureDirection: 'horizontal' }}>
               <Stack.Screen name="Landing" component={Landing} />
               <Stack.Screen name="Login" component={Login} />
               <Stack.Screen name="Register" component={Register} />
               <Stack.Screen name="Forgetpass" component={Forgetpass} />
            </Stack.Navigator>
        )
    }
    AppStack = () => {
        return (
            <Stack.Navigator headerMode="none" screenOptions={{ ...TransitionPresets.SlideFromRightIOS, gestureEnabled: true, gestureDirection: 'horizontal' }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="AddToCart" component={AddToCart} />
         
            <Stack.Screen name="MyCart" component={MyCart} />
            {/* <Stack.Screen name="Next" component={Next} /> */}
            <Stack.Screen name="PlaceOrder" component={PlaceOrder} />
            
            <Stack.Screen name="RegisterLogin" component={RegisterLogin} />
            
            <Stack.Screen name="User" component={User} />
            
            <Stack.Screen name="Wishlist" component={Wishlist} />
            <Stack.Screen name="SuccessfulRegister" component={SuccessfulRegister} />
            
            <Stack.Screen name="Categories" component={Categories } />
            <Stack.Screen name="CompleteOrder" component={CompleteOrder} />
            </Stack.Navigator>
        )
    }


    render() {
        return (
            <NavigationContainer >
                {
                    this.props.logged ?
                        this.AppStack()
                        :
                        this.AuthStack()
                }
            </NavigationContainer>
        )
    }
}
const mapState = state => {
    return {
        logged: state.authReducer.logged,
    }
}

export default connect(mapState, null)(AppNavigator);