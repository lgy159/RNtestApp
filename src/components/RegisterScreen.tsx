import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  StatusBar,
  Keyboard,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { Input } from "react-native-elements";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { useHeaderHeight } from "@react-navigation/elements";

export const Register = (props: any) => {
  const navigation = props.navigation;
  return (
    <View style={styles.container}>
      <View
        style={{
          // flex: 1,
          paddingTop: 40,
          backgroundColor: "#fff",
          alignItems: "center",
        }}
      >
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate("Home")}
        />
      </View>

      <View
        style={{
          // flex: 3,
          backgroundColor: "#fff",
          alignItems: "center",
          paddingHorizontal: 20,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            color: "#636262",
            padding: 20,
            marginBottom: 10,
          }}
        >
          Create New Account
        </Text>
        <KeyboardAvoidingView
          style={styles.rootContainer}
          behavior="padding"
          // keyboardVerticalOffset={useHeaderHeight()}
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View>
              <Input
                inputContainerStyle={styles.inputContainerStyle}
                inputStyle={{
                  fontSize: 14,
                }}
                placeholder="Name"
                leftIcon={
                  <Icon name="person-sharp" size={18} color="#cacaca" />
                }
              />
              <Input
                inputContainerStyle={styles.inputContainerStyle}
                inputStyle={{
                  fontSize: 14,
                }}
                keyboardType="numeric"
                maxLength={10}
                placeholder="Phone"
                leftIcon={<Icon name="call-sharp" size={18} color="#cacaca" />}
              />
              <Input
                inputContainerStyle={styles.inputContainerStyle}
                inputStyle={{
                  fontSize: 14,
                }}
                maxLength={20}
                placeholder="Password"
                secureTextEntry={true}
                leftIcon={<Icon name="lock-closed" size={18} color="#cacaca" />}
              />
              <View
                style={{
                  paddingHorizontal: 10,
                }}
              >
                <Button title="REGISTER" />
              </View>

              <View
                style={{
                  flexDirection: "row",
                  marginVertical: 10,
                  paddingHorizontal: 20,
                }}
              >
                <Text
                  style={{
                    color: "#bfbfbf",
                  }}
                >
                  Aleardy have an account ?
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                  <Text
                    style={{
                      color: "#8462f5",
                    }}
                  >
                    {" "}
                    Login here
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </View>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#fff"
        translucent={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    // flex: 1,
    backgroundColor: "#ffffff",
  },
  container: {
    // flex: 1,
    backgroundColor: "#fff",
    // marginTop: StatusBar.currentHeight,
  },
  inputContainerStyle: {
    height: 50,
    borderColor: "#ddd",
    borderWidth: 1,
    width: "100%",
    paddingHorizontal: 10,
    paddingTop: 1,
    paddingBottom: 3,
    borderRadius: 20,
  },
});
