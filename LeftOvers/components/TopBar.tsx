import React from 'react';
import { Appbar } from 'react-native-paper';

interface TopBarProps{
    title : string
    isVisible : boolean
}
  
export default function TopBar(props) {
    const _goBack = () => console.log('Went back');
    const _handleSearch = () => console.log('Searching');
    const _handleMore = () => console.log('Shown more');

    return (
        <Appbar.Header  style={{backgroundColor: '#F2F0E4'}} >
            <Appbar.BackAction onPress={_goBack} color={"#3F3C42"}/>
            <Appbar.Content title={props.title} color={"#3F3C42"}/>
            {props.isVisible &&(
              <><Appbar.Action icon="magnify" onPress={_handleSearch} color={"#3F3C42"}/>
              <Appbar.Action icon="dots-vertical" onPress={_handleMore} color={"#3F3C42"}/>
              </>
            )}
      </Appbar.Header>
    );
}