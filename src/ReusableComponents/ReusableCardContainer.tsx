import React, { ReactNode } from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";

interface props {
  cardContainerStyle?: StyleProp<ViewStyle>;
  cardContainerProps?: React.ComponentProps<typeof View>;
}

const ReusableCardContainer: React.FC<props> = (props) => {
  const { children, ...restProps } = props;
  const mergedCardContainerStyle = [
    styles.cardContainerStyle,
    props.cardContainerStyle,
  ];

  return (
    <View style={mergedCardContainerStyle} {...props.cardContainerProps}>
      {children}
    </View>
  );
};

export default ReusableCardContainer;

const styles = StyleSheet.create({
  cardContainerStyle: {
    minWidth: 100.0,
    maxWidth: "100%",
    shadowColor: "black",
    shadowOffset: { height: 1.0, width: 1.0 },
    shadowOpacity: 0.26,
    shadowRadius: 2.5,
    elevation: 5.0,
    backgroundColor: "white",
  },
});
