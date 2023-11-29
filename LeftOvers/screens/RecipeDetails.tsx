import React from 'react';
import {View, StyleSheet, ScrollView, useWindowDimensions, Text} from 'react-native';
import {SafeAreaProvider } from 'react-native-safe-area-context';
import {LinearGradient} from 'expo-linear-gradient';
import TopBar from '../components/TopBar';
import RecipeElementReduce from '../components/RecipeElementReduce';
import ListWithoutSelect from '../components/ListWithoutSelect';
import ValidateButton from '../components/ValidateButton';

export default function RecipeDetails(props) {
    const ing = [{value: "Chocolate"}, {value: "Milk"}, {value: "Eggs"}, {value: "Flour"}]
    const ute = [{value: "Spoon (3cl)"}, {value: "Whisk"}, {value: "Oven"}]
    const ste = [
        {value: "1. Break the eggs and whisk them. Add the flour."},
        {value: "2. Melt the chocolate in the microwave. Add it to the eggs."},
        {value: "3. Put the cake in the oven. 40 minutes, 180 degrees."},
        {value: "4. Clean the utensils."}
    ]

    return (
        <SafeAreaProvider>
          <TopBar title="Recipe Detail"/>
          <ScrollView>
            <LinearGradient colors={['#2680AA', '#59BDCD']} style={[styles.linearGradient, {minHeight: useWindowDimensions().height}]}>
                <View style={{marginTop: "6%"}}>
                    <RecipeElementReduce title="Meat Stick" number="63" duration="15 minutes"/>
                </View>
                <View style={styles.separator}/>
                <View style={styles.background}>
                    <View style={styles.filterBar}>
                        <Text style={styles.filters}>Preparation</Text>
                    </View>
                    <ListWithoutSelect title="Ingredients" content={ing}></ListWithoutSelect>
                    <View style={{marginTop: "3%"}}/>
                    <ListWithoutSelect title="Utensils" content={ute}></ListWithoutSelect>
                    <View style={{marginTop: "3%"}}/>
                </View>
                <View style={styles.separator}/>
                <View style={styles.background}>
                    <View style={styles.filterBar}>
                        <Text style={styles.filters}>Cooking</Text>
                    </View>
                    <ListWithoutSelect title="Steps" content={ste}></ListWithoutSelect>
                    <View style={{marginTop: "3%"}}/>
                </View>
                <View style={{marginBottom: "20%"}}/>
            </LinearGradient>
          </ScrollView>
        </SafeAreaProvider>
      );
    }
    
    const styles = StyleSheet.create({
      linearGradient: {
            width: "100%",
            flex: 1,
            alignItems: "center",
            justifyContent: "flex-start"
      },
      separator: {
            marginTop: "6%",
      },

      background: {
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 20,
              backgroundColor: '#F2F0E4',
              padding: "3%",
              marginHorizontal: "3%",
      },

      filterBar: {
                flexDirection: "row",
                width: "85%",
                paddingTop: "3%",
                paddingBottom: "2%",
                alignItems: "flex-end",
                justifyContent: "center",
      },
      filters: {
                fontSize: 20,
                color: '#ACA279',
                flex: 1,
      },
      nbSelected: {
                fontSize: 11,
                color: "#3F3C42",
                textAlign: "right",
      },
    });
    