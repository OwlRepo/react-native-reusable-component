import React, { ReactNode } from "react";
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from "react-native";

interface props {
  text: string;
  textStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  extraChildComponents?: ReactNode;
}

export default function ReusableFlatButton(props: {
  customComponentProps: props;
  coreComponentTouchableOpacityProps: React.ComponentProps<
    typeof TouchableOpacity
  >;
}) {
  var mergedContainerStyle = [
    styles.containerStyle,
    props.customComponentProps.containerStyle,
  ];
  var mergedTextStyle = [
    styles.textStyle,
    props.customComponentProps.textStyle,
  ];

  return (
    <TouchableOpacity
      style={mergedContainerStyle}
      activeOpacity={0.26}
      {...props.coreComponentTouchableOpacityProps}
    >
      <Text style={mergedTextStyle}>{props.customComponentProps.text}</Text>
      {props.customComponentProps.extraChildComponents}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 15.0,
    fontWeight: "bold",
    color: "white",
    margin: 5.0,
  },
  containerStyle: {
    minWidth: 100.0,
    maxWidth: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4a8fff",
    borderRadius: 5.0,
    padding: 5.0,
  },
});
