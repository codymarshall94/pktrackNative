import React, { useState } from "react";
import Modal from "react-native-modal";
import { View, Text } from 'react-native';
import { Button, CheckBox } from "react-native-elements";
import { StyleSheet } from "react-native";

function SkillModal(props) {
    const [check, setCheck] = useState(false);

    const changeTrack = (value) => {
        setCheck(value);
        props.setTracked(value);
        props.setActiveSkillTrack(value);
    } 

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
                    <Text style={styles.modalContentText}>{props.activeSkill.prerequisite}</Text>
                </View>
                <View>
                    <Text style={styles.modalSubHeader}>Subsquent:</Text>
                </View>
                <View>
                    <CheckBox
                        center
                        title='Track Skill'
                        checkedTitle="Skill Tracked"
                        checked={props.activeSkill.isTracked}
                        onPress={() => changeTrack(!check)}
                        textStyle={{fontFamily: 'mainText'}}
                        containerStyle={{backgroundColor: '#FFF', border: 'none', }}
                        checkedColor='green'
                    />
                </View>
                <View style={{ width: 100, height: 100, alignSelf: 'center'}}>
                    <Button 
                        title="Go Back" 
                        onPress={props.toggleModal}
                        style={{width: 40, marginTop:5, color:'black'}}
                        buttonStyle={{backgroundColor: '#554BB2'}}/>
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
        backgroundColor: '#554BB2',
        fontSize: 18,
        justifyContent: "center",
    },
    modalHeaderTitle: {
        fontSize: 18,
        alignSelf: "center",
        color: 'white',
        fontFamily: 'mainText'
    },

    modalSubHeader: {
        alignSelf: 'center',
        fontSize: 16,
        fontFamily: 'mainText'
    },

    modalContentText: {
        fontSize: 12,
        alignSelf: 'center',
        paddingBottom: 5,
        paddingHorizontal: 5,
        fontFamily: 'mainText'
    }
  });

export default SkillModal;
