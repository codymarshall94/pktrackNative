import React from "react";
import { Text, View } from 'react-native';
import { StyleSheet } from "react-native";

const SkillCount = (props) => {
    if(props.category){
      return(
        <View style={styles.countContainer}>
        <Text style={{fontFamily: 'mainText'}}>Skills In Category: {props.category.length}</Text>
        </View>
      );
    } else {
      return <View />
    }
  }

  const styles = StyleSheet.create({
    countContainer: {
        marginTop: 5,
        padding: 10,
        justifyContent: 'center',
        alignSelf: "center",
        borderTopLeftRadius: 100
    },
});
  
  export default SkillCount