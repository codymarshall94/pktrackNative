import React from 'react';
import { ButtonGroup } from 'react-native-elements';

function SelectorComponent(props) {

  return (
    <>
      <ButtonGroup
        buttons={['Beginner', 'Intermediate', 'Advanced']}
        selectedIndex={props.difficultyIndex}
        onPress={(value) => {
          props.onDifficultyChange(value);
        }}
        containerStyle={{ marginBottom: 20 }}
      />

      <ButtonGroup
        buttons={['Vault', 'Wall', 'Bar', 'Flips']}
        selectedIndex={props.categoryIndex}
        onPress={(value) => {
          props.onCategoryChange(value);
        }}
        containerStyle={{ marginBottom: 20 }}
      />
  </>
  );
}


export default SelectorComponent;