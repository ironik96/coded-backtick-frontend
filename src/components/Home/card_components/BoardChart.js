import React from "react";
import crown from "../../../icons/crown.svg";

const iconSize = 16;

const BoardChart = ({
  totalpoints = 1,
  firstPlacePoints = totalpoints / 10,
  secondPlacePoints = totalpoints / 10,
  thirdPlacePoints = totalpoints / 10,
  firstPlaceName = "",
  secondPlaceName = "",
  thirdPlaceName = "",
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
          name={thirdPlaceName}
        />
        <Bar
          firstplace={true}
          placementStyle={styles.firstPlaceBar}
          name={firstPlaceName}
        />
        <Bar
          firstplace={false}
          placementStyle={styles.secondPlaceBar}
          name={secondPlaceName}
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
          <img
            className="grow"
            src={crown}
            width={iconSize}
            height={iconSize}
            alt="crown"
          />
        )}
        {name}
      </div>
    </div>
  );
};

export default BoardChart;
