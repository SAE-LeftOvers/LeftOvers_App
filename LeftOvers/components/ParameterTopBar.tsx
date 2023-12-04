import React, {useContext} from 'react';
import { Appbar } from 'react-native-paper';
import ColorContext from '../theme/ColorContext';

interface ParameterTopBarProps{
    onEventIngredient: () => void
    onEventFilter: () => void
    colorIngredients: string
    colorFilters: string
}
  
  
  export default function ParameterTopBar(props : ParameterTopBarProps) {
    const {colors} = useContext(ColorContext)
    
    return (
        <Appbar.Header style={{backgroundColor: colors.cardBackground, height: 50, justifyContent: "center", borderTopLeftRadius: 20, borderTopRightRadius: 20}}>
            <Appbar.Action icon="magnify" onPress={props.onEventIngredient} color={props.colorIngredients}/>
            <Appbar.Action icon="dots-vertical" onPress={props.onEventFilter} color={props.colorFilters}/>
        </Appbar.Header>
    );
  }