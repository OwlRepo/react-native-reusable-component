import React, { ReactNode } from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";

interface props {
  cardContainerStyle?: StyleProp<ViewStyle>;
  childComponents: ReactNode;
}

export default function ReusableContainer(props: {
  customComponentProps: props;
  coreComponentViewProps: React.ComponentProps<typeof View>;
}) {
  var mergedCardContainerStyle = [
    styles.cardContainerStyle,
    props.customComponentProps.cardContainerStyle,
  ];
  return (
    <View {...props.coreComponentViewProps} style={mergedCardContainerStyle}>
      {props.customComponentProps.childComponents}
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainerStyle: {
    minHeight: "10%",
    minWidth: 100.0,
    maxWidth: "100%",
    backgroundColor: "white",
    padding: 10.0,
  },
});
