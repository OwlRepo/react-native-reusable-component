import React from "react";
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";

interface props {
  text: string;
  textStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
}

export default function ReusableTitleText(props: props) {
  var mergedContainerStyle = [styles.containerStyle, props.containerStyle];
  var mergedTextStyle = [styles.textStyle, props.textStyle];

  return (
    <View style={mergedContainerStyle}>
      <Text style={mergedTextStyle}>{props.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    alignItems: "center",
    justifyContent: "center",
    margin: 5.0,
  },
  textStyle: {
    fontSize: 18.0,
    fontWeight: "bold",
  },
});
