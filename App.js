import React, { Profiler } from 'react';
import { createStackNavigator, TransitionPresets, TransitionSpecs } from '@react-navigation/stack';

import { NavigationContainer } from '@react-navigation/native';
import * as Font from 'expo-font'
import SplashScreen from  "react-native-splash-screen";

// import Forgetpass from './src/screen/Forgetpass';
import AddToCart from './src/screen/AddToCart';
import Home from './src/screen/Home';
import Login from './Auth/Login'
import MyCart from './src/screen/MyCart';
import Next from './src/screen/Next';
import PlaceOrder from './src/screen/PlaceOrder'
import Register from './Auth/Register';
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
import Counter from './src/store/redux/Counter';
import { Provider } from 'react-redux';
import store from './src/store/Store';
import { startClock } from 'react-native-reanimated';
import Wishlist from './src/screen/Wishlist';

 

 
const Stack = createStackNavigator();

class App extends React.Component {

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


  render() {
    return (
      this.state.fontsLoaded ?
      // <Provider store={store}>
        <NavigationContainer>

          <Stack.Navigator screenOptions={{ ...TransitionPresets.SlideFromRightIOS, gestureEnabled: true, gestureDirection: 'horizontal' }}
            initialRouteName="Landing"    headerMode='none' >
            <Stack.Screen name="AddToCart" component={AddToCart} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="MyCart" component={MyCart} />
            <Stack.Screen name="Next" component={Next} />
            <Stack.Screen name="PlaceOrder" component={PlaceOrder} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="RegisterLogin" component={RegisterLogin} />
            <Stack.Screen name="Form" component={Form}/>
            <Stack.Screen name="List" component={List}/>
            <Stack.Screen name="User" component={User} />
            <Stack.Screen name="Forgetpass" component={Forgetpass} />
            <Stack.Screen name="Wishlist" component={Wishlist} />
            <Stack.Screen name="SuccessfulRegister" component={SuccessfulRegister} />
            <Stack.Screen name="Landing" component={Landing} />
            <Stack.Screen name="Categories" component={Categories } />
            <Stack.Screen name="CompleteOrder" component={CompleteOrder} />
             {/* <Stack.Screen name="Todo" component={Todo} /> */}

            
            {/* <Stack.Screen name="Forgetpass" component={Forgetpass} /> */}
            {/* <Stack.Screen name="Rapp" component={Rapp}/> */}
           

          </Stack.Navigator>

        </NavigationContainer>
      //  </Provider>
        :
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size='large' color='red' />
          <Text>Font is loading</Text>
        </View>
    );
  }
}
export default App