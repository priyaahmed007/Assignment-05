import { use } from "react";
import TechnologyCard from "./TechnologyCard";

const technologiesPromise = fetch("/data/technologies.json")
  .then((response) => response.json());

const TechnologyList = ({ selectedStack, handleAdd }) => {

  const technologyData = use(technologiesPromise);

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

      {technologyData.map((technologyInfo) => {

        const isSelected = selectedStack.some(
          (stackItem) => stackItem.id === technologyInfo.id
        );

        return (
          <TechnologyCard
            key={technologyInfo.id}
            technologyInfo={technologyInfo}
            handleAdd={handleAdd}
            isSelected={isSelected}
          />
        );
      })}

    </div>
  );
};

export default TechnologyList;