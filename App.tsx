import React, { useRef, useState } from "react";
import {
  Alert,
  Keyboard,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import Colors from "./src/Constants/ColorPalette";
import Spacers from "./src/Constants/Spacers";
import ReusableBodyText from "./src/ReusableComponents/ReusableBodyText";
import ReusableCardContainer from "./src/ReusableComponents/ReusableCardContainer";
import ReusableContainer from "./src/ReusableComponents/ReusableContainer";
import ReusableFlatButton from "./src/ReusableComponents/ReusableFlatButton";
import ReusableFloatingButton from "./src/ReusableComponents/ReusableFloatingButton";
import ReusableSubtitleText from "./src/ReusableComponents/ReusableSubtitleText";
import ReusableTextInput from "./src/ReusableComponents/ReusableTextInput";
import ReusableTitleText from "./src/ReusableComponents/ReusableTitleText";

// GUIDES ON HOW TO USE THIS LIBRARY
//1. customComponentProps is where you can modify the styles of the Reusable Component
//2. coreComponent<Component Name>Props is where you can access the functionalities
//   of the used Core Component such as the Text or the TextInput

export default function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const passwordTextInputRef = useRef<TextInput>(null);

  function dummyFunction() {
    console.log("TextInput: " + username + "\nSecuredTextInput: " + password);
  }

  function displayUI(): React.ReactNode {
    return (
      <View
        style={{
          width: "100%",
          flexDirection: "column",
          alignItems: "stretch",
          justifyContent: "center",
        }}
      >
        <ReusableTitleText text={"Sample Title Text"} />
        <ReusableSubtitleText text={"Sample subtitle text"} />
        <ReusableBodyText
          text={
            "This is a sample body text just to show that it works. This text is also centered."
          }
          textStyle={{ textAlign: "center", marginBottom: 20.0 }}
        />

        <ReusableTextInput
          customComponentProps={{
            textInputStyle: { margin: 15.0 },
          }}
          coreComponentTextInputProps={{
            placeholder: "Username",
            onChangeText: (value) => setUsername(value),
            onSubmitEditing: () => passwordTextInputRef.current?.focus(),
            value: username,
            returnKeyType: "next",
            secureTextEntry: false,
            autoCapitalize: "none",
            autoFocus: true,
            autoCompleteType: "off",
          }}
        />

        <ReusableTextInput
          customComponentProps={{
            ref: passwordTextInputRef,
            textInputStyle: { margin: 15.0 },
          }}
          coreComponentTextInputProps={{
            placeholder: "Password",
            onChangeText: (value) => setPassword(value),
            onSubmitEditing: dummyFunction,
            value: password,
            returnKeyType: "done",
            secureTextEntry: true,
          }}
        />

        <ReusableFloatingButton
          customComponentProps={{
            text: "SUBMIT",
            textStyle: { fontSize: 13 },
            containerStyle: {
              width: "100%",
              marginBottom: Spacers.defaultMargin,
            },
          }}
          coreComponentTouchableOpacityProps={{
            onPress: dummyFunction,
          }}
        />

        <ReusableFlatButton
          customComponentProps={{
            text: "CLEAR",
            textStyle: { fontSize: 13 },
            containerStyle: {
              width: "100%",
              marginBottom: Spacers.defaultMargin,
              backgroundColor: Colors.defaultColorRed,
            },
          }}
          coreComponentTouchableOpacityProps={{
            activeOpacity: 0.5,
            onPress: () => {
              if (username.length != 0 || password.length != 0) {
                setUsername("");
                setPassword("");
                Alert.alert("Are you sure");
                console.log("Cancelled and cleared.");
              }
            },
          }}
        />

        <ReusableFlatButton
          customComponentProps={{
            text: "CANCEL",
            textStyle: { fontSize: 13 },
            containerStyle: {
              width: "100%",
              marginBottom: Spacers.defaultMargin,
              backgroundColor: Colors.defaultColorGrey,
            },
          }}
          coreComponentTouchableOpacityProps={{
            activeOpacity: 0.5,
            onPress: () => {
              if (username.length != 0 || password.length != 0) {
                setUsername("");
                setPassword("");
                console.log("Cancelled and cleared.");
              }
            },
          }}
        />
      </View>
    );
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ReusableContainer
        customComponentProps={{
          cardContainerStyle: styles.container,
          childComponents: (
            <ReusableCardContainer
              customComponentProps={{
                cardContainerStyle: styles.cardContainerStyle,
                childComponents: displayUI(),
              }}
              coreComponentViewProps={{}}
            />
          ),
        }}
        coreComponentViewProps={{}}
      />
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.defaultColorWhite,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: "10%",
  },
  cardContainerStyle: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10.0,
  },
});
