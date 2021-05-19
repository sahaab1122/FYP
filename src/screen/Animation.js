// import React from 'react'
// import { View, Text, StyleSheet, Image, Animated, TouchableOpacity, Platform, ActivityIndicator } from 'react-native'
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
// import { color } from '../../components/Colors'
// import Header from '../../components/Header'
// import { ExploreStoreCard } from '../../components/ExploreStoreCard'
// import { SearchBar } from '../../components/SearchBar'
// import { stylee } from '../../components/Styles'
// import LinearGradient from 'react-native-linear-gradient'

// class ExploreStore extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             anim: new Animated.Value(0), store: props.route.params.store, category: props.route.params.category,
//             storeItems: [], adImg: require('../../assets/laptopAd.png'),
//             offsets: [4, 8, 12, 16, 20],
//             loading: false,
//             sections: ['Watches', 'Mobiles', 'Laptops', 'Sims', 'Headphone']
//         }
//     }

//     componentDidMount() {
//         this.setState(prevState => ({ loading: !prevState.loading }))
//         let watches = Array(5).fill({ name: 'watches', cost: '45', subtitle: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", img: require('../../assets/watch.png') });
//         let mobiles = Array(5).fill({ name: 'mobiles', cost: '45', subtitle: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", img: require('../../assets/watch.png') })
//         let laptop = Array(5).fill({ name: 'laptop', cost: '45', subtitle: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", img: require('../../assets/watch.png') })
//         let sim = Array(5).fill({ name: 'sims', cost: '45', subtitle: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", img: require('../../assets/watch.png') })
//         let headphone = Array(5).fill({ name: 'headphone', cost: '45', subtitle: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", img: require('../../assets/watch.png') })

//         let indexes = [
//             // 0,
//             // watches.length,
//             // watches.length + mobiles.length,
//             // watches.length + mobiles.length + laptop.length,
//             // watches.length + mobiles.length + laptop.length + sim.length
//         ]
//         let offsets = [
//             0,
//             watches.length * 105,
//             (watches.length + mobiles.length) * 105,
//             (watches.length + mobiles.length + laptop.length) * 105,
//             (watches.length + mobiles.length + laptop.length + sim.length) * 105,
//         ]

//         let data = watches.concat(mobiles, laptop, sim, headphone);
//         this.setState({ storeItems: data, offsets: offsets, })

//         this.setState(prevState => ({ loading: !prevState.loading }))

//         // scroll to specific product
//         // if (this.props.route.params.offerSelected) {
//         //     setTimeout(() => {
//         //         this.scrollView.scrollTo({ y: 1050, animated: true })
//         //     }, 3000);
//         // }

//     }

//     animate = (scroll) => {
//         if (scroll < this.state.offsets[1]) {
//             scroll = 0
//         }

//         Animated.timing(this.state.anim, {
//             toValue: scroll,
//             duration: 1,
//             useNativeDriver: false
//         }).start()

//     }


//     naivgateHandler = (item) => {
//         this.props.navigation.navigate('ExploreProduct', { product: item, store: this.state.store, category: this.props.route.params.category })
//     }

//     onPlusPress = () => {
//         alert('added to cart')
//     }


//     render() {

//         const Section = ({ text, index, id }) => {

//             const first = id === 0 ? -1 : this.state.offsets[id - 1]
//             const last = id === 4 ? index + 1000 : this.state.offsets[id + 1]

//             // console.log(first, index, last)

//             const changeBG = this.state.anim.interpolate({
//                 inputRange: [first, index - 1, index, last - 1, last],
//                 outputRange: [color.cf6, color.cf6, '#fff', '#fff', color.cf6,],
//                 extrapolate: 'clamp'
//             })
//             const changeColor = this.state.anim.interpolate({
//                 inputRange: [first, index - 1, index, last - 1, last],
//                 outputRange: [color.c6e, color.c6e, color.fe8, color.fe8, color.c6e],
//                 extrapolate: 'clamp'
//             })
//             return (
//                 <TouchableOpacity style={{ width: '100%' }} onPress={() => this.scrollView.scrollTo({ y: index })}  >
//                     <Animated.View style={[stylee.exploreStoreLeftTitileContainer, { backgroundColor: changeBG }]}>
//                         <Animated.Text style={[stylee.exploreStoreLeftText, { color: changeColor }]} >
//                             {text}
//                         </Animated.Text>
//                     </Animated.View>
//                 </TouchableOpacity>
//             )
//         }

//         return (
//             <View style={{ flex: 1, }}>
//                 <Header leftArrowWithText={this.state.store} navigation={this.props.navigation} linearGradient backNull />


//                 <View style={[stylee.exploreStore,]} >

//                     {/* search bar + ad  */}
//                     <View style={[stylee.exploreStoreTop,]} >


//                         <LinearGradient
//                             start={{ x: 1, y: 1 }} end={{ x: 0, y: 0 }}
//                             colors={[color.orangeGradientTop, color.orangeGradientDown]}
//                             style={{ width: '100%' }}
//                         >

//                             <View style={{ flexDirection: 'row', width: '90%', paddingBottom: 15, alignSelf: 'center', justifyContent: 'space-between', }}>

//                                 {/* search bar */}
//                                 <SearchBar placeholder='Something You Like' width='75%' onChangeText={val => console.log(val)} />

//                                 {/* right icon */}
//                                 <View >
//                                     <View style={stylee.exploreStoreTopImgContainer} >
//                                         <Image source={this.state.category === 'Fast Food Restrauants' ? require('../../assets/EatIcon.png') : require('../../assets/devicesIcon.png')} resizeMode='stretch' style={stylee.exploreStoreTopImg} />
//                                     </View>
//                                 </View>
//                             </View>
//                         </LinearGradient>

//                         {/* ad */}
//                         <Image resizeMode='stretch' source={this.state.adImg} style={[stylee.exploreStoreAd,]} />

//                     </View>


//                     <View style={stylee.exploreStoreBottom} >

//                         {/* left titles */}
//                         <Animated.View style={stylee.exploreStoreLeftContainer} >

//                             {
//                                 this.state.sections.map((section, index) =>
//                                     <Section text={section} id={index} index={this.state.offsets[index]} key={index} />
//                                 )
//                             }

//                         </Animated.View>



//                         {/* right scroll view */}
//                         <View style={{ width: '65%' }} >
//                             {
//                                 this.state.loading ?
//                                     <ActivityIndicator size='small' color={color.cfe8} />
//                                     :
//                                     <Animated.ScrollView showsVerticalScrollIndicator={false}
//                                         style={{ width: '100%' }} onScroll={val => this.animate(val.nativeEvent.contentOffset.y,)}
//                                         ref={val => this.scrollView = val}

//                                     >
//                                         {
//                                             this.state.storeItems.map((item, index) =>
//                                                 <ExploreStoreCard key={index} onPlusPress={() => this.onPlusPress()} onPress={() => this.naivgateHandler(item)} item={item} alignSelf='center' marginBottom={5} padding={10} backgroundColor='#fff' />
//                                             )
//                                         }
//                                     </Animated.ScrollView>

//                             }
//                         </View>



//                     </View>



//                 </View >
//             </View >
//         )
//     }
// }


// export default (ExploreStore);