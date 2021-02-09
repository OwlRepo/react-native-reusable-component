import React, { ReactNode } from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";

interface props {
  containerStyle?: StyleProp<ViewStyle>;
  containerProps?: React.ComponentProps<typeof View>;
}

const ReusableContainer: React.FC<props> = (props) => {
  const { children, ...restProps } = props;
  const mergedCardContainerStyle = [
    styles.cardContainerStyle,
    props.containerStyle,
  ];

  return (
    <View style={mergedCardContainerStyle} {...props.containerProps}>
      {children}
    </View>
  );
};

export default ReusableContainer;

const styles = StyleSheet.create({
  cardContainerStyle: {
    minWidth: 100.0,
    maxWidth: "100%",
    shadowColor: "black",
    backgroundColor: "white",
  },
});
