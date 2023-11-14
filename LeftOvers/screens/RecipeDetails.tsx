import React from 'react';
import { View, StyleSheet} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import TopBar from '../components/TopBar';
import RecipeElementReduce from '../components/RecipeElementReduce';


export default function RecipeDetails(props) {
    return (
        <SafeAreaProvider>
          <TopBar title="Recipe Detail" />
          <View style={styles.page}>
            <RecipeElementReduce 
                title={props.title} 
                number={props.number}
                duree={props.duree}/>
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
        marginTop: 20,
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
    