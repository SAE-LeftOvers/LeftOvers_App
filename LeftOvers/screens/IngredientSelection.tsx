import React from 'react';
import { View, StyleSheet, Text, Image, Pressable,ScrollView} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import TopBar from '../components/TopBar';
import { Searchbar } from 'react-native-paper';
import brochette from '../assets/images/brochette.png'; 
import FoodElementText from '../components/FoodElementText';
import CustomButton from '../components/CustomButton';
import plus from '../assets/images/plus.png';
import moins from '../assets/images/minus.png';
import meat from '../assets/images/meat_icon.png';
import vegetable from '../assets/images/vegetable_icon.png';
import fruit from '../assets/images/fruit_icon.png';


export default function IngredientSelection(props) {

  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  type ItemProps = {value: string}

  const AvailaibleItem = ({value}: ItemProps) => (
    <><View style={styles.horizontalAlignement}>
      <FoodElementText title={value} />
      <Pressable>
        <Image source={plus} style={{ width: 20, height: 20 }} />
      </Pressable>
    </View><View style={{ height: 30 }}></View></>   
)

const ChooseItem = ({value}: ItemProps) => (
  <><View style={styles.horizontalAlignement}>
    <FoodElementText title={value} />
    <Pressable>
      <Image source={moins} style={{ width: 20, height: 20 }} />
    </Pressable>
  </View><View style={{ height: 30 }}></View></>   
)

  return (
    <SafeAreaProvider>
          <TopBar title="Ingredient selection" />
          <View style={styles.page}>

            <View style={styles.element}>
              <View style={[styles.horizontalAlignement, {justifyContent: 'center'}]}>
                <Pressable>
                    <Image source={meat} style={{ width: 30, height: 30 }} />
                </Pressable>
                <Pressable>
                    <Image source={vegetable} style={{ width: 30, height: 30 }} />
                </Pressable>
                <Pressable>
                    <Image source={fruit} style={{ width: 30, height: 30 }} />
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
                      {props.listIngredient.map((source, index) => (
                        <AvailaibleItem key={index} value={source}></AvailaibleItem>
                      ))}
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
                      {props.listIngredient.map((source, index) => (
                        <ChooseItem key={index} value={source}></ChooseItem>
                      ))}
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
