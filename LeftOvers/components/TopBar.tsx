import React from 'react';
import { Appbar } from 'react-native-paper';

interface TopBarProps{
    source : string
    firstImage  : string
    lastImage : string
  }
  
  
  export default function TopBar(props : any) {

    const _goBack = () => console.log('Went back');

    const _handleSearch = () => console.log('Searching');

    const _handleMore = () => console.log('Shown more');
    return (
        <Appbar.Header  style={{backgroundColor: '#F2F0E4'}} >
            <Appbar.BackAction onPress={_goBack} />
            <Appbar.Content title="Recipes" />
            <Appbar.Action icon="magnify" onPress={_handleSearch} />
            <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
      </Appbar.Header>
    );
  }