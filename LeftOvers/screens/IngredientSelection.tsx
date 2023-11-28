import React from 'react';
import {View, StyleSheet, Text, Image, Pressable, ScrollView, useWindowDimensions} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import TopBar from '../components/TopBar';
import {LinearGradient} from 'expo-linear-gradient';
import {Searchbar} from 'react-native-paper';
import brochette from '../assets/images/brochette.png';
import FoodElementText from '../components/FoodElementText';
import CustomButton from '../components/CustomButton';


export default function IngredientSelection() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);

  return (
    <SafeAreaProvider>
        <TopBar title="Ingredient selection"/>
        <ScrollView>
            <LinearGradient colors={['#2680AA', '#59BDCD']} style={[styles.linearGradient, {minHeight: useWindowDimensions().height}]}>
                <View style={{marginTop: "6%"}}/>
                <View style={styles.element}>
                      <View style={[styles.horizontalAlignement, {justifyContent: 'center'}]}>
                            <Pressable>
                                <Image source={brochette} style={{ width: 40, height: 40 }} />
                            </Pressable>
                            <Pressable>
                                <Image source={brochette} style={{ width: 40, height: 40 }} />
                            </Pressable>
                            <Pressable>
                                <Image source={brochette} style={{ width: 40, height: 40 }} />
                            </Pressable>
                            <Pressable>
                                <Image source={brochette} style={{ width: 40, height: 40 }} />
                            </Pressable>
                      </View>
                  <View>
                  <Searchbar
                      placeholder="Search"
                      onChangeText={onChangeSearch}
                      value={searchQuery}
                      style={{margin: 10,
                              backgroundColor: '#F2F0E4',
                              borderWidth : 1,
                              borderColor: "#ACA279",
                              borderRadius: 15,
                              height: 50,
                              }}/>
                  </View>
                  <View style={{ flex: 1}} >
                    <ScrollView contentContainerStyle={{ alignItems: 'center', height: 300}}>

                      <View style={styles.horizontalAlignment}>
                        <FoodElementText title="test" />
                        <Image source={brochette} style={{ width: 20, height: 20 }} />
                      </View>
                      <View style={{ height: 30 }}></View>

                      <View style={styles.horizontalAlignment}>
                        <FoodElementText title="test" />
                        <Image source={brochette} style={{ width: 20, height: 20 }} />
                      </View>
                      <View style={{ height: 30 }}></View>

                      <View style={styles.horizontalAlignment}>
                        <FoodElementText title="test" />
                        <Image source={brochette} style={{ width: 20, height: 20 }} />
                      </View>
                      <View style={{ height: 30 }}></View>

                      <View style={styles.horizontalAlignment}>
                        <FoodElementText title="test" />
                        <Image source={brochette} style={{ width: 20, height: 20 }} />
                      </View>
                      <View style={{ height: 30 }}></View>

                      <View style={styles.horizontalAlignment}>
                        <FoodElementText title="test" />
                        <Image source={brochette} style={{ width: 20, height: 20 }} />
                      </View>
                      <View style={{ height: 30 }}></View>


                    </ScrollView>
                  </View>
                  <View style={{ height: 20 }}></View>
                </View>

                <View style={[styles.element, {marginTop:  40}]}>

                    <View style={[styles.horizontalAlignment, {justifyContent: "flex-start", marginLeft: 10}]}>
                      <Text style={{fontSize: 20, color: '#ACA279'}}>Available</Text>
                    </View>

                    <View style={{ height: 5 }}></View>

                    <View style={{ flex: 1}} >
                    <ScrollView contentContainerStyle={{ alignItems: 'center', height: 150}}>
                    <View style={styles.horizontalAlignment}>
                        <FoodElementText title="test" />
                        <Image source={brochette} style={{ width: 20, height: 20 }} />
                      </View>
                      <View style={{ height: 30 }}></View>

                      <View style={styles.horizontalAlignment}>
                        <FoodElementText title="test" />
                        <Image source={brochette} style={{ width: 20, height: 20 }} />
                      </View>
                      <View style={{ height: 30 }}></View>

                      <View style={styles.horizontalAlignment}>
                        <FoodElementText title="test" />
                        <Image source={brochette} style={{ width: 20, height: 20 }} />
                      </View>
                      <View style={{ height: 30 }}></View>
                    </ScrollView>
                  </View>
                  <View style={{ height: 20 }}></View>
                </View>

                <View style={{ height: 15 }}></View>
                <CustomButton title="Find a recipe"/>
            </LinearGradient>
        </ScrollView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
    linearGradient: {
          width: "100%",
          flex: 1,
          padding: "2%",
          paddingTop: 0,
          alignItems: "center",
          justifyContent: "center"
    },

  element: {
    width: "100%",
    backgroundColor:'#F2F0E4',
    borderRadius: 25,
  },
  horizontalAlignment: {
    display: 'flex',
    height: 30,
    width: 350,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 15,
  }
});
