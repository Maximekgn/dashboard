import React from "react";
import { Image, Text, View } from "react-native";
const Card1 = () => {
  return (
    <View className="flex-row items-center bg-purple-400 rounded-3xl p-5 mx-4 my-6 min-h-[140px] relative">
      <View className="flex-1">
        <Text className="text-[36px] font-bold text-gray-900 mb-1">
          Daily{"\n"}challenge
        </Text>
        <Text className="text-[12px] text-gray-700 mb-4">
          Do your plan before 09:00 AM
        </Text>
        <View className="flex-row items-center mt-2 h-10 relative">
          <Image
            source={require("../assets/images/profil1.jpg")}
            className="w-9 h-9 rounded-full border-2 border-white absolute z-30 left-0 bg-white"
          />
          <Image
            source={require("../assets/images/profil2.jpg")}
            className="w-9 h-9 rounded-full border-2 border-white absolute z-20 left-[18px] bg-white"
          />
          <Image
            source={require("../assets/images/profil3.jpg")}
            className="w-9 h-9 rounded-full border-2 border-white absolute z-10 left-[36px] bg-white"
          />
          <View className="w-9 h-9 rounded-full bg-purple-500 items-center justify-center absolute left-[54px] border-2 border-white">
            <Text className="text-white font-bold text-[15px]">+4</Text>
          </View>
        </View>
      </View>
      <Image
        source={require("../assets/images/image1.png")}
        className="w-[200px] h-[200px] absolute -right-3 -top-9"
        resizeMode="contain"
      />
    </View>
  );
};
export default Card1;
