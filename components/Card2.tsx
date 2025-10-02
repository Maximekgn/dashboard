import React from "react";
import { Image, Text, View } from "react-native";

const Card2 = () => {
  return (
    <View className="bg-amber-500 rounded-3xl p-5 h-full w-full  relative">
      {/* Badge */}
      <View className="absolute top-4 left-4 bg-orange-200 px-3 py-1 rounded-full">
        <Text className="text-gray-700 text-base font-medium">Medium</Text>
      </View>
      {/* Main Content */}
      <View className="mt-10">
        <Text className="text-2xl font-bold text-gray-900 mb-2">
          Yoga Group
        </Text>
        <Text className="text-base text-gray-700 mb-1">25 Nov.</Text>
        <Text className="text-base text-gray-700 mb-1">14:00–15:00</Text>
        <Text className="text-base text-gray-700 mb-4">A5 room</Text>
      </View>
      {/* Trainer */}
      <View className="flex-row items-center absolute bottom-4 left-5">
        <Image
          source={require("../assets/images/avatar.jpg")}
          className="w-10 h-10 rounded-full border-2 border-white mr-3"
        />
        <View>
          <Text className="text-xs text-gray-700">Trainer</Text>
          <Text className="text-base font-semibold text-gray-900">
            Tiffany Way
          </Text>
        </View>
      </View>
    </View>
  );
};
export default Card2;
