import React from "react";
import { View, Text } from "react-native";
import OTPInputView from "@twotalltotems/react-native-otp-input";

import { AuthLayout } from "../";
import { FONTS, SIZES, COLORS } from "../../constants";

import { TextButton } from "../../components";

const Otp = ({ navigation }) => {
  return (
    <AuthLayout
      title="OTP Authentication"
      subtitle="An authentication code has been sent to your email address"
      titleContainerStyle={{
        marginTop: SIZES.padding * 2,
      }}
    >
      {/* OTP Input */}
      <View
        style={{
          flex: 1,
          marginTop: SIZES.padding * 2,
        }}
      >
        <OTPInputView
          pinCount={4}
          style={{
            width: "100%",
            height: 50,
          }}
          codeInputFieldStyle={{
            width: 65,
            height: 65,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.lightGray2,
            color: COLORS.black,
            ...FONTS.h3,
          }}
          editable
          onCodeFilled={(code) => {
            console.log(code);
          }}
        />
      </View>
      {/* Footer */}
    </AuthLayout>
  );
};

export default Otp;
