import React from "react";
import { View, Text, ImageBackground, Image, Animated } from "react-native";

import { constants, images, FONTS, SIZES, COLORS } from "../../constants";

const OnBoarding = () => {
  function renderHeaderLogo() {
    return (
      <View
        style={{
          position: "absolute",
          top: SIZES.height > 800 ? 50 : 25,
          left: 0,
          top: 0,
          right: 0,
          alignItems: "center",
          justifyContent: "center",
          marginTop: SIZES.padding,
        }}
      >
        <Image
          source={images.logo_01}
          resizeMode="contain"
          style={{
            width: SIZES.width * 0.5,
            height: 100,
          }}
        />
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}
    >
      {renderHeaderLogo()}
    </View>
  );
};

export default OnBoarding;
