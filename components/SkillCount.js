import React from "react";
import { Text, View } from 'react-native';
import { StyleSheet } from "react-native";

const SkillCount = (props) => {
    if(props.category){
      return(
        <View style={styles.countContainer}>
        <Text>Skills In Category: {props.category.length}</Text>
      </View>
      );
    } else {
      return <View />
    }
  }

  const styles = StyleSheet.create({
    countContainer: {
        marginTop: 5,
        padding: 5,
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        backgroundColor: '#f8f8f8',
        borderTopWidth: 1,
        borderTopColor: 'black'
    },
});
  
  export default SkillCount