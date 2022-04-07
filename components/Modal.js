import React from "react";
import Modal from "react-native-modal";
import { View, Text } from 'react-native';
import { Button } from "react-native-elements";
import { StyleSheet } from "react-native";



function SkillModal(props) {

    return(
    <View>
        <Modal 
            isVisible={props.isModalVisible}
            style={styles.modalStyle}
            >
            <View style={{flex: 1}}>
                <Text>{props.activeSkill.name}</Text>
                <Text>{props.activeSkill.description}</Text>
                <Button title="Hide Modal" onPress={props.toggleModal}/>
            </View>
        </Modal>
    </View>
    )
}

const styles = StyleSheet.create({
    modalStyle: {
        backgroundColor: 'white',
    }
  });
export default SkillModal;