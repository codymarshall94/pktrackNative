import React, { useState } from 'react'
import SelectorComponent from './SelectorComponent';
import SkillItem from './SkillItem';

function Main() {
  const [difficultyIndex, setDifficultyIndex] = useState(0);
  const [categoryIndex, setCategoryIndex] = useState(0);

  return (
    <>
    <SelectorComponent 
      categoryIndex={categoryIndex} 
      setCategoryIndex={setCategoryIndex}
      difficultyIndex={difficultyIndex}
      setDifficultyIndex={setDifficultyIndex}
     />
    <SkillItem />
    </>
  );
}

export default Main;