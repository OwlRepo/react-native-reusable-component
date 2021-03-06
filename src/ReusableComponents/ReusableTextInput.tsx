import React, { RefObject } from "react";
import {
  StyleProp,
  StyleSheet,
  TextInput,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";

interface props {
  ref?: RefObject<TextInput>;
  containerStyle?: StyleProp<ViewStyle>;
  textInputStyle?: StyleProp<TextStyle>;
}

export default function ReusableTextInput(props: {
  customComponentProps: props;
  coreComponentTextInputProps: React.ComponentProps<typeof TextInput>;
}) {
  var mergedContainerStyle = [
    styles.containerStyle,
    props.customComponentProps.containerStyle,
  ];
  var mergedTextInputStyle = [
    styles.textInputStyle,
    props.customComponentProps.textInputStyle,
  ];

  return (
    <View style={mergedContainerStyle}>
      <TextInput
        ref={props.customComponentProps.ref}
        style={mergedTextInputStyle}
        {...props.coreComponentTextInputProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    minWidth: 100.0,
    maxWidth: "100%",
    backgroundColor: "#E5E5E5",
    borderRadius: 5.0,
    alignItems: "stretch",
    justifyContent: "center",
  },
  textInputStyle: {
    color: "#343434",
    margin: 10.0,
    fontSize: 15.0,
  },
});
