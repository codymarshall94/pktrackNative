import React, { useState } from 'react';
import { ButtonGroup } from 'react-native-elements';

function SelectorComponent() {
  const [difficultyIndex, setDifficultyIndex] = useState(0);
  const [categoryIndex, setCategoryIndex] = useState(0);

  return (
    <>
      <ButtonGroup
        buttons={['Beginner', 'Intermediate', 'Advanced']}
        selectedIndex={difficultyIndex}
        onPress={(value) => {
          setDifficultyIndex(value);
        }}
        containerStyle={{ marginBottom: 20 }}
      />

      <ButtonGroup
        buttons={['Vault', 'Wall', 'Bar', 'Flips']}
        selectedIndex={categoryIndex}
        onPress={(value) => {
          setCategoryIndex(value);
        }}
        containerStyle={{ marginBottom: 20 }}
      />
  </>
  );
}


export default SelectorComponent;