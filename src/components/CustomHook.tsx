import { TextInput, View, Button, Text } from "react-native";
import { useState } from "react";
import { Provider, useSelector, useDispatch } from "react-redux";
import { RootState } from "../reducers/reducer";

const InputBox = (props: any) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <TextInput
        value={props.value}
        onChangeText={props.onChangeText}
        style={{ borderBottomWidth: 1, width: 200 }}
        placeholder={props.placeholder}
      />
      <Button title="초기화" onPress={props.onReset} />
    </View>
  );
};

const useInput = (initialValue: any) => {
  const [value, setValue] = useState(initialValue);

  const resetValue = () => setValue(initialValue);

  return {
    value,
    setValue,
    resetValue,
  };
};

export function CustomHook({ navigation }: any) {
  const {
    value: name,
    setValue: setName,
    resetValue: resetName,
  } = useInput("");
  const { value: age, setValue: setAge, resetValue: resetAge } = useInput("");
  const {
    value: city,
    setValue: setCity,
    resetValue: resetCity,
  } = useInput("");

  const dispatch = useDispatch();

  const { value } = useSelector((state: RootState) => state.value);
  const { count } = useSelector((state: RootState) => state.count);

  const addValue = () => {
    dispatch({ type: "increment" });
  };
  const subValue = () => {
    dispatch({ type: "decrement" });
  };
  const resetValue = () => {
    dispatch({ type: "reset" });
  };
  const pushButton = () => {
    dispatch({ type: "push" });
  };

  return (
    <View>
      <InputBox
        value={name}
        onChangeText={setName}
        placeholder="이름을 입력해 주세요"
        onReset={resetName}
      />
      <InputBox
        value={age}
        onChangeText={setAge}
        placeholder="나이를 입력해 주세요"
        onReset={resetAge}
      />
      <InputBox
        value={city}
        onChangeText={setCity}
        placeholder="사는 곳을 입력해 주세요"
        onReset={resetCity}
      />
      <Button
        title="Go Register"
        onPress={() => navigation.navigate("Login")}
      />
      <View>
        <Text>value: {value}</Text>
        <Button title="+" onPress={addValue} />
        <Button title="-" onPress={subValue} />
        <Button title="reset" onPress={resetValue} />
        <Text>count: {count}</Text>
        <Button title="click" onPress={pushButton} />
      </View>
    </View>
  );
}
