import React from "react";
import { Text, View } from "react-native";

type DateProps = {
  day: string;
  number: number;
  isMarked?: boolean;
  isToday?: boolean;
};

const Date = ({
  day,
  number,
  isMarked = false,
  isToday = false,
}: DateProps) => {
  return (
    <View
      className={`
        w-16 h-24 mx-1 items-center justify-center
        rounded-3xl border
        ${isToday ? "bg-black border-black" : "bg-white border-gray-300"}
      `}
    >
      {/* Marked dot */}
      {isMarked && (
        <View
          className={`
            w-2 h-2 rounded-full
            ${isToday ? "bg-white" : "bg-gray-400"}
            absolute top-2 self-center
          `}
        />
      )}
      <Text
        className={`
          text-base font-medium
          ${isToday ? "text-white" : "text-gray-500"}
          mt-3
        `}
      >
        {day}
      </Text>
      <Text
        className={`
          text-lg font-bold
          ${isToday ? "text-white" : "text-gray-800"}
          mt-1
        `}
      >
        {number}
      </Text>
    </View>
  );
};
export default Date;
