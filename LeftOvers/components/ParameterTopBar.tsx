import React from 'react';
import { Appbar } from 'react-native-paper';

interface ParameterTopBarProps{
    onEventIngredient: () => void
    onEventFilter: () => void
    colorIngredients: string
    colorFilters: string
}
  
  
  export default function ParameterTopBar(props : ParameterTopBarProps) {
    return (
        <Appbar.Header style={{backgroundColor: '#F2F0E4', height: "10%", justifyContent: "center", borderTopLeftRadius: 20, borderTopRightRadius: 20,}}>
            <Appbar.Action icon="magnify" onPress={props.onEventIngredient} color={props.colorIngredients}/>
            <Appbar.Action icon="dots-vertical" onPress={props.onEventFilter} color={props.colorFilters}/>
        </Appbar.Header>
    );
  }