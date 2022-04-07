import React from "react";
import { Text, View } from 'react-native';
import { StyleSheet } from "react-native";

const SkillCount = (props) => {
    if(props.category){
      return(
        <View>
        <Text>Skills In Category</Text>
        <Text>{props.category.length}</Text>
      </View>
      );
    } else {
      return <View />
    }
  }

  const styles = StyleSheet.create({
    styleContainer: {
        height: 200,
        overflow: 'scroll'
    },
    skillItem: {
        padding: 15,
        backgroundColor: '#f8f8f8',
        borderBottomWidth: 1,
        borderColor: '#eee'
    },
    skillItemView: {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    listItemText: {
        fontSize: 18,
    }
});
  
  export default SkillCount