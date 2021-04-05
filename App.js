import React, { Profiler } from 'react';
import { createStackNavigator, TransitionPresets, TransitionSpecs } from '@react-navigation/stack';

import { NavigationContainer } from '@react-navigation/native';
import * as Font from 'expo-font'



import AddToCart from './src/screen/AddToCart';
import Home from './src/screen/Home';
import Login from './src/screen/Login'
import MyCart from './src/screen/MyCart';
import Next from './src/screen/Next';
import PlaceOrder from './src/screen/PlaceOrder'
import Register from './src/screen/Register';
import RegisterLogin from './src/screen/RegisterLogin';
import Rapp from './src/screen/redux/Rapp';
import AddCart from './src/component/AddCart'
import BottomHeader from './src/component/BottomHeader';
import Btn from './src/component/Btn';
import Card from './src/component/Card';
import Carousel from './src/component/Carousel';
import CartPrice from './src/component/CartPrice';
import EmptyCart from './src/component/EmptyCart';
import Inputfield from './src/component/Inputfield';
import Lets from './src/component/Lets';
import Middle from './src/component/Middle';
import Smallchair from './src/component/Smallchair';

import { ActivityIndicator, Text, View } from 'react-native';
import Counter from './src/screen/redux/Counter';



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

    });
    this.setState({ fontsLoaded: true });
  }


  render() {
    return (
      this.state.fontsLoaded ?
        <NavigationContainer>

          <Stack.Navigator screenOptions={{ ...TransitionPresets.SlideFromRightIOS, gestureEnabled: true, gestureDirection: 'horizontal' }}
            initialRouteName="Login"    headerMode='none' >
            <Stack.Screen name="AddToCart" component={AddToCart} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="MyCart" component={MyCart} />
            <Stack.Screen name="Next" component={Next} />
            <Stack.Screen name="PlaceOrder" component={PlaceOrder} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="RegisterLogin" component={RegisterLogin} />
            <Stack.Screen name="Rapp" component={Rapp}/>
           

          </Stack.Navigator>
        </NavigationContainer>
        :
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size='large' color='red' />
          <Text>Font is loading</Text>
        </View>
    );
  }
}
export default App