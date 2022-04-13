import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ButtonGroup } from 'react-native-elements';

function SelectorComponent(props) {

  return (
    <>
    <View 
      style={styles.buttonWrapper}>
      <ButtonGroup
        buttons={['Beginner', 'Intermediate', 'Advanced']}
        selectedIndex={props.difficultyIndex}
        onPress={(value) => {
          props.onDifficultyChange(value);
        }}
        containerStyle={{ marginBottom: 20 }}
        selectedButtonStyle={styles.buttonStyleSelected}
      />

      <ButtonGroup
        buttons={['Vault', 'Wall', 'Bar', 'Flips']}
        selectedIndex={props.categoryIndex}
        onPress={(value) => {
          props.onCategoryChange(value);
        }}
        containerStyle={{ marginBottom: 20 }}
        selectedButtonStyle={styles.buttonStyleSelected}
      />
    </View>
  </>
  );
}

const styles = StyleSheet.create({
  buttonWrapper: {
      backgroundColor: '#FFF',
  },
  buttonStyleSelected: {
    backgroundColor: '#554BB2',
  },
});

export default SelectorComponent;