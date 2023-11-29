import React from 'react';
import {View, StyleSheet, Text, Image, Pressable, ScrollView, useWindowDimensions} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import TopBar from '../components/TopBar';
import {Searchbar} from 'react-native-paper';
import {LinearGradient} from 'expo-linear-gradient';
import brochette from '../assets/images/brochette.png';
import FoodElementText from '../components/FoodElementText';
import CustomButton from '../components/CustomButton';
import plus from '../assets/images/plus_small.png';
import minus from '../assets/images/minus.png';
import meat from '../assets/images/meat_icon.png';
import vegetable from '../assets/images/vegetable_icon.png';
import fruit from '../assets/images/fruit_icon.png';


export default function IngredientSelection(props) {
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);
  const ingredientList = [{title: "Steak"}, {title: "Sheep Ribs"}, {title: "Rabbit Thigh"}, {title: "Ham"}, {title: "Cream (Liquid)"}, {title: "Pepper Bell"}]
  const availableList = [{title: "Tomato"}, {title: "Lemon"}, {title: "Strawberry"}, {title: "Rice"}, {title: "Flour"}]

  type ItemProps = {value: string}

  const AvailableItem = ({value}: any) => (
    <>
        <View style={styles.horizontalAlignment}>
            <FoodElementText title={value.title}/>
            <Pressable>
                <Image source={plus} style={{width: 20, height: 20, resizeMode: "contain", marginRight: "3%"}}/>
            </Pressable>
        </View>
        <View style={{height: 20}}/>
    </>
  )

  const ChooseItem = ({value}: any) => (
    <>
        <View style={styles.horizontalAlignment}>
            <FoodElementText title={value.title}/>
            <Pressable>
                <Image source={minus} style={{width: 20, height: 20, resizeMode: "contain", marginRight: "3%"}}/>
            </Pressable>
        </View>
        <View style={{height: 20}}/>
    </>
  )

  return (
    <SafeAreaProvider style={{flex: 1}}>
        <TopBar title="Ingredient selection"/>
        <ScrollView>
            <LinearGradient colors={['#2680AA', '#59BDCD']} style={[styles.linearGradient, {minHeight: useWindowDimensions().height}]}>
                <View style={{marginTop: "6%"}}/>
                <View style={styles.element}>
                    <View style={[styles.horizontalAlignment, {justifyContent: 'center'}]}>
                        <Pressable>
                            <Image source={meat} style={{width: 30, height: 30, resizeMode: "contain"}}/>
                        </Pressable>
                        <View style={{marginHorizontal: "1%"}}/>
                        <Pressable>
                            <Image source={vegetable} style={{width: 30, height: 30, resizeMode: "contain"}}/>
                        </Pressable>
                        <View style={{marginHorizontal: "1%"}}/>
                        <Pressable>
                            <Image source={fruit} style={{width: 30, height: 30, resizeMode: "contain"}}/>
                        </Pressable>
                    </View>
                    <View>
                        <Searchbar
                            placeholder="Search"
                            onChangeText={onChangeSearch}
                            value={searchQuery}
                            style={{margin: "3%",
                                    backgroundColor: '#F2F0E4',
                                    borderWidth : 1,
                                    borderColor: "#ACA279",
                                    borderRadius: 15,
                            }}/>
                    </View>
                    <View style={{flex: 1}}>
                        <ScrollView>
                            {ingredientList.map((title, index) => (
                                <AvailableItem key={index} value={title}></AvailableItem>
                            ))}
                        </ScrollView>
                    </View>
                </View>
                <View style={{marginTop: "6%"}}/>
                <View style={styles.element}>
                    <View style={[styles.horizontalAlignment, {justifyContent: "flex-start", marginLeft: "5%"}]}>
                      <Text style={{fontSize: 20, color: '#ACA279'}}>Available</Text>
                    </View>
                    <View style={{flex: 1}}>
                        <ScrollView>
                            {availableList.map((title, index) => (
                                <ChooseItem key={index} value={title}></ChooseItem>
                            ))}
                        </ScrollView>
                    </View>
                </View>
                <View style={{marginTop: "8%"}}></View>
                <CustomButton title="Find a recipe"/>
                <View style={{marginBottom: "20%"}}></View>
            </LinearGradient>
        </ScrollView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
        width: "100%",
        flex: 1,
        padding: "3%",
        paddingTop: 0,
        alignItems: "center",
        justifyContent: "flex-start",
  },

  element: {
    width: "100%",
    backgroundColor:'#F2F0E4',
    borderRadius: 30,
  },
  horizontalAlignment: {
    width: "100%",
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: "3%",
  }
});