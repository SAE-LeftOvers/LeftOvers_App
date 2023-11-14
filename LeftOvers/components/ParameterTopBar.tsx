import React from 'react';
import { Appbar } from 'react-native-paper';

interface TopBarProps{
    source : string
    firstImage  : string
    lastImage : string
  }
  
  
  export default function ParameterTopBar(props : any) {

    const goFilter = () =>{
        props.onEventFilter('Hello');
    }

    const goIngredients = () =>{
        props.onEventIngredient('Hello');
    }

    return (
        <Appbar.Header  style={{backgroundColor: '#F2F0E4', justifyContent: 'center'}} >
            <Appbar.Action icon="magnify" onPress={goIngredients} />
            <Appbar.Action icon="dots-vertical" onPress={goFilter} />
      </Appbar.Header>
    );
  }