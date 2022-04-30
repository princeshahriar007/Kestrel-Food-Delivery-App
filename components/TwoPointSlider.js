import { View, Text, StyleSheet } from "react-native";
import React from "react";
import MultiSlider from "@ptomasroos/react-native-multi-slider";

import { COLORS, FONTS, SIZES } from "../constants";

const TwoPointSlider = ({
  values,
  min,
  max,
  prefix,
  postfix,
  onValueChange,
}) => {
  return (
    <MultiSlider
      values={values}
      sliderLength={SIZES.width - SIZES.padding * 2 - 20}
      min={min}
      max={max}
      step={1}
      markerOffsetY={20}
      selectedStyle={{
        backgroundColor: COLORS.primary,
      }}
      markerContainerStyle={{
        width: 65,
      }}
      trackStyle={{
        height: 10,
        borderRadius: 10,
        backgroundColor: COLORS.lightGray2,
      }}
      minMarkerOverlapDistance={50}
      customMarker={(e) => {
        return (
          <View
            style={{
              height: 60,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                height: 30,
                width: 30,
                borderRadius: 15,
                borderWidth: 4,
                borderColor: COLORS.white,
                backgroundColor: COLORS.primary,
                ...styles.shadow,
              }}
            />
            <Text
              style={{
                marginTop: 5,
                color: COLORS.darkGray,
                ...FONTS.body4,
              }}
            >
              {prefix}
              {e.currentValue}
              {postfix}
            </Text>
          </View>
        );
      }}
      onValuesChange={(values) => onValueChange(values)}
    />
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 1,
    shadowOpacity: 0.1,
  },
});

export default TwoPointSlider;
