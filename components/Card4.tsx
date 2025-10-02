import FontAwesome from "@expo/vector-icons/FontAwesome";
import React from "react";
import { View } from "react-native";

const fontAwesomeIcons = [
  { name: "apple", color: "#fff" },
  { name: "android", color: "#fff" },
  { name: "github", color: "#fff" },
  { name: "twitter", color: "#fff" },
];

const Card4 = () => {
  return (
    <View className="bg-purple-400 rounded-3xl p-5 h-[80px] w-full">
      <View className="flex-row items-center justify-center">
        {fontAwesomeIcons.map((icon, idx) => (
          <View
            key={icon.name}
            className="w-10 h-10 rounded-full border-2 border-white bg-purple-800 items-center justify-center mr-2"
            style={{ marginLeft: idx === 0 ? 0 : -10, zIndex: 10 - idx }}
          >
            <FontAwesome name={icon.name as any} size={24} color={icon.color} />
          </View>
        ))}
      </View>
    </View>
  );
};
export default Card4;
