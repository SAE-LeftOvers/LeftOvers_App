import React from 'react';
import {StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import TopBar from '../components/TopBar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SelectedIngredient from '../components/SelectedIngredient';
import RecipeElement from '../components/RecipeElement';

interface RecipeSuggestionProps{
    source : string
    firstImage  : string
    lastImage : string
  }

  export default function RecipeSuggestion(props : any) {

    const imageList=[]
    return (
        <SafeAreaProvider>
            <TopBar></TopBar>
          
                <View style={styles.page}>
                    <SelectedIngredient listeIngredient={props.list}  imageList={imageList} style={styles.element}></SelectedIngredient>
                    <View style={{marginTop: 100}}>
                        <RecipeElement number="13" title="Pizza with Pineaples"  imageList={imageList} textList={props.list} description="delicious plate that will please you" style={styles.element}></RecipeElement>
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
      display: "flex",
      flexWrap: "wrap",
      padding: 20,   
    },
    element: {
        marginTop: 20,
    }
});

