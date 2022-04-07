import React, { useState } from "react";
import SelectorComponent from "./SelectorComponent";
import SkillCount from "./SkillCount";
import SkillItem from "./SkillItem";
import { vaultskill } from "../vaults";
import { wallSkill } from "../wall";
import { FLIPS } from "../flips";
import { barSkill } from "../bar";

function Main() {
  const [difficultyIndex, setDifficultyIndex] = useState(0);
  const [categoryIndex, setCategoryIndex] = useState(0);
  const [category, setCategory] = useState(vaultskill[0]);

  const onDifficultyChange = (value) => {
    setDifficultyIndex(value);
    onCategoryChange();
  };

  const onCategoryChange = (value) => {
    setCategoryIndex(value);

    if (value == [0]) {
      setCategory(vaultskill[difficultyIndex]);
    } else if (value == [1]) {
      setCategory(wallSkill);
    } else if (value == [2]) {
      setCategory(barSkill[difficultyIndex]);
    } else if (value == [3]) {
      setCategory(FLIPS[difficultyIndex]);
    } else {
      setCategory(null);
    }
  };

  return (
    <>
      <SelectorComponent
        categoryIndex={categoryIndex}
        setCategoryIndex={setCategoryIndex}
        difficultyIndex={difficultyIndex}
        setDifficultyIndex={setDifficultyIndex}
        setCategory={setCategory}
        onCategoryChange={onCategoryChange}
        onDifficultyChange={onDifficultyChange}
      />
      <SkillItem
        category={category}
        setCategory={setCategory}
        categoryIndex={categoryIndex}
      />
      <SkillCount category={category} />
    </>
  );
}

export default Main;
