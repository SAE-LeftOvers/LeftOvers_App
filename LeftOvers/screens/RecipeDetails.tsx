import React from 'react';
import { View, StyleSheet, Text} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import TopBar from '../components/TopBar';
import RecipeElementReduce from '../components/RecipeElementReduce';
import AllergiesTab from '../components/AllergiesTab';


export default function RecipeDetails(props) {
    return (
        <SafeAreaProvider>
          <TopBar title="Recipe Detail"/>
          <View style={styles.page}>
            <RecipeElementReduce 
                title={props.title} 
                number={props.number}
                duree={props.duree}/>

            <View style={{height: 20}}></View>

            <View style={styles.element}>
              <View style={[styles.horizontalAlignement, {justifyContent: "flex-start", marginLeft: 10}]}>
                    <Text style={{fontSize: 20, color: '#ACA279'}}>Preparation</Text>
              </View>
              <View style={{margin: 20}}>
                <AllergiesTab title="Ingredient" content={props.ingredient}></AllergiesTab>
                <View style={{height: 5}}></View>
                <AllergiesTab title="Ustensils" content={props.ustensils}></AllergiesTab>
              </View>
            </View >

            <View style={{height: 20}}></View>
                
            <View style={styles.element}>
              <View style={[styles.horizontalAlignement, {justifyContent: "flex-start", marginLeft: 10}]}>
                  <Text style={{fontSize: 20, color: '#ACA279'}}>Cooking</Text>
              </View>
              <View style={{margin: 20}}>
                <AllergiesTab title="Steps" content={props.steps}></AllergiesTab>
              </View>
            </View>
            
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
        marginTop: 10,
      }
    });
    