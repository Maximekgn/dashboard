import React from "react";
import { Image, Text, View } from "react-native";

const Card3 = () => {
  return (
    <View className="bg-blue-300 rounded-3xl p-5  w-full  relative">
      {/* Badge */}
      <View className="absolute top-4 left-4 bg-blue-100 px-3 py-1 rounded-full">
        <Text className="text-gray-700 text-base font-medium">Light</Text>
      </View>
      {/* Main Content */}
      <View className="mt-10">
        <Text className="text-2xl font-bold text-gray-900 mb-2">
          Balance
        </Text>
        <Text className="text-sm text-gray-700 mb-1">28 Nov.</Text>
        <Text className="text-sm text-gray-700 mb-1">14:00–15:00</Text>
        <Text className="text-sm text-gray-700 mb-4">A5 room</Text>
      </View>

      {/* Right image */}
      <Image
        source={require("../assets/images/image2.png")}
        className="w-[150px] h-[150px] absolute -right-9 top-5"
        resizeMode="contain"
      />
    </View>
  );
};
export default Card3;
