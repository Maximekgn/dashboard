import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import React from "react";
import { View } from "react-native";

const TabBarIcon = ({ name, focused }: { name: string, focused: boolean }) => {
  return (
    <View
      className={`w-full h-full rounded-full items-center justify-center ${
        focused ? "bg-white" : "bg-transparent"
      }`}
      style={{
        backgroundColor: focused ? "#fff" : "transparent",
      }}
    >
      <FontAwesome
        name={name as any}
        color={focused ? "#000" : "#fff"}
        size={24}
      />
    </View>
  );
};

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#11131F",
          borderTopWidth: 0,
          elevation: 0,
          height: 80,
          paddingHorizontal: 15,
          paddingVertical: 10,
          marginHorizontal: 20,
          marginBottom: 20,
          borderRadius: 40,
          position: "absolute",
        },
        // Style pour chaque item de la tabbar
        tabBarItemStyle: {
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: 5,
        },
        // Style pour le conteneur des icônes
        tabBarIconStyle: {
          width: 60,
          height: 60,
          justifyContent: "center",
          alignItems: "center",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon name="home" focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: "Grid",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon name="th-large" focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="three"
        options={{
          title: "Stats",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon name="bar-chart" focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="four"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon name="user-o" focused={focused} />
          ),
        }}
      />
    </Tabs>
  );
}