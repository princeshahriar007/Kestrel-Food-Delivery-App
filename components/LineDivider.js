import { View } from "react-native";
import React from "react";

import { COLORS } from "../constants";

const LineDivider = ({ lineStyle }) => {
  return (
    <View
      style={{
        height: 1,
        width: "100%",
        backgroundColor: COLORS.gray2,
        ...lineStyle,
      }}
    ></View>
  );
};

export default LineDivider;
