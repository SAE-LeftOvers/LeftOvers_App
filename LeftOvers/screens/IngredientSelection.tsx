import React from 'react';
import { View, StyleSheet, Text, Image, Pressable,ScrollView} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import TopBar from '../components/TopBar';
import { Searchbar } from 'react-native-paper';
import brochette from '../assets/images/brochette.png'; 
import FoodElementText from '../components/FoodElementText';
import CustomButton from '../components/CustomButton';


export default function IngredientSelection(props) {

  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <SafeAreaProvider>
          <TopBar title="Ingredient selection"/>
          <View style={styles.page}>

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

                  <View style={styles.horizontalAlignement}>
                    <FoodElementText title="test" />
                    <Image source={brochette} style={{ width: 20, height: 20 }} />
                  </View>
                  <View style={{ height: 30 }}></View>

                  <View style={styles.horizontalAlignement}>
                    <FoodElementText title="test" />
                    <Image source={brochette} style={{ width: 20, height: 20 }} />
                  </View>
                  <View style={{ height: 30 }}></View>

                  <View style={styles.horizontalAlignement}>
                    <FoodElementText title="test" />
                    <Image source={brochette} style={{ width: 20, height: 20 }} />
                  </View>
                  <View style={{ height: 30 }}></View>

                  <View style={styles.horizontalAlignement}>
                    <FoodElementText title="test" />
                    <Image source={brochette} style={{ width: 20, height: 20 }} />
                  </View>
                  <View style={{ height: 30 }}></View>

                  <View style={styles.horizontalAlignement}>
                    <FoodElementText title="test" />
                    <Image source={brochette} style={{ width: 20, height: 20 }} />
                  </View>
                  <View style={{ height: 30 }}></View>
  
                  
                </ScrollView>
              </View>
              <View style={{ height: 20 }}></View>
            </View>

            <View style={[styles.element, {marginTop:  40}]}>

                <View style={[styles.horizontalAlignement, {justifyContent: "flex-start", marginLeft: 10}]}>
                  <Text style={{fontSize: 20, color: '#ACA279'}}>Available</Text>
                </View>
                
                <View style={{ height: 5 }}></View>

                <View style={{ flex: 1}} >
                <ScrollView contentContainerStyle={{ alignItems: 'center', height: 150}}>
                <View style={styles.horizontalAlignement}>
                    <FoodElementText title="test" />
                    <Image source={brochette} style={{ width: 20, height: 20 }} />
                  </View>
                  <View style={{ height: 30 }}></View>

                  <View style={styles.horizontalAlignement}>
                    <FoodElementText title="test" />
                    <Image source={brochette} style={{ width: 20, height: 20 }} />
                  </View>
                  <View style={{ height: 30 }}></View>

                  <View style={styles.horizontalAlignement}>
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
          </View>
        </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#59BDCD',
    alignItems: 'center',
    display: 'flex',
    flexWrap: 'wrap',
    padding: 20,
  },
  element: {
    backgroundColor:'#F2F0E4', 
    borderRadius: 30,
  },
  horizontalAlignement: {
    display: 'flex',
    height: 30,
    width: 350,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 15,
  }
});
