import React from "react";
import { StyleSheet, Text, View } from "react-native";

export function About({ navigation }: any) {
  return (
    <View style={styles.testStyle}>
      <Text>Menu</Text>
      <Text>Home</Text>
      <Text>Login</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  testStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
