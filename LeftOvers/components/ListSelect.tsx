import React, { useContext } from 'react';
import {StyleSheet, Image} from 'react-native';
import {MultipleSelectList} from 'react-native-dropdown-select-list'
import ColorContext from '../theme/ColorContext';

type ListProps = {
    title: string
    content : string[]
    val : string[]
    setSelected: any;
}

export default function ListSelect(props: ListProps) {
    
    const {colors} = useContext(ColorContext);

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
            padding: "1%",
            paddingLeft: "3%",
            color: colors.cardElementText,
        },
    
        badges: {
            backgroundColor: colors.cardElementBackground,
        },
        badgesText: {
            fontSize: 15,
            color: colors.badgeText,
        },
        box: {
            borderColor: "#3F3C42"
        }
    });

    return (
        <MultipleSelectList
            setSelected={(val) => props.setSelected(val)}
            data={props.content}
            save="value"
            search={false}
            arrowicon={<Image source={require("../assets/images/arrow.png")} style={styles.arrow}></Image>}
            boxStyles={styles.titleBar}
            inputStyles={styles.title}
            dropdownStyles={styles.itemList}
            dropdownItemStyles={styles.itemCell}
            dropdownTextStyles={styles.itemText}
            badgeStyles={styles.badges}
            badgeTextStyles={styles.badgesText}
            checkBoxStyles={styles.box}
            notFoundText="All Diets Already Selected"
            placeholder={props.title}
            labelStyles={styles.title}
            label={props.title}/>
    );
}

