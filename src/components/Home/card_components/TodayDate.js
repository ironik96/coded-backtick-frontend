import React from "react";
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const date = new Date();
const day = date.getDate();
const month = months[date.getMonth()];

const TodayDate = () => {
  return (
    <div className="flex flex-col w-full items-center justify-center h-full -translate-y-2">
      <div className="text-red font-bold translate-x-2">{month}</div>
      <div className="font-bold text-6xl">{day}</div>
    </div>
  );
};

export default TodayDate;
