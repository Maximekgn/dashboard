import React from "react";
import { Image, StyleSheet, View } from "react-native";

const Profil = () => {
  return (
    <View>
      <Image
        source={require("../assets/images/avatar.jpg")}
        style={styles.avatar}
        height={60}
        width={60}
      />
    </View>
  );
};

export default Profil;
const styles = StyleSheet.create({
  avatar: {
    borderRadius: 35,
    width: 60,
    height: 60,
  },
});
