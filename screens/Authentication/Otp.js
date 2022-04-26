import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import { AuthLayout } from "../";
import { FONTS, SIZES, COLORS, icons } from "../../constants";

import { FormInput, CustomSwitch, TextButton } from "../../components";

const Otp = () => {
  return (
    <AuthLayout
      title="OTP Authentication"
      subtitle="An authentication code has been sent to your email address"
    ></AuthLayout>
  );
};

export default Otp;
