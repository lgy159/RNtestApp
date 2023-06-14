import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { Input, Button } from "react-native-elements";

export function Home({ navigation }: any) {
  return (
    <View style={styles.testStyle}>
      <Text>Home Screen</Text>
      <Button
        title="Start My App"
        onPress={() => navigation.navigate("CustomHook")}
      />
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
