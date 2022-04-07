import React from 'react';
import { ButtonGroup } from 'react-native-elements';

function SelectorComponent(props) {

  return (
    <>
      <ButtonGroup
        buttons={['Beginner', 'Intermediate', 'Advanced']}
        selectedIndex={props.difficultyIndex}
        onPress={(value) => {
          props.setDifficultyIndex(value);
        }}
        containerStyle={{ marginBottom: 20 }}
      />

      <ButtonGroup
        buttons={['Vault', 'Wall', 'Bar', 'Flips']}
        selectedIndex={props.categoryIndex}
        onPress={(value) => {
          props.setCategoryIndex(value);
        }}
        containerStyle={{ marginBottom: 20 }}
      />
  </>
  );
}


export default SelectorComponent;