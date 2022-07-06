import React from "react";
import crown from "../../../icons/crown.svg";

const iconSize = 16;

const BoardChart = ({
  totalpoints = 5,
  firstPlacePoints = 5,
  secondPlacePoints = 3,
  thirdPlacePoints = 1,
}) => {
  const styles = {
    thirdPlaceBar: {
      backgroundColor: "#df6d45",
      height: `${(thirdPlacePoints / totalpoints) * 100}%`,
    },
    firstPlaceBar: {
      backgroundColor: "#1dad91",
      height: `${(firstPlacePoints / totalpoints) * 100}%`,
    },
    secondPlaceBar: {
      backgroundColor: "#ffc122",
      height: `${(secondPlacePoints / totalpoints) * 100}%`,
    },
  };

  return (
    <>
      <div className="h-2/6"></div>
      <div className="w-full h-4/6 flex items-end justify-center">
        <Bar
          firstplace={false}
          placementStyle={styles.thirdPlaceBar}
          name={"Abdullah"}
        />
        <Bar
          firstplace={true}
          placementStyle={styles.firstPlaceBar}
          name={"Ahmad"}
        />
        <Bar
          firstplace={false}
          placementStyle={styles.secondPlaceBar}
          name={"Ahmad"}
        />
      </div>
    </>
  );
};

const Bar = ({ placementStyle, name, firstplace }) => {
  return (
    <div className="w-12 relative" style={placementStyle}>
      <div className="absolute t-0 -translate-y-8 inset-x-0 text-[10px] flex flex-col h-8 justify-end items-center">
        {firstplace && (
          <img src={crown} width={iconSize} height={iconSize} alt="crown" />
        )}
        {name}
      </div>
    </div>
  );
};

export default BoardChart;
