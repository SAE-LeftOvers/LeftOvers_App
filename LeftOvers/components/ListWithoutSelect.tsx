import React, { useContext } from 'react';
import { StyleSheet, Image } from 'react-native';

import { MultipleSelectList } from 'react-native-dropdown-select-list'
import ColorContext from '../theme/ColorContext';

type ListProps = {
    title: string
    content: string[]
}

export default function ListWithoutSelect(props: ListProps) {
    const [selected, setSelected] = React.useState([]);
    const colors = useContext(ColorContext).colors;

    const styles = StyleSheet.create({
        titleBar: {
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: colors.cardElementTitleBackground,
            borderTopRightRadius: 15,
            borderTopLeftRadius: 15,
            borderBottomRightRadius: 0,
            borderBottomLeftRadius: 0,
            borderWidth: 2,
            borderColor: colors.cardElementBorder,
            minWidth: "92%",
            maxWidth: "92%",
            marginBottom: 0,
            overflow: "hidden",
        },
        arrow: {
            resizeMode: 'contain',
            tintColor: colors.cardElementTitle,
            flex: 0.1,
        },
        title: {
            fontSize: 15,
            color: colors.cardElementTitle,
            alignItems: 'center',
            textAlign: "left",
            flex: 0.9,
        },
    
        itemList: {
            flexDirection: "row",
            alignItems: "flex-start",
            borderWidth: 0,
            borderTopRightRadius: 0,
            borderTopLeftRadius: 0,
            borderBottomRightRadius: 15,
            borderBottomLeftRadius: 15,
            backgroundColor: colors.cardElementBackground,
            minWidth: "92%",
            maxWidth: "92%",
        },
        itemCell: {
            padding: 0,
            paddingTop: "5%",
            width: "100%",
            minWidth: 250,
            maxWidth: 250,
        },
        itemText: {
            fontSize: 13,
            textAlign: "left",
            flex: 1,
            padding: 5,
            paddingLeft: 10,
            color: "#3F3C42",
        },
    
        box: {
            borderWidth: 0,
            flex: 0,
        }
    });

    return (
        <MultipleSelectList
            data={props.content}
            save="value"
            search={false}
            arrowicon={<Image source={require("../assets/images/arrow.png")} style={styles.arrow}></Image>}
            boxStyles={styles.titleBar}
            inputStyles={styles.title}
            dropdownStyles={styles.itemList}
            dropdownItemStyles={styles.itemCell}
            dropdownTextStyles={styles.itemText}
            checkBoxStyles={styles.box}
            notFoundText="None"
            placeholder={props.title}
            label={props.title}/>
    );
}

