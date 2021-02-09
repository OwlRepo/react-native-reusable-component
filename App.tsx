import {
  Keyboard,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useRef, useState } from "react";

import Colors from "./src/Constants/ColorPalette";
import ReusableBodyText from "./src/ReusableComponents/ReusableBodyText";
import ReusableCardContainer from "./src/ReusableComponents/ReusableCardContainer";
import ReusableContainer from "./src/ReusableComponents/ReusableContainer";
import ReusableFlatButton from "./src/ReusableComponents/ReusableFlatButton";
import ReusableFloatingButton from "./src/ReusableComponents/ReusableFloatingButton";
import ReusableSubtitleText from "./src/ReusableComponents/ReusableSubtitleText";
import ReusableTextInput from "./src/ReusableComponents/ReusableTextInput";
import ReusableTitleText from "./src/ReusableComponents/ReusableTitleText";
import Spacers from "./src/Constants/Spacers";

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
      <ReusableCardContainer cardContainerStyle={styles.cardContainerStyle}>
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
            textInputStyle:
              Platform.OS == "web"
                ? { margin: 15.0, outlineWidth: 0.0 }
                : { margin: 15.0 },
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
            textInputStyle:
              Platform.OS == "web"
                ? { margin: 15.0, outlineWidth: 0.0 }
                : { margin: 15.0 },
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
          containerStyle={{
            width: "100%",
            marginBottom: Spacers.defaultMargin,
          }}
          buttonProps={{
            onPress: () => {
              console.log("SUBMIT BUTTON");
            },
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold", margin: 5.0 }}>
            SUBMIT
          </Text>
        </ReusableFloatingButton>

        <ReusableFlatButton
          containerStyle={{
            width: "100%",
            marginBottom: Spacers.defaultMargin,
            backgroundColor: Colors.defaultColorRed,
          }}
          buttonProps={{
            onPress: () => {
              setUsername("");
              setPassword("");
            },
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold", margin: 5.0 }}>
            CLEAR
          </Text>
        </ReusableFlatButton>
      </ReusableCardContainer>
    );
  }

  if (Platform.OS != "web") {
    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <ReusableContainer containerStyle={styles.container}>
          {displayUI()}
        </ReusableContainer>
      </TouchableWithoutFeedback>
    );
  } else {
    return (
      <ReusableContainer containerStyle={styles.container}>
        {displayUI()}
      </ReusableContainer>
    );
  }
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
    flexDirection: "column",
    width: "100%",
    alignItems: "stretch",
    justifyContent: "center",
    borderRadius: 10.0,
  },
});
