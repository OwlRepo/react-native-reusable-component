import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface props {
  containerStyle?: Object;
}

export default function ReusableSpacer(props: props) {
  var mergedContainerStyle = [styles.containerStyle, props.containerStyle];
  return (
    <View style={mergedContainerStyle}>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
  },
});
