import React, { Profiler } from 'react';
import { createStackNavigator, TransitionPresets, TransitionSpecs } from '@react-navigation/stack';
 
import * as Font from 'expo-font' 
// import Todo from './src/screen/Todo';

import WishList from './src/screen/Wishlist'
 import AppNavigator from './AppNavigator'


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
import { PersistGate } from 'redux-persist/integration/react';
import Store from './src/store/Store';
import { Provider } from 'react-redux';

 

 
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
      <PersistGate loading={false} persistor={Store.persistor}>
      <Provider store={Store.store}>
         <AppNavigator />
       </Provider>
       </PersistGate>
        :
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size='large' color='red' />
          <Text>Font is loading</Text>
        </View>
    );
  }
}
export default App