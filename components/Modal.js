import React from "react";
import Modal from "react-native-modal";
import { View, Text } from 'react-native';
import { Button } from "react-native-elements";
import { StyleSheet } from "react-native";



function SkillModal(props) {

    return(
        <Modal 
            isVisible={props.isModalVisible}
            style={styles.modalStyle}>
            <View> 
                <View style={styles.modalHeader}>
                    <Text style={styles.modalHeaderTitle}>{props.activeSkill.name}</Text>
                </View>
                <View>
                    <Text style={styles.modalSubHeader}>Description:</Text>
                    <Text style={styles.modalContentText}>{props.activeSkill.description}</Text>
                </View>
                <View>
                    <Text style={styles.modalSubHeader}>Prerequisites:</Text>
                </View>
                <View>
                    <Text style={styles.modalSubHeader}>Subsquent:</Text>
                </View>
                <View style={{ width: 100, height: 100, alignSelf: 'center'}}>
                    <Button 
                        title="Go Back" 
                        type='outline' 
                        onPress={props.toggleModal}
                        style={{width: 40, marginTop: 20}}/>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalStyle: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: 'white',
    },
    modalHeader: {
        height: 100,
        backgroundColor: 'blue',
        fontSize: 18,
        justifyContent: "center",
    },
    modalHeaderTitle: {
        fontSize: 18,
        alignSelf: "center",
        color: 'white',
    },

    modalSubHeader: {
        alignSelf: 'center',
        fontSize: 16
    },

    modalContentText: {
        fontSize: 12,
    }
  });

export default SkillModal;
