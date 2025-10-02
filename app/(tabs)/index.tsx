import Card1 from "@/components/Card1";
import Card2 from "@/components/Card2";
import Card3 from "@/components/Card3";
import Card4 from "@/components/Card4";
import Date from "@/components/Date";
import Profil from "@/components/Profil";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function TabOneScreen() {
  const dates = [
    { day: "Mon", number: 22, isMarked: true, isToday: false },
    { day: "Tue", number: 23, isMarked: false, isToday: false },
    { day: "Wed", number: 24, isMarked: true, isToday: false },
    { day: "Thu", number: 25, isMarked: true, isToday: true },
    { day: "Fri", number: 26, isMarked: false, isToday: false },
    { day: "Sat", number: 27, isMarked: true, isToday: false },
    { day: "Sun", number: 28, isMarked: true, isToday: false },
  ];
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView>

        <View className="flex-row items-center justify-between mx-6">
          <Profil />
          <View className="flex-col gap-2">
            <Text className="text-2xl font-bold text-center">
              Hello Maxime !
            </Text>
            <Text className="text-xl text-gray-600 text-center">
              Today 25 Nov
            </Text>
          </View>

          <View className="p-2 rounded-full shadow-xlg border-2 border-gray-300 items-center bg-white justify-center">
          <FontAwesome name="search" size={20} color="black" />
          </View>
          
        </View>
        <View className="mt-10">
          <Card1 />
        </View>
        
        <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16 }}
        snapToInterval={300} 
        decelerationRate="fast"
      >
          {dates.map((date, index) => (
            <Date key={index} {...date} />
          ))}
        </ScrollView>
        
        <Text className="text-2xl font-bold mt-8 mx-6 mb-6">Your Plans</Text>

        <View className="flex-row flex-1 gap-1 px-6" >
          <View className="w-1/2">
            <Card2  />
          </View>

          <View className="w-1/2 flex-col gap-2">
            <Card3  />
            <Card4 />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
