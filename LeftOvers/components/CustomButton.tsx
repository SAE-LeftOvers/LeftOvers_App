import React from 'react';
import { Button, View } from 'react-native';

export default function CustomButton(props) {
    return (
        <View style={styles.View}>
            <Button
                title={props.title}
                onPress={props.onPress}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: 'black',
    },
    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    },
  });