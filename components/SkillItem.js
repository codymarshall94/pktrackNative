import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import SkillModal from "./Modal";

//In my RenderSkill component, I passed in the skill prop from my FlatList
//I passed the prop of onPressItem to RenderSkill so that i can create an on press action to grab the skill passed in on click

function RenderSkill({ skill, onPressItem, tracked}) {




  return (
    <TouchableOpacity style={styles.skillItem} key={skill.id} onPress={() => onPressItem(skill)}>
      <View style={styles.skillItemView}>
        <Text style={styles.skillItemText}>{skill.name}</Text>
        <Icon name={skill.isTracked ? "check-circle" : null} size={20} color="#50C878" />
      </View>
    </TouchableOpacity>
  );
}




function SkillItem(props) {

  //active skill state is used to store the current clicked item in the skills list

  const [isModalVisible, setModalVisible] = useState(false);
  const [activeSkill, setActiveSkill] = useState(0);
  const [tracked, setTracked] = useState(false);
  
  
  const setActiveSkillTrack = () => {
    return activeSkill.isTracked = !activeSkill.isTracked;
  }

  const toggleModal = () => {
  setModalVisible(!isModalVisible);
  }

  //this function grabs the item passed in from RenderSkill and is store in the state
  const onPressItem = (item) => {
      setActiveSkill(item)
      toggleModal();
  }

  return (
    //Passing the category to Data then rendering through each item with the RenderSkill functionional component

    <>
      <View style={styles.listWrapper}>
        <FlatList
            data={props.category}
            renderItem={({ item }) => 
            <RenderSkill 
                skill={item} 
                onPressItem={onPressItem}
                tracked={tracked}
                />}
            keyExtractor={(item) => item.id}
        />
      </View>
      <SkillModal 
        isModalVisible={isModalVisible} 
        toggleModal={toggleModal}
        activeSkill={activeSkill}
        category={props.category}
        setTracked={setTracked}
        setActiveSkillTrack={setActiveSkillTrack}
        />
    </>
  );
}

/*-----------------STYLESHEET-----------------------*/

const styles = StyleSheet.create({
  listWrapper: {
    maxHeight: 200,
    overflow: "scroll",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: '#FFF'
  },
  skillItem: {
    maxHeight: 50,
    padding: 15,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  skillItemView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  skillItemText: {
    fontSize: 14,
    fontFamily: 'mainText'
  },
});

export default SkillItem;
