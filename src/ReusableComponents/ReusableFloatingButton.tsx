import React, { ReactNode } from "react";
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from "react-native";

interface props {
  containerStyle?: StyleProp<ViewStyle>;
  buttonProps?: React.ComponentProps<typeof TouchableOpacity>;
}

const ReusableFloatingButton: React.FC<props> = (props) => {
  const { children, ...restProps } = props;

  const mergedContainerStyle = [
    styles.containerStyle,
    restProps.containerStyle,
  ];

  return (
    <TouchableOpacity style={mergedContainerStyle} {...restProps.buttonProps}>
      {children}
    </TouchableOpacity>
  );
};

export default ReusableFloatingButton;

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
    shadowColor: "black",
    shadowOffset: { height: 1.0, width: 1.0 },
    shadowOpacity: 0.26,
    shadowRadius: 2.5,
    elevation: 3.0,
  },
});
